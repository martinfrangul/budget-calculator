import { useState, useContext, useEffect } from "react";
import { MainContext } from "../../contexts/MainContext";

interface specialOptions {
  [key: string]: number;
}

interface BudgetItem {
  name: string;
  phone: string;
  email: string;
  total: number;
  services: string[];
  specialOptions: specialOptions;
}

const BudgetList = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("FormBudget must be used within a SelectProvider");
  }

  const { budgetItem } = context;
  const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);

  useEffect(() => {
    if (budgetItem.name !== "") {
      setBudgetList((prevList) => [...prevList, budgetItem]);
    }
  }, [budgetItem]);

  console.log(budgetList);

  return (
    <>
      <div>

        <h1 className="text-4xl">
            Presupuestos actuales
        </h1>

      </div>

      <div className="flex flex-col gap-y-6 justify-center items-center">
        {budgetList.map((item, index) => (
          <div
            className="budget-container flex flex-row flex-wrap bg-[#FDFDFD] justify-center items-center p-3 h-fit rounded-2xl border-2 border-solid border-black"
            key={index}
          >
            <div className=" flex flex-row justify-between w-full">
              <div className="flex flex-col max-w-60 p-4 ">
                <h2 className="text-3xl">{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
              <div className="flex flex-col max-w-60 p-4 ">
                {item.services.map((item, index) => (
                  <h1 key={index}>{item}</h1>
                ))}
                {item.services.includes("Web") && (
                  <div>
                    <p>Páginas: {item.specialOptions.pages}</p>
                    <p>Idiomas extra: {item.specialOptions.lang}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center">
                <h3 className="text-3xl font-semibold">{item.total} $</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BudgetList;
