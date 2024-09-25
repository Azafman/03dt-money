import styled from "styled-components";

export const TransactionContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;//top horizontal bottom
    padding: 0;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    //juntamente com o border-collpase faz com que aja espaçamento vertical entre as linhas da tabela
    /* margin-top: 1.5rem; */

    td {
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            width: 50%;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`
interface PriceHighlightProps {
    variant: 'income' | 'outcome'
}
export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`