'use client'

import { useState } from "react";
import requestData from "@/services/request.data.services";
import BtnOutLine from "@/components/ui/botton/btn-outline";
import BtnLine from "@/components/ui/botton/btn-line";
import Input from "@/components/ui/input/input";
import SelectTypeTransactions from "@/components/ui/select/select-tipo";
import style from "@/app/feature/transactions/styles/transactions.create.module.css"
import codeBase64 from "@/utils/code.base64";

import type { IForm } from "@/types/html.interfaces";
import type { IStateTransactions } from "./interfaces/state.transactions.interfaces";

const FormAddTransactions: React.FC<IForm> = () => {
    const [ transactions, setTransactions ] = useState<IStateTransactions>({
        document:'',
        type: 'recarga',
        amount: '',
        status: 'confirmada',
        phone:'',
    });

    const handlerChangeType = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

        setTransactions( prevData  => ({
            ...prevData,
            [name]: value,
            status: value === 'recarga' ? 'confirmada' : 'pendiente',
        }));
    };

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setTransactions( prevData => ({
            ...prevData,
            [name]: name !=='monto' ? value : Number(value)
        }));
    };

    const clearForm = () => {
        setTransactions({
            document:'',
            type:'recarga',
            amount:'',
            phone:'',
            status:'confirmada',
        });
    };

    const handleSubmit = async ( event: React.FormEvent ) => {
        event.preventDefault();
        const { document, type, status , amount } = transactions;

        if ( document && amount ) {

            const transactionsBase64 = {
                document:codeBase64(document),
                amount: codeBase64(amount),
                type: codeBase64(type ?? codeBase64('recarga')),
                status: codeBase64(status ?? codeBase64('confirmada')),
            };

            const { message } = await requestData<IStateTransactions>(process.env.NEXT_PUBLIC_API_URL_TRANSACTIONS ?? '', "POST", transactionsBase64);
            alert(message);
            clearForm();
            
        }  else {
            alert('Por favor ingresa documento de usuario y monto.');
        };
    };

    return (
        <form onSubmit={handleSubmit} className={`${style.Form} main-content`}>
            <fieldset className={style.Fieldset}>
                <legend>Registro de Transaccion</legend>
                <div>
                    <SelectTypeTransactions
                        name="type"
                        value={transactions.type}
                        onChange={e => handlerChangeType(e)}
                    />
                </div>
                <div>
                    <Input
                        name="document"
                        id="document"
                        placeHolder="Documento del Usuario"
                        arialLabel="document"
                        value={transactions?.document ?? ''}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                {transactions.type === "recarga" && <div>
                    <Input
                        key="phone"
                        name="phone"
                        id="phone"
                        type="text"
                        placeHolder="Celular"
                        arialLabel="phone"
                        value={transactions.phone ?? ''}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>}
                <div>
                    <label>Monto</label>
                    <Input
                        name="amount"
                        id="amount"
                        type="number"
                        placeHolder="Monto"
                        arialLabel="amount"
                        value={transactions?.amount ?? 0}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                {transactions.type !== "recarga" && <div>
                    <label>Estado del Pago</label>
                    <Input
                        name="status"
                        id="status"
                        placeHolder="Estado"
                        arialLabel="status Disabled input example"
                        value={transactions?.status ?? ''}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                        disabled={true}
                    />
                </div>}
                <div className={style.ContainerBtn}>
                    <BtnOutLine 
                        key="add"
                        text={"Registrar"}
                        type={"submit"}
                        sizes={"btn-lg"}
                        className={style.BtnAdd}
                    />
                    <BtnLine 
                        key="clear"
                        type={"button"}
                        text="Limpiar"
                        sizes={"btn-lg"}
                        onClick={clearForm}
                        className={style.BtnClear}
                    />                   
                </div>
            </fieldset>
        </form>
    )
};

export default FormAddTransactions;