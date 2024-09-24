import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;/* faz com que os flex-itens desse container estejam em 3 colunas , com tamanhos iguais um ao lado do outro. */

    margin-top: -5rem;/* ocupa o espaçõ deixado em branco pelo header */
`
interface SummaryCardProps {
    variant?: 'green'
}
export const SummaryCard = styled.div<SummaryCardProps>`
    background: ${props => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme['gray-300']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
        background: ${props.theme['green-700']};
    `}/* se a propriedade variant for passada, então o style entre \`\` será aplicado. */
`