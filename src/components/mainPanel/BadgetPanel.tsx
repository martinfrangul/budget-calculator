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
  const specialOptionId = "3";

  const context = useContext(MainContext);

  if (!context) {
    throw new Error('BudgetPanel must be used within a SelectProvider');
  }

  const {selectedIds, setSelectedIds, total, setTotal, select, setSelect } = context;

  
  useEffect(() => {
    const totalPrice =
      select.map((item) => item.price).reduce((acc, current) => acc + current + customTotal, 0);
    setTotal(totalPrice);
  }, [select, customTotal, setSelect, setTotal]);

  const handleCustomTotal = (customTotal: number) => {
    setCustomTotal(customTotal);
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
      {budgetOptions.map((option, index) => (
        <div
          className="budget-container flex flex-row flex-wrap bg-[#FDFDFD] justify-center items-center p-3 h-fit rounded-2xl border-2 border-solid border-black"
          key={index}

          // shadow-inner h-fit rounded-2xl border-none shadow-gray-500
        >
          <div className=" flex flex-row justify-between w-full">
            <div className="flex flex-col max-w-60 p-4 ">
              <h2 className="text-3xl">{option.title}</h2>
              <p>{option.description}</p>
            </div>
            <div className="flex justify-center items-center">
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
                  handleCheckBox(e, option.price, option.id, option.title);
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
