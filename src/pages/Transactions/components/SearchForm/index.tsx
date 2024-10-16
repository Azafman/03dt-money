import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
  query: z.string().min(10, "Digite ao menos 10 caracteres.")
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const {
    register, 
    handleSubmit,
    formState: { isSubmitting,  },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
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
