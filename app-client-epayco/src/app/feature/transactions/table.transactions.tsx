'use client'

import React from "react";

import type { IDataTransactions } from "./interfaces/transactions.report.interfaces";

const TableTransactions:React.FC<IDataTransactions> = ({ dataTransactions }) => {
    const data = dataTransactions?.map(transations => {
        return {
            "Documento": transations.document,
            "Usuario": transations.user?.name,
            "Id Transaccion": transations.id,
            "Tipo Transaccion": transations.type,
            "Monto": transations.amount,
            "Estado": transations.status,
        };
    }) || [];

    const title = data?.map(transactions => Object.keys(transactions))[0] || [];

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
                        {data.map( (transactions, index) => (
                            <tr key={`row-${index}`}>
                                <th key={`document-${index}`} scope="row">
                                    {transactions.Documento}
                                </th >
                                <td key={`users-${index}`}>
                                    {transactions.Usuario}
                                </td>
                                <td key={`idTransaction-${index}`}>
                                    {transactions["Id Transaccion"]}
                                </td>
                                <td key={`typeTransaction-${index}`}>
                                    {transactions["Tipo Transaccion"]}
                                </td>
                                <td key={`amount-${index}`}>
                                    {transactions.Monto}
                                </td>
                                <td key={`state-${index}`}>
                                    {transactions.Estado}
                                </td>
                            </tr>
                        ))}       
                    </tbody>
                </table>
            ) : (
                <h1>No Hay Transacciones Registradas</h1>
            )}
        </>
    );
};

export default TableTransactions;