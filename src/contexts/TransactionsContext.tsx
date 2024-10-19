import { createContext, ReactNode, useEffect, useState } from "react";
import { TransactionType } from "../components/NewTransactionModal/styles";
import { api } from "../libs/axios";

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
        //"/transactions" ou "transactions" é a mesma coisa
        const response = await api.get('/transactions', {
            params: {
                description: query
            }
        })//não preciso converter o json para js, a própria lib faz isso para mim
        //console.log(response); esse objecto é semelhate a quando usamos fetch e then sem antes de dar um .json
        
        setTransactions(response.data);
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