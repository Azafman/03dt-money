import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionsTable } from "./styles"

interface TransactionType {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}
export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  //quando criamos states, sempre é importate tipar o mesmo, principalmente quando se trata de objeto ou array.
  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json();
    
    setTransactions(data);
  }
  useEffect(() => {
    loadTransactions();
  }, [])

  console.log(transactions);
  
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
