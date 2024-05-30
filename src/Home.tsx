// import { motion } from "framer-motion";
// import WelcomeView from "./WelcomeView";
import BudgetPanel from "./components/mainPanel/BadgetPanel";
import { BudgetOptions } from "./types";
import { NavLink } from "react-router-dom";



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
        <div className="flex flex-row justify-center">
        <div className="container flex flex-col justify-center items-center">
          <div className="banner-container p-5">
            <h1 className="text-5xl">Elige el mejor presupuesto</h1>
          </div>
          <BudgetPanel budgetOptions={budgetOptions}></BudgetPanel>
        </div>
        <div className="flex justify-end items-end h-fit">
        <NavLink to={"/"}>Volver</NavLink>

          {/* <motion.button
            whileHover={{ backgroundColor: "#3E6608" }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
            className="btn-lg bg-red-600 text-white rounded-2xl p-4 font-semibold"
          >
            Volver
          </motion.button> */}
        </div>
      </div>
     );
}
 
export default Home;