import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface OptionObject {
  price: number;
  id: string;
  service: string;
}
interface BudgetItem {
  name: string;
  phone: string;
  email: string;
  total: number;
  services: string[];
}

interface SelectContextType {
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


}


const SelectContext = createContext<SelectContextType | undefined>(undefined);

interface SelectProviderProps {
    children: React.ReactNode;
  }

const SelectProvider: React.FC<SelectProviderProps> = ({ children }) => {
  const [select, setSelect] = useState<OptionObject[]>([]);
  const [total, setTotal] = useState(0)
  const [budgetItem, setBudgetItem] = useState<BudgetItem>({
    name: '',
    phone: '',
    email: '',
    total: 0,
    services: [],
  })
  const [pages, setPages] = useState(0);
  const [lang, setLang] = useState(0);
  

  return (
    <SelectContext.Provider value={{setPages, setLang, pages, lang, budgetItem, setBudgetItem, select, setSelect, total, setTotal }}>
      {children}
    </SelectContext.Provider>
  );
};

export { SelectContext, SelectProvider };
