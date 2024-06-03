import { useState, FormEvent, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const FormBudget = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Me aseguro de que "select" no sea undefined
  
  const context = useContext(MainContext);
  
  if (!context) {
    throw new Error("FormBudget must be used within a SelectProvider");
  }
  
  const { selectedIds, setSelectedIds, total, select, setSelect, setBudgetItem, pages, lang, setPages, setLang } = context;

  const services = select.map((item) => item.service);

  // Objeto que se crea al clickear submit

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const newBudgetItem = {
      name: name,
      phone: phone,
      email: email,
      total: total,
      services: services,
      specialOptions: {
        pages: pages,
        lang: lang,
      },
    };

    
    // MANEJO DE ERRORES
    
    const emptyCheck = 'Tienes que elegir alguna opción para crear un presupuesto'

    if (selectedIds.length === 0) {
        alert(emptyCheck);
    } 
    else {
      setBudgetItem(newBudgetItem);
      setName('')
      setPhone('')
      setEmail('')
      setSelectedIds([]); // Limpiar checkboxes
      setSelect([]); // Limpiar selección de servicios
      setPages(0); // Limpiar páginas
      setLang(0); // Limpiar lenguajes
    } 
  };

  //

  return (
    <div className="container form-container p-10 justify-center items-center bg-[#FDFDFD] ">
      <form onSubmit={submitForm} className="flex flex-row gap-3 items-center ">
        <div>
          <label htmlFor="name" className="mx-3">
            Nombre
          </label>
          <input
            id="name"
            required
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="h-7 border-2 border-solid"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mx-3">
            Teléfono
          </label>
          <input
            id="phone"
            required
            value={phone}
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            className="h-7 border-2 border-solid"
          />
        </div>
        <div>
          <label htmlFor="email" className="mx-3">
            Email
          </label>
          <input
            id="email"
            required
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="h-7 border-2 border-solid"
          />
        </div>
        <div className="btn-container">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBudget;
