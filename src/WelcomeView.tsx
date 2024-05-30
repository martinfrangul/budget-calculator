import "./styles/WelcomeView.css";
import { motion } from "framer-motion";
import "./fonts.css";
import { NavLink } from "react-router-dom";

const WelcomeView = () => {
  return (
    <div className="container flex flex-col justify-center items-center h-screen">
      <div
        id="elements"
        className="flex flex-col justify-evenly items-center h-full p-40"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          
          className="text-6xl title"
        >
          ¡Bienvenide!
        </motion.h1>
        <div className="p-5 border-y-purple-700 border-y-8 border-opacity-25">
          <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 3 }}
          className="welcome-text text-4xl max-w-4xl text-center leading-[4rem]"
          >
            En esta sencilla web podrás calcular el presupuesto para nuestros
            diferentes servicios, así como guardar tus presupuestos, buscarte y
            filtrarte.
          </motion.p>
        </div>
        <NavLink to={"/home"}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ backgroundColor: "#3E6608" }}
          whileTap={{ scale: 0.9 }}
          className="btn bg-lime-600 text-white rounded-full p-4"
        >
          Comenzar
        </motion.div>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomeView;
