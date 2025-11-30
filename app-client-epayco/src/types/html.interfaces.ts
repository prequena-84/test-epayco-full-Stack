import type { 
    ReactNode, 
    ChangeEventHandler, 
    InputHTMLAttributes, 
    FormEventHandler, 
    MouseEventHandler 
} from "react";

type TType = "text" | "number" | "password" | "email" | "url" | "number" | "date" | "checkbox" | "radio" | "radio" | "file" | "submit";
type TVariantLine = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link';
type TVariantOutLine ='btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark';
type TTypeBtn = "button" | "submit" | "reset";
type TVariant = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link';
type TSizes = 'btn-lg' | 'btn-sm';
type TRole = "button";
type TOnChange = InputHTMLAttributes<HTMLInputElement>['onChange'];
type TOnSubmit = FormEventHandler<HTMLFormElement>;
type TOnClick = MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
type TOnLoginSuccesstype = () => void;

interface IH1 {
    text:string;
    className?: string | undefined;
}

interface IH2 extends IH1{}

interface ISelect {
    name?:string;
    children?:ReactNode;
    className?:string;
    value?:string;
    onChange:ChangeEventHandler<HTMLSelectElement>;
}

interface IMenu {
    menu: string;
    submenu: ISubMenu[];
}

interface ISubMenu {
    link: string;
    label: string;
}

interface INavBar {
    titleBrand?: string;
    titleNavbar?: string;
}

interface IMain {
    children?: ReactNode;
    className?: string;
}

interface IInputPassword {
    className?: string;
    classInput?: string;
    name: string;
    id:string
    placeHolder?: string;
    value: string;
    onChange: TOnChange;
}

interface IInputGroupText {
    name: string;
    id: string;
    type?: TType;
    className?: string;
    classInput?: string;
    placeHolder?: string;
    arialLabel?: string;
    value: string | number;
    disabled?: boolean;
    onChange: TOnChange;
}

interface ILegend {
    text: string;
    className?: string;
}

interface ILabel {
    text: string;
    className?: string;
    htmlFor?: string; 
}

interface IForm {
    key?: string;
    children?: string;
    onSubmit?: TOnSubmit;
    className?: string;
    onLoginSuccess?: TOnLoginSuccesstype;
}

interface IFieldset {
    children?: string;
    className?: string;
}

interface ISection {
    children?: string;
    className?: string;
}

interface IHeader {
    children?: string;
    className?: string;
}

interface IDiv {
    children?: string;
    className?: string;
}

interface IAside {
    children?: string;
    className?: string;
}

interface IBtn {
    type?: TTypeBtn | undefined;
    className?: string;
    text?: string;
    variantLine?: TVariantLine | null;
    variantOutLine?:TVariantOutLine | null;
    sizes?: TSizes;
    disabled?: boolean;
    ariaDisabled?: string;
    onClick?: TOnClick | undefined;
}

interface IBtnA {
    role?: TRole;
    className?: string;
    text?: string;
    variant?: TVariant;
    disabled?: boolean;
    arialDisabled?: boolean;
    sizes?: TSizes;
    onClick?: TOnClick;
}

export type {
    IH1,
    IH2,
    ISelect,
    INavBar,
    IMain,
    IMenu,
    ISubMenu,
    IInputPassword,
    IInputGroupText,
    ILegend,
    ILabel,
    IForm,
    IFieldset,
    ISection,
    IHeader,
    IDiv,
    IAside,
    IBtn,
    IBtnA,
}