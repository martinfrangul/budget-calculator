import { motion } from "framer-motion";
import BudgetPanel from "./components/mainPanel/BadgetPanel";
import { BudgetOptions } from "./types";
import { NavLink } from "react-router-dom";
import "./styles/Home.css";
import FormBudget from "./components/userBudgets/FormBadget";
import { MainProvider } from './contexts/MainContext';
import BudgetList from "./components/userBudgets/BadgetList";

const budgetOptions: BudgetOptions = [
  {
    title: "SEO",
    description:
      "Servicio de Entorno Ocultado. No podrás encontrar tu web ni con IA.",
    price: 300,
    id: "1",
  },
  {
    title: "Ads",
    description:
      "Haremos propaganda de tu página web en radios AM y canales de aire.",
    price: 400,
    id: "2",
  },
  {
    title: "Web",
    description:
      "Una web poco responsiva. Prepárate para ver cada div desborado, combiando colores de lo más hortera.",
    price: 500,
    id: "3",
  },
];

const Home = () => {
  return (
    <MainProvider>
    <div className="flex flex-row justify-center">
      <div>
        <div className="container flex flex-col justify-center items-center mb-16">
          <div className="bg-[url('./src/assets/bg-title.jpeg')] bg-cover banner-container rounded-3xl w-fit h-fit p-14 shadow-xl mb-12">
            <h1 className="title-banner text-6xl">
              Calculadora de presupuestos
            </h1>
          </div>
          <BudgetPanel budgetOptions={budgetOptions}></BudgetPanel>
        </div>
        <div className="flex justify-end items-end h-fit">
          <FormBudget></FormBudget>
        </div>
      </div>
      <NavLink to={"/"}>
        <motion.div
          whileHover={{ backgroundColor: "#692C2C" }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
          className="btn-lg bg-red-600 text-white rounded-2xl p-4 font-semibold"
        >
          Volver
        </motion.div>
      </NavLink>
    </div>
    <BudgetList />
    </MainProvider>
  );
};

export default Home;
