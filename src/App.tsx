import BudgetPanel from "./components/mainPanel/BadgetPanel";
import "./styles/App.css";
import { BudgetOptions } from "./types";


const budgetOptions: BudgetOptions = [
  {
    title: "SEO",
    description:
      "Servicio de Entorno Ocultado. No podrás encontrar tu web ni con IA.",
    prize: 300,
    checkboxAdd: false,
  },
  {
    title: "Ads",
    description:
      "Haremos propaganda de tu página web en radios AM y canales de aire.",
    prize: 400,
    checkboxAdd: false,
  },
  {
    title: "Web",
    description:
      "Una web poco responsiva. Prepárate para ver cada div desborado, combiando colores de lo más hortera.",
    prize: 500,
    checkboxAdd: false,
  },
];

const App = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className="banner-container p-10">
          <h1 className="text-5xl">Elige el mejor presupuesto</h1>
        </div>
        <BudgetPanel budgetOptions={budgetOptions}></BudgetPanel>
      </div>
    </>
  );
};

export default App;
