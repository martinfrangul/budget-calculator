import { useState, useContext, useEffect } from "react";
import { SelectContext } from "../../contexts/SelectContext";

interface BudgetItem {
    name: string;
    phone: string;
    email: string;
    total: number;
    services: Array<string | object>;
  }
  

const BudgetList = () => {
    const context = useContext(SelectContext);
    
    if (!context) {
        throw new Error("FormBudget must be used within a SelectProvider");
    }
    
    const { budgetItem } = context;
    const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);

        useEffect(() => {
            if (budgetItem.name !== "") {
                setBudgetList((prevList) => [...prevList, budgetItem]);
            }
        },[budgetItem])

        console.log(budgetList);

  return (

    <div className="flex flex-col gap-y-6 justify-center items-center">
      {budgetList.map((item, index) => (
        <div
          className="budget-container flex flex-row flex-wrap bg-[#FDFDFD] justify-center items-center p-3 h-fit rounded-2xl border-2 border-solid border-black"
          key={index}

          // shadow-inner h-fit rounded-2xl border-none shadow-gray-500
        >
          <div className=" flex flex-row justify-between w-full">
            <div className="flex flex-col max-w-60 p-4 ">
              <h2 className="text-3xl">{item.name}</h2>
              <p>{item.total}</p>
            </div>
            <div className="flex justify-center items-center">
              <h3 className="text-3xl font-semibold">{item.phone} $</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
