import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/*  
                  <Dialog.Trigger /> -> cria um novo botão por padrão, que é responsável por abrir a caixa de diálogo.
                  <Dialog.Trigger asChild> -> usa o child passado (aproveitando a estilização etc), para esse botão 
                  responsável na caixa de diálogo. Deste modo, permanecemos com somente um botão.

                  Outra alteranativa seria em ./styles.ts, no componente NewTransactionButton, poderíamos importar o componente
                  Dialog e em NewTransactionButton, usar algo semelhante há:
                  - export const NewTransactionButton = styled(DialogTrigger)``
                  E aqui seria necessário somente importart <NewTransactionButton/>

                  Porém isso é algo que pode ser evitado, pois meio que suja o código styled-components com código de outra lib js.
                */}
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
