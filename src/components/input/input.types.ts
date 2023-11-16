import { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variant?: InputVariant;
  onChange?:(e:any) => void
  value?:string
};

export type InputVariant = "filled" | "standard";
