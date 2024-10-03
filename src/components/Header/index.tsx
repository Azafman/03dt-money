import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

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
          <Dialog.Portal>
            {/* permite que você renderize elemeto children em uma parte diferente do DOM. Neste caso, fora inclusive do div root, criada pelo react.*/}
            <Dialog.Overlay />{/* Deixa o fundo com opacidade menor. */}
            <Dialog.Content>
              <Dialog.Title>Nova transação</Dialog.Title>
              {/* ajuda na acessibilidade. O leitor de tela, quando a caixa dialog for aberta, irá ler para o usuário final
                  que um modal foi aberto e este model é de "Nova transação"  */}
              <Dialog.Close />

            </Dialog.Content>

          </Dialog.Portal>
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  )
}
