import MainView from "./MainView";
import WelcomeView from "./WelcomeView";
import "./styles/App.css";
import { useState } from "react";

const App = () => {
  const [view, setView] = useState(false);


  const toMainView = () => {
    setView(false)
  }

  const toWelcomeView = () => {
    setView(true)
  }

  // HACER LA LOGICA DE LOS BOTONES DE COMENZAR Y ATRSA
  // PASAR POR PROP DESDE ONCLICK
  // EN APP HACER 2 FUNCIONES QUE CAMBIEN VIEW UNA A FALSO LA OTRA A TRUE


  return (
    <>
      {view && <MainView toMainView={toMainView} />}
      {!view && <WelcomeView toWelcomeView={toWelcomeView} />}
    </>
  );
};

export default App;
