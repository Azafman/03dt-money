import * as Dialog from "@radix-ui/react-dialog"
import { Close, Content, Overlay } from "./styles"
import { X } from "@phosphor-icons/react"

export const NewTransactionModal = () => {
    return (
        <Dialog.Portal>
            {/* permite que você renderize elemeto children em uma parte diferente do DOM. Neste caso, fora inclusive do div root, criada pelo react.*/}
            <Overlay />{/* Deixa o fundo com opacidade menor. */}
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                {/* ajuda na acessibilidade. O leitor de tela, quando a caixa dialog for aberta, irá ler para o usuário final
          que um modal foi aberto e este model é de "Nova transação"  */}
                
                <Close>
                    <X size={24}/>
                </Close>
                <form action="">
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>

        </Dialog.Portal>
    )
}
