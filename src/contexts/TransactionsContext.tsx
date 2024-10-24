import { ReactNode, useCallback, useEffect, useState } from 'react'
import { TransactionType } from '../components/NewTransactionModal/styles'
import { api } from '../libs/axios'
import { createContext } from 'use-context-selector'

interface TransactionType {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
interface NewTransactionType {
  description: string
  price: number
  category: string
  type: TransactionType['type'] // "income" | "outcomed"
  createdAt: Date
  /* 
    - Observação aula: seria possível sim, exportar o type do schema de nova transação, a saber: transactionFormInputs, porém daí
    estaríamos prendendo o nosso contexto ao formulário. Isso pode ser ruim, porque caso algum dia haja uma nova forma de inserir transações que não pelo formulário e com mais campos teríamos problema. Estaríamos aclopando o contexto ao formulário, isso pode ser ruim.
    */
}

interface TransactionsContextType {
  transactions: TransactionType[]
  loadTransactions: (query?: string) => Promise<void>
  createTransaction: (data: NewTransactionType) => Promise<void>
  /* Lembro de uma aula anterior, onde era possível passar a função que setava o estado para o contexto. Porém, essa solução possui dois pontos negativos: 
        -  A tipagem dessa função é complexa
        - Expõem de forma "perigoso" o estado.
    */
}
export const TransactionsContext = createContext({} as TransactionsContextType) // A API É A MESMA, NÃO É PRECISO ALTERAR ALGO NA LÓGICA DO CONTEXT

export const TrasanctionContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])
  // quando criamos states, sempre é importate tipar o mesmo, principalmente quando se trata de objeto ou array.
  const loadTransactions = useCallback(async (query?: string) => {
    // "/transactions" ou "transactions" é a mesma coisa
    const response = await api.get('/transactions', {
      params: {
        _order: 'desc',
        _sort: 'createdAt',
        description: query,
      },
    }) // não preciso converter o json para js, a própria lib faz isso para mim
    // console.log(response); esse objecto é semelhate a quando usamos fetch e then sem antes de dar um .json

    setTransactions(response.data)
  }, []) // semelhante ao useEffect. Com array vazio,  nunca será recriado, obs: não usa estado ou variável exterior à função
  const createTransaction = useCallback(async (data: NewTransactionType) => {
    const { description, type, category, price, createdAt } = data
    const response = await api.post('/transactions', {
      description,
      type,
      category,
      price,
      createdAt,
    })
    setTransactions((transactionsPrevState) => [
      response.data,
      ...transactionsPrevState,
    ])
    // para não ter que consultar api outra vez já atualizamos o estado que contém as transações.
    // tendo em vista que para criar uma transação é feita uma requisição à API.
  }, []) // isso juntamente com o useContextSelector impede que a função seja reescrita quando houver mudança no contexto (comportamento padrão do react)
  // o useContextSelector faz com que o react observe somente a função e não todo o contexto
  // já o useCallback impede que a função seja recriada.
  // quando a função é recriada, os componentese que a utilizam, são renderizados novamente. O useCallback alinhado com o useSelectorContext impede que o componente (que está usando a função) seja renderizado outra vez por haver mudança nos estados ligados à essas funções.

  /* 
    Observações aula: poderíamos ter uma função somente que atualiza o estado de transações. Porém isso deixaria em muito em aberto. Por exemplo poderíamos com essa função remover de qualquer componente dentro do contexto, alguma transação.
    
    Criando uma função que somente adiciona uma transação de forma tipada, nós limitamos e de certa forma "protegemos" nosso estado.
    */

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        loadTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
