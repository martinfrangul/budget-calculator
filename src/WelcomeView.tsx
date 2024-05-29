import "./styles/WelcomeView.css";
import { motion } from "framer-motion";
import "./fonts.css";

interface welcomeViewProps {
  toWelcomeView: () => void;
}

const WelcomeView: React.FC<welcomeViewProps> = ({toWelcomeView}) => {
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
          <p className="welcome-text text-4xl max-w-4xl text-center leading-[4rem]">
            En esta sencilla web podrás calcular el presupuesto para nuestros
            diferentes servicios, así como guardar tus presupuestos, buscarte y
            filtrarte.
          </p>
        </div>
        <motion.button
          whileHover={{ backgroundColor: "#3E6608" }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
          className="btn bg-lime-600 text-white rounded-full p-4"
          onClick={toWelcomeView}
        >
          Comenzar
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeView;
