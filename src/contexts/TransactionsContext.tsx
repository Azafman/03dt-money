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
    loadTransactions: (query?: string) => Promise<void>
}
export const TransactionsContext = createContext({} as TransactionsContextType);

export const TrasanctionContextProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<TransactionType[]>([]);
    //quando criamos states, sempre é importate tipar o mesmo, principalmente quando se trata de objeto ou array.
    async function loadTransactions(query?: string) {
        const url = new URL('http://localhost:3333/transactions');

        if (query) {
            url.searchParams.append('q', query);
            //http://localhost:3333/transactions?q={query}
        }
        console.log(url)

        const data = await fetch(url).then(response => response.json());
        
        setTransactions(data);
    }
    useEffect(() => {
        loadTransactions();
    }, []);
    
    return <TransactionsContext.Provider value={{ 
        transactions,
        loadTransactions 
    }}>
        {children}
    </TransactionsContext.Provider>
}