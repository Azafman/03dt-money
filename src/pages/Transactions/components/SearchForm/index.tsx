import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/TransactionsContext"

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const { loadTransactions } = useContext(TransactionsContext)
  const {
    register, 
    handleSubmit,
    formState: { isSubmitting,  },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await loadTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>{/* assume a cor padrão setada no botão */}
        Buscar
      </button>
    </SearchFormContainer>
  )
}
