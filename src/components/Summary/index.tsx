import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'

export const Summary = () => {
  return (
    <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entrada</span>
                <ArrowCircleUp size={32} color="#00b37e"/>
            </header>

            <strong>R$ 17.450,00</strong>
        </SummaryCard>

        <SummaryCard>
            <header>
                <span>Entrada</span>
                <ArrowCircleDown size={32} color="#f75a68"/>
            </header>

            <strong>R$ 17.450,00</strong>
        </SummaryCard>

        <SummaryCard variant='green'>
            <header>
                <span>Entrada</span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>

            <strong>R$ 17.450,00</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}
