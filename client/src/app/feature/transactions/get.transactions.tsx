'use client'

import { useState, useEffect } from "react";
import requestData from "@/services/request.data.services";
import TableTransactions from "./table.transactions";

import type { IReportingTransactions } from "./interfaces/transactions.report.interfaces";

const GetTransactions = () => {
    const [ transactions, setTransactions ] = useState<IReportingTransactions[] | null>(null);

    useEffect(() => {
        const data = async () => {
            const data = (await requestData<IReportingTransactions[]>(process.env.NEXT_PUBLIC_API_URL_REPORTING ?? '')).data;
            setTransactions(data);
        };

        data();
    }, []);

    return (
        <section className="main-content">
            <TableTransactions dataTransactions={transactions}/>
        </section>
    )
};

export default GetTransactions;
