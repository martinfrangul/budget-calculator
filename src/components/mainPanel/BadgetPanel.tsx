import { BudgetOptions } from "../../types";
import "../../styles/index.css";
import { useEffect, useState } from "react";
import WebCustom from "./WebCustom";

type BudgetPanelProps = {
  budgetOptions: BudgetOptions;
};

const BadgetPanel = ({ budgetOptions }: BudgetPanelProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [select, setSelect] = useState<number[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [customTotal, setCustomTotal] = useState(0);
  const specialOptionId = "3";

  useEffect(() => {
    const total =
      select.reduce((acc, current) => acc + current, 0) + customTotal;
    setTotalPrice(total);
  }, [select, customTotal]);

  const handleCustomTotal = (customTotal: number) => {
    setCustomTotal(customTotal);
  };

  const handleCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
    priceItem: number,
    id: string
  ) => {
    const price = priceItem;

    const checked = event.target.checked;
    if (checked) {
      setSelect([...select, price]);
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelect(select.filter((item) => item !== price));
      setSelectedIds(selectedIds.filter((item) => item !== id));
        if 
          (id === specialOptionId) setCustomTotal(0);
    }
  };

  return (
    <div className="grid grid-flow-row gap-y-10">
      {budgetOptions.map((option, index) => (
        <div
          className="budget-container flex flex-row flex-wrap justify-between p-3 shadow-inner h-fit rounded-2xl border-none shadow-gray-500"
          key={index}
        >
          <div className=" flex flex-row justify-between w-full">
            <div className="flex flex-col max-w-60 p-4">
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
                onChange={(e) => {
                  handleCheckBox(e, option.price, option.id);
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
      <div className="text-2xl">{totalPrice}</div>
    </div>
  );
};

export default BadgetPanel;
