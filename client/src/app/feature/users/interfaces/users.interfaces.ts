interface IUser {
    document?:string;
    name?:string;
    email?:string;
    phone?:string
    balance?:string;
}

interface IDataUsers extends IUser{
    dataUsers?:IUser[] | null;
}

export type {
    IUser,
    IDataUsers,
}