import type { ITransactions } from "./transactions.interfaces";

export interface IStateTransactions extends ITransactions {
    phone?:string;
}