import BudgetPanel from "./components/mainPanel/BadgetPanel";
import "./styles/App.css";
import { BudgetOptions } from "./types";


const budgetOptions: BudgetOptions = [
  {
    title: "SEO",
    description:
      "Servicio de Entorno Ocultado. No podrás encontrar tu web ni con IA.",
    price: 300,
    id: '1'
  },
  {
    title: "Ads",
    description:
      "Haremos propaganda de tu página web en radios AM y canales de aire.",
    price: 400,
    id: '2'
  },
  {
    title: "Web",
    description:
      "Una web poco responsiva. Prepárate para ver cada div desborado, combiando colores de lo más hortera.",
    price: 500,
    id: '3'
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
