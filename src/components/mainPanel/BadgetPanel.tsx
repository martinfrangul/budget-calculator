import { BudgetOptions } from "../../types";
import "../../styles/index.css";
import { useEffect, useState, useContext } from "react";
import WebCustom from "./WebCustom";
import "../../styles/BadgetPanel.css";
import { MainContext } from "../../contexts/MainContext";

type BudgetPanelProps = {
  budgetOptions: BudgetOptions;
};

interface OptionObject {
  price: number;
  id: string;
  service: string;
}

const BadgetPanel = ({ budgetOptions }: BudgetPanelProps) => {
  const [customTotal, setCustomTotal] = useState(0);
  const [budgetOptionsList, setBudgetOptionsList] = useState<BudgetOptions>([]);
  const [budgetOptionUnPromoted, setBudgetOptionUnPromoted] =
    useState<BudgetOptions>([]);
  const [budgetOptionPromoted, setBudgetOptionPromoted] =
    useState<BudgetOptions>([]);
  const [showPromotionMessage, setShowPromotionMessage] = useState<boolean>(false)
  const specialOptionId = "3";

  const context = useContext(MainContext);

  if (!context) {
    throw new Error("BudgetPanel must be used within a MainProvider");
  }
  const { selectedIds, setSelectedIds, total, setTotal, select, setSelect } =
    context;

  useEffect(() => {
    const totalPrice = select
      .map((item) => item.price)
      .reduce((acc, current) => acc + current + customTotal, 0);
    setTotal(totalPrice);
  }, [select, customTotal, setSelect, setTotal]);

  const handleCustomTotal = (customTotal: number) => {
    setCustomTotal(customTotal);
  };

  useEffect(() => {
    const modifyBudgetOptions = budgetOptions.map((item) => ({
      ...item,
      price: item.price * 0.8,
    }));

    setBudgetOptionUnPromoted(budgetOptions);
    setBudgetOptionPromoted(modifyBudgetOptions);
    setBudgetOptionsList(budgetOptions);
  }, [budgetOptions]);

  const togglePromotions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (checked) {
      setBudgetOptionsList(budgetOptionPromoted);
      const updatedSelect = select.map((item) => {
        const newItem = budgetOptionPromoted.find(
          (option) => option.id === item.id
        );
        return newItem ? { ...item, price: newItem.price } : item;
      });
      setSelect(updatedSelect);
      setShowPromotionMessage(true)
    } else {
      setBudgetOptionsList(budgetOptionUnPromoted);
      const updatedSelect = select.map((item) => {
        const newItem = budgetOptionUnPromoted.find(
          (option) => option.id === item.id
        );
        return newItem ? { ...item, price: newItem.price } : item;
      });
      setSelect(updatedSelect);
      setShowPromotionMessage(false)

    }
  };

  const handleCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
    priceItem: number,
    id: string,
    service: string
  ) => {
    const optionObject: OptionObject = {
      price: priceItem,
      id: id,
      service: service,
    };

    const checked = event.target.checked;
    if (checked) {
      setSelect([...select, optionObject]);
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelect(select.filter((item) => item.id !== id));
      setSelectedIds(selectedIds.filter((item) => item !== id));
      if (id === specialOptionId) setCustomTotal(0);
    }
  };

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <div className="flex justify-center mb-3 mt-3">
        <span className="ms-3 text-sm font-medium flex items-center mx-3 text-black dark:text-black">
          Pago mensual
        </span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) => togglePromotions(e)}
          ></input>
          <div className="relative w-11 h-6 bg-red-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm mx-3 font-medium text-black dark:text-black flex items-center">
            Pago anual
          </span>
        </label>
      </div>

      {budgetOptionsList.map((option, index) => (
        <div
          className={`budget-container flex flex-row flex-wrap bg-[#FDFDFD] justify-center items-center p-3 h-fit rounded-2xl border-2 border-solid border-black ${
            selectedIds.includes(option.id) ? "border-custom" : ""
          }`}
          key={index}
        >
          <div className=" flex flex-row justify-between w-full">
            <div className="flex flex-col max-w-60 p-4 gap-3">
              <h2 className="text-3xl">{option.service}</h2>
              <p>{option.description}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              {showPromotionMessage && <div>Ahorra un 20%</div>}
              <h3 className="text-3xl font-semibold">{option.price} $</h3>
            </div>
            <div className="form-check flex justify-center items-center gap-2">
              <input
                type="checkbox"
                className="form-check-input"
                name=""
                id={option.id}
                checked={selectedIds.includes(option.id)}
                onChange={(e) => {
                  handleCheckBox(e, option.price, option.id, option.service);
                }}
              ></input>
              <label className="form-check-label">Agregar</label>
            </div>
          </div>
          <div className="flex justify-end w-full">
            {option.id === specialOptionId &&
            selectedIds.includes(option.id) ? (
              <WebCustom onCustomTotal={handleCustomTotal} />
            ) : null}
          </div>
        </div>
      ))}
      <div className="total-text-container flex justify-end w-full">
        <div className="text-4xl total-text">
          Precio presupuestado: {total} $
        </div>
      </div>
    </div>
  );
};

export default BadgetPanel;
