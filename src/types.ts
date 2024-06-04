import { Dispatch, SetStateAction } from "react";

export type BudgetOption = {
    title: string;
    description: string;
    price: number;
    id: string;
  };
  
export type BudgetOptions = BudgetOption[];

export interface OptionObject {
  price: number;
  id: string;
  service: string;
}

export interface specialOptions {
  [key: string]: number;
}

export interface BudgetItem {
  name: string;
  phone: string;
  email: string;
  total: number;
  services: string[];
  specialOptions: specialOptions
  date: Date
  
}

export interface MainContextType {
  total: number;
  setTotal: Dispatch<SetStateAction<number>>;
  select: OptionObject[];
  setSelect: Dispatch<SetStateAction<OptionObject[]>>;
  budgetItem: BudgetItem;
  setBudgetItem: Dispatch<SetStateAction<BudgetItem>>;
  pages: number;
  lang: number;
  setPages: Dispatch<SetStateAction<number>>;
  setLang: Dispatch<SetStateAction<number>>;
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[]>>

}