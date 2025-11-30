'use client'

import React, { useState } from "react";
import requestData from "@/services/request.data.services";
import BtnOutLine from "@/components/ui/botton/btn-outline";
import BtnLine from "@/components/ui/botton/btn-line";
import Input from "@/components/ui/input/input";
import style from "@/app/feature/transactions/styles/transactionns.verify.module.css";
import codeBase64 from "@/utils/code.base64";

import type { IForm } from "@/types/html.interfaces";
import type { IToken } from "./interfaces/token.transactions.interfaces";

const FormVerifyTransactions: React.FC<IForm> = () => {
    const [ dataToken, setDataToken ] = useState<IToken>({
        token:'',
        document:'',
        id:'',  
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setDataToken((prevData:IToken) => ({
            ...prevData,
            [name]:value,
        }));
    };

    const clearForm = () => {
        setDataToken({
            token:'',
            document:'',
            id:'',
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const { document, id, token } = dataToken;

        if ( document && id && token ) {

            const body = { document: codeBase64(document), id: codeBase64(id) };
            const { message } = await requestData<IToken>(process.env.NEXT_PUBLIC_API_URL_CONFIRMATION ?? '', "POST", body, codeBase64(token));
            alert(message);
            clearForm();

        } else {

            alert('Ingrese los datos del Documento, Id de la Transacción y Token para enviar la autorización de la transacción');
        };
    };

    const solicitarToken = async () => {
        const { document, id } = dataToken;

        if ( document && id ) {
            const body = { document: codeBase64(document), id: codeBase64(id) };
            const  data  = await requestData<IToken>(`${process.env.NEXT_PUBLIC_API_URL_GET_TOKEN}/send-OTP`, "POST", body); 
            alert(data.message)

        } else {

            alert('Ingrese los datos del Documento y Id de la Transacción para solicitar el token');
        };
    };

    return (
        <form onSubmit={handleSubmit} className={`${style.Form} main-content`}>
            <fieldset className={style.Fieldset}>
                <legend>Confirmación de Pago</legend>
                <div>
                    <label htmlFor="document">Nro. de Documento del Usuario</label>
                    <Input
                        name="document"
                        id="document"
                        placeHolder="Documento del Usuario"
                        arialLabel="document"
                        value={dataToken.document}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                <div>
                    <label htmlFor="id"> Agregar Id del Pago a Confirmar</label>
                    <Input
                        name="id"
                        id="id"
                        placeHolder="Id Transacción"
                        arialLabel="id"
                        value={dataToken.id}
                        onChange={ e => handleChange(e) }
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                <div>
                    <Input
                        name="token"
                        id="token"
                        placeHolder="Ingrese Token"
                        arialLabel="token"
                        value={dataToken?.token ?? ''}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                <div className={style.ContainerBtn}>
                    <BtnOutLine 
                        text={"Enviar Token"}
                        type={"submit"}
                        sizes={"btn-lg"}
                        className={style.BtnSumit}
                    />
                    <BtnLine 
                        type={"button"}
                        text="Solicitar Token"
                        sizes={"btn-lg"}
                        onClick={solicitarToken}
                        className={style.BtnClear}
                    />
                </div>
            </fieldset>
        </form>
    )
};

export default FormVerifyTransactions;