import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"
/* Salvo os casos onde precisamos, estilizar os componentes, como nesse - sobre misturar styled-components com outras bibliotecas.  */

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;/* top:0;left:0;right:0;bottom:0; */
    background-color: rgba(0,0,0,.75);
`
export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem  3rem;
    background: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 3rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border: 0;
            border-radius: 6px;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }

        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            border-radius: 6px;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme['green-700']};
                transition: background-color 0.2s;
            }

        }
    }
`
export const Close = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;/* ou font-size: 0 -> faz com que a borda fique colada ao elemento button.*/
    cursor: pointer;
    color: ${props => props.theme['gray-500']};/* seta a cor do svg */
    border: 0;
`