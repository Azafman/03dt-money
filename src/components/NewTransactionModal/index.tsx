import * as Dialog from "@radix-ui/react-dialog"
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"

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


                    <TransactionType>{/* mesma coisa que <RadioGroup.Root><RadioGroup.Root> */}
                        <TransactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>
                    <button type="submit">Cadastrar</button>
                </form>

            </Content>

        </Dialog.Portal>
    )
}
