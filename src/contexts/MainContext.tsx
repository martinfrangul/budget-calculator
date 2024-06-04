import React, { createContext, useState } from 'react';
import { BudgetItem, OptionObject, MainContextType } from "../types";


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
    specialOptions: {},
    date: new Date()
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
