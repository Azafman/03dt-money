import { useContext } from 'react'
import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export const Summary = () => {
    const { transactions } = useContext(TransactionsContext);
    const summary = transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.income += transaction.price;
            acc.total += transaction.price;
          } else {
            acc.outcome += transaction.price;
            acc.total -= transaction.price;
          }
          return acc;
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      );
    
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entrada</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>{summary.income}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saída</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>{summary.outcome}</strong>
            </SummaryCard>

            <SummaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}
