import type { IUser } from "../../users/interfaces/users.interfaces";
import type { ITransactions } from "./transactions.interfaces";

interface IReportingTransactions extends ITransactions {
    user?:IUser;
}

interface IDataTransactions {
    dataTransactions?:IReportingTransactions[] | null;
}

export type {
    IReportingTransactions,
    IDataTransactions,
}