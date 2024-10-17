import * as Dialog from "@radix-ui/react-dialog"
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const transactionFormSchema = z.object({
    description: z.string(),
    price: z.coerce.number(),
    category: z.string(),
    //type: z.enum(['outcome', 'income'])
});
type transactionFormInputs = z.infer<typeof transactionFormSchema>
export const NewTransactionModal = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors }
    } = useForm<transactionFormInputs>({
        resolver: zodResolver(transactionFormSchema)
    });
    async function handleCreateNewTransaction (data: transactionFormInputs) {
        reset()
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    console.log(errors);
    
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
                <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input 
                        {...register('description')}
                        type="text" 
                        placeholder="Descrição" 
                    />
                    <input 
                        {...register('price', { valueAsNumber: true, })}
                        type="number" 
                        placeholder="Preço" 
                    />
                    <input 
                        {...register('category')}
                        type="text" 
                        placeholder="Categoria" 
                    />


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
                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>

            </Content>

        </Dialog.Portal>
    )
}
