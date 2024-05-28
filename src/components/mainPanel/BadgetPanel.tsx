import { BudgetOptions } from "../../types";
import "../../styles/index.css";
import { useEffect, useState } from "react";

type BudgetPanelProps = {
  budgetOptions: BudgetOptions;
};

const BadgetPanel = ({ budgetOptions }: BudgetPanelProps) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [select, setSelect] = useState<number[]>([]);
  
  useEffect(() => {
    const total = select.reduce((acc, current) => acc + current, 0);
    setTotalPrice(total);
  }, [select]);


  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>, priceItem: number) => {
    const price = priceItem;

    const checked = event.target.checked;
    if (checked) {
      setSelect([...select, price]);
    } else {
      setSelect(select.filter((item) => item !== price));
    }
  };



  return (
    <div className="grid grid-flow-row gap-y-10">
      {budgetOptions.map((option, index) => (
        <div
          className="budget-container flex flex-row justify-between p-3 rounded-2xl border-none shadow-gray-500 shadow-inner h-fit "
          key={index}
        >
          <div className="flex flex-col max-w-60 p-4">
            <h2 className="text-3xl">{option.title}</h2>
            <p>{option.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <h3 className="text-3xl font-semibold">{option.price} $</h3>
          </div>
          <div className="form-check flex justify-center items-center gap-3">
            <input
              type="checkbox"
              className="form-check-input"
              name=""
              value={option.price}
              onChange={(e) => {
                handleCheckBox(e, option.price);
              }}
            ></input>
            <label className="form-check-label">Agregar</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgetPanel;
