import { BudgetOptions } from "../../types";
import "../../styles/index.css";

type BudgetPanelProps = {
  budgetOptions: BudgetOptions;
};

const BadgetPanel = ({ budgetOptions }: BudgetPanelProps) => {
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
            <h3 className="text-3xl font-semibold">{option.prize} $</h3>
          </div>
          <div className="form-check flex justify-center items-center">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name=""
                id=""
                value="checkedValue"
              ></input>
              Display value
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgetPanel;
