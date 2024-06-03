import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface OptionObject {
  price: number;
  id: string;
  service: string;
}

interface specialOptions {
  [key: string]: number;
}

interface BudgetItem {
  name: string;
  phone: string;
  email: string;
  total: number;
  services: string[];
  specialOptions: specialOptions
  
}

interface MainContextType {
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


const MainContext = createContext<MainContextType | undefined>(undefined);

interface MainProviderProps {
    children: React.ReactNode;
  }


const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [select, setSelect] = useState<OptionObject[]>([]);
  const [total, setTotal] = useState(0)
  const [budgetItem, setBudgetItem] = useState<BudgetItem>({
    name: '',
    phone: '',
    email: '',
    total: 0,
    services: [],
    specialOptions: {}
  })
  const [pages, setPages] = useState(0);
  const [lang, setLang] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  

  return (
    <MainContext.Provider value={{selectedIds, setSelectedIds, setPages, setLang, pages, lang, budgetItem, setBudgetItem, select, setSelect, total, setTotal }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
