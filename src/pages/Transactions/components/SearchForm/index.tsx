import { MagnifyingGlass } from '@phosphor-icons/react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const loadTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.loadTransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await loadTransactions(data.query)
    /* quando o contexto TransactionsContext for atualizado, esse componente será renderizado novamente
    por usar a função "loadTransactions" */
    /* no reactdevtools -> why did this render ? - hooke 3 changed (hook 3 é o ) */
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        {/* assume a cor padrão setada no botão */}
        Buscar
      </button>
    </SearchFormContainer>
  )
}
