'use client'

import React from "react";

import type { IDataUsers } from "./interfaces/users.interfaces";

const TableUsers:React.FC<IDataUsers> = ({ dataUsers }) => {
    const data = dataUsers?.map(user => {
        return {
            "Documento":user.document,
            "Nombre":user.name,
            "Email":user.email,
            "Celular":user.phone,
            "Saldo":user.balance,
        };
    }) || [];

    const title = data?.map(users => Object.keys(users))[0] || [];

    return (
        <>
            {data.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            {title.map( (title,index) => (<th key={`title-${index}`} scope="col">{title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (item,index) => (
                            <tr key={`row-${index}`}>
                                <th key={`document-${index}`} scope="row">
                                    {item.Documento}
                                </th >
                                <td key={`name-${index}`}>
                                    {item.Nombre}
                                </td>
                                <td key={`email-${index}`}>
                                    {item.Email}
                                </td>
                                <td key={`phone-${index}`}>
                                    {item.Celular}
                                </td>
                                <td key={`balance-${index}`}>
                                    {item.Saldo}
                                </td>
                            </tr>
                        ))}       
                    </tbody>
                </table>               
            ) : (
                <h1>No Hay Usuarios Registros</h1>
            )}
        </>
    );
};

export default TableUsers;