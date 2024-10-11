import { TrasanctionContextProvider } from "./contexts/TransactionsContext"
import { Transactions } from "./pages/Transactions"

export const  App = () => {
  return (
    <TrasanctionContextProvider>
      <Transactions />
    </TrasanctionContextProvider>
  )
}

