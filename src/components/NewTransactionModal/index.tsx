import * as Dialog from "@radix-ui/react-dialog"
import { Close, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";


const transactionFormSchema = z.object({
    description: z.string(),
    price: z.coerce.number(),
    category: z.string(),
    type: z.enum(['outcome', 'income'])
});
type transactionFormInputs = z.infer<typeof transactionFormSchema>
export const NewTransactionModal = () => {
    const { createTransaction } = useContext(TransactionsContext);
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { isSubmitting, errors }
    } = useForm<transactionFormInputs>({
        resolver: zodResolver(transactionFormSchema),
        defaultValues: {
            type: 'outcome'//através do controll e do objeto (primeiro parâmetro) passado em na callback da propriedade render, deduzimos que o reacthookform deixa a opção outcome como padrão
            
        }
    });
    async function handleCreateNewTransaction (data: transactionFormInputs) {
        const { description, type, category, price } = data;
        createTransaction({
            description, type, category, price, createdAt: new Date()
        })
        
        reset()
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

                    <Controller 
                        control={control} 
                        name="type"
                        render={({field}) => {
                            //console.log(props) -> contém propriedades acercar do formulário, estado do campo atual e campo atual.
                            /* render return the function that return the element that will be monitorado e renderizado em tela. 
                            Esse atributo, render, retorna o elemento que estará amarrado ao campo "type" (name).*/
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    {/* mesma coisa que <RadioGroup.Root><RadioGroup.Root> */}
                                    {/* 
                                    - onValueChange -> Event handler called when the value changes. 
                                    - field.onChange -> A function which send value to hook form and should be assigned with onChange prop.
                                    Tradutor: Uma função que envia valor para o formulário de gancho e deve ser atribuída com a propriedade onChange.

                                    Ou seja quando o meu componente <RadioGroup.Root><RadioGroup.Root>, indentifica que houve uma mudança no campo em questão,
                                    ele irá atualizar o valor do mesmo no formulário, com a função field.change (envia o valor e seu campo para o formulário.).
                                    */}
                                    {/* 
                                        https://react-hook-form.com/docs/usecontroller/controller
                                        https://www.radix-ui.com/primitives/docs/components/radio-group
                                    */}
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            );
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>

            </Content>

        </Dialog.Portal>
    )
}
