import { MagnifyingGlass } from "@phosphor-icons/react"
import { SearchFormContainer } from "./styles"

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button>
        <MagnifyingGlass size={20}/>{/* assume a cor padrão setada no botão */}
        Buscar
      </button>
    </SearchFormContainer>
  )
}
