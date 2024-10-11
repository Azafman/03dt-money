import { createContext, ReactNode, useEffect, useState } from "react";
import { TransactionType } from "../components/NewTransactionModal/styles";

interface TransactionType {
    id: string;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionsContextType {
    transactions: TransactionType[];
}
export const TransactionsContext = createContext({} as TransactionsContextType);

export const TrasanctionContextProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<TransactionType[]>([]);
    //quando criamos states, sempre é importate tipar o mesmo, principalmente quando se trata de objeto ou array.
    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions');
        const data = await response.json();
        
        setTransactions(data);
    }
    useEffect(() => {
        loadTransactions();
    }, []);
    
    return <TransactionsContext.Provider value={{ transactions }}>
        {children}
    </TransactionsContext.Provider>
}