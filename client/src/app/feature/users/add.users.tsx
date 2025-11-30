'use client'

import React, { useState } from "react";
import BtnOutLine from "@/components/ui/botton/btn-outline";
import BtnLine from "@/components/ui/botton/btn-line";
import Input from "@/components/ui/input/input";
import requestData from "@/services/request.data.services";
import codeBase64 from "@/utils/code.base64";
import decodeBase64 from "@/utils/decode.base64";
import style from "@/app/feature/users/styles/users.create.module.css"

import type { IForm } from "@/types/html.interfaces";
import type { IUser } from "./interfaces/users.interfaces";

const FormAddUsers: React.FC<IForm> = () => {

    const [ users, setUsers ] = useState<IUser>({
        document:'',
        name:'',
        email:'',
        phone:'',
        balance:codeBase64('0'),
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUsers(prevData=> ({
            ...prevData,
            [name]:codeBase64(value)
        }));
    };

    const clearForm = () => {
        setUsers({
            document:'',
            name:'',
            email:'',
            phone:'',
            balance:codeBase64('0'),
        });
    };

    const handlerSubmit = async ( event: React.FormEvent ) => {
        event.preventDefault();
        const { document, name, email, phone } = users;

        if ( document && name && email && phone ) {

            const { message } = await requestData<IUser>(process.env.NEXT_PUBLIC_API_URL_USERS ?? "", "POST", users);
            alert(message);
            clearForm();

        } else {

            alert('Por favor ingrese todos los datos del "Usuario" para completar el registro')
        };
    };

    return (
        <form onSubmit={handlerSubmit} className={`${style.Form} main-content`}>
            <fieldset className={style.Fieldset}>
                <legend>Registro de Usuario</legend>
                <div>
                    <Input 
                        name="document"
                        id="document"
                        placeHolder="Documento"
                        arialLabel="document"
                        value={decodeBase64(users.document ?? '')}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                <div>
                    <Input
                        key="name"
                        name="name"
                        id="name"
                        placeHolder="Nombre"
                        arialLabel="name"
                        value={decodeBase64(users.name ?? '')}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />
                </div>
                <div>
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        placeHolder="Correo"
                        arialLabel="email"
                        value={decodeBase64(users.email ?? '')}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />                   
                </div>
                <div>
                    <Input
                        name="phone"
                        id="phone"
                        placeHolder="Celular"
                        arialLabel="phone"
                        value={decodeBase64(users.phone ?? '')}
                        onChange={e => handleChange(e)}
                        className={style.ContainerInput}
                        classInput={style.Input}
                    />                    
                </div>
                <div className={style.ContainerBtn}>
                    <BtnOutLine 
                        key="add"
                        text={"Registrar"}
                        type={"submit"}
                        sizes={"btn-lg"}
                        className={style.BtnCreate}
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
    );
};

export default FormAddUsers;