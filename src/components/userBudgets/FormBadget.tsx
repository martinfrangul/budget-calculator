import { useState, FormEvent, useContext } from "react";
import { SelectContext } from "../../contexts/SelectContext";

const FormBudget = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Me aseguro de que "select" no sea undefined

  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("FormBudget must be used within a SelectProvider");
  }

  // SI AGREGO DEL CONTEXTO PAGES Y LANG Y LO AGREGO AL NEWBUDGETITEM FUNCIONA

  const { total, select, setBudgetItem, pages, lang } = context;

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
    setBudgetItem(newBudgetItem);
    console.log(newBudgetItem);
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
