import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionsTable } from "./styles"

export const Transactions = () => {
  return (
    <div>
      <Header/>
      <Summary/>

      <TransactionContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
              <tr>
                <td>Desenvolvimento de site</td>
                <td>
                  <PriceHighlight variant="income">
                    R$ 12.000,00
                  </PriceHighlight>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td >Hambúrguer</td>
                <td>
                  <PriceHighlight variant="outcome">
                    -R$ 59,00
                  </PriceHighlight>
                </td>
                <td>Alimentação</td>
                <td>10/04/2022</td>
              </tr>
            </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
