import { useState, useContext, useEffect, FormEvent, ChangeEvent } from "react";
import { MainContext } from "../../contexts/MainContext";
import { BudgetItem } from "../../types";

const BudgetList = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("FormBudget must be used within a MainProvider");
  }

  const { budgetItem } = context;
  const [originalBudgetList, setOriginalBudgetList] = useState<BudgetItem[]>([]);
  const [filteredBudgetList, setFilteredBudgetList] = useState<BudgetItem[]>([]);
  const [searchText, setSearchText] = useState<string>('')

  const sortActiveStyleDate = document.getElementById("sort-by-date");
  const sortActiveStyleTotal = document.getElementById("sort-by-total");
  const sortActiveStyleName = document.getElementById("sort-by-name");

  const sortByDate = () => {
    if (filteredBudgetList.length !== 0) {
      sortActiveStyleDate?.classList.add("border-custom", "text-custom");
      sortActiveStyleName?.classList.remove("border-custom", "text-custom");
      sortActiveStyleTotal?.classList.remove("border-custom", "text-custom");
      const orderedBudgetListByDate = [...filteredBudgetList].sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        } else if (b.date < a.date) {
          return 1;
        }
        return 0;
      });
      setFilteredBudgetList(orderedBudgetListByDate);

    }
  };

  const sortByTotal = () => {
    if (filteredBudgetList.length !== 0) {
      sortActiveStyleTotal?.classList.add("border-custom", "text-custom");
      sortActiveStyleDate?.classList.remove("border-custom", "text-custom");
      sortActiveStyleName?.classList.remove("border-custom", "text-custom");
      const orderedBudgetListByTotal = [...filteredBudgetList].sort((a, b) => {
        if (a.total > b.total) {
          return -1;
        } else if (b.total > a.total) {
          return 1;
        }
        return 0;
      });
      setFilteredBudgetList(orderedBudgetListByTotal);

    }
  };

  const sortByName = () => {
    if (filteredBudgetList.length !== 0) {
      sortActiveStyleName?.classList.add("border-custom", "text-custom");
      sortActiveStyleDate?.classList.remove("border-custom", "text-custom");
      sortActiveStyleTotal?.classList.remove("border-custom", "text-custom");
      const orderedBudgetListByName = [...filteredBudgetList].sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      setFilteredBudgetList(orderedBudgetListByName);

    }
  };

// MANERA DE FILTRAR POR LETRA

  // const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setSearchText(value);
  //   if (value === '') {
  //     setFilteredBudgetList(originalBudgetList);
  //   } else {
  //     const filteredBudgetList = originalBudgetList.filter((budget) =>
  //       budget.name.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setFilteredBudgetList(filteredBudgetList);
  //   }
  // };

  // const handleSearchSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   const filteredBudgetList = originalBudgetList.filter((budget) =>
  //     budget.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setFilteredBudgetList(filteredBudgetList);
  // };


  const handleSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const userValue = event.target.value
    setSearchText(userValue)
    if (event.target.value === '') {
      setFilteredBudgetList(originalBudgetList);
    }
  }

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    const filteredBudgetList = originalBudgetList.filter((budget) => budget.name.toLowerCase() === searchText.toLowerCase())
    setFilteredBudgetList(filteredBudgetList)
  };

  useEffect(() => {
    if (budgetItem.name !== "") {
      setOriginalBudgetList((prevList) => [...prevList, budgetItem]);
      setFilteredBudgetList((prevList) => [...prevList, budgetItem]);
    }
  }, [budgetItem]);




  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl flex justify-center my-10">
          Presupuestos actuales
        </h1>
      </div>

      {/* BOTONES DE ORDENAMIENTO Y BÚSQUEDA */}

      <div className="flex flex-col items-center">
        <form className=" w-1/4 flex" id="search-bar">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          ></label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Escribe un nombre..."
              value={searchText}
              onChange={handleSearchText}
              required
            />
            <button
              type="submit"
              onClick={handleSearchSubmit}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </form>

        <div
          className="flex flex-row w-9/12 gap-5 my-5 justify-center"
          id="sort-buttons"
        >
          <button
            onClick={sortByDate}
            id="sort-by-date"
            className="btn btn-lg bg-amber-100 rounded text-black p-2"
          >
            Fecha
          </button>
          <button
            onClick={sortByTotal}
            id="sort-by-total"
            className="btn btn-lg bg-amber-100 rounded text-black p-2"
          >
            Precio
          </button>
          <button
            onClick={sortByName}
            id="sort-by-name"
            className="btn btn-lg bg-amber-100 rounded text-black p-2"
          >
            Nombre
          </button>
        </div>
      </div>

      <hr className="h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>

      {/* PRESUPUESTOS */}

      <div className="flex flex-col gap-y-6 justify-center items-center">
        {filteredBudgetList.length === 0 && <p>NO HAY NINGÚN PRESUPUESTO AÚN</p>}
        {filteredBudgetList.map((item, index) => (
          <div
            className="budget-container flex flex-row flex-wrap bg-[#FDFDFD] justify-center items-center p-3 h-fit rounded-2xl border-2 border-solid border-black"
            key={index}
          >
            <div className=" flex flex-row justify-between w-full">
              <div className="flex flex-col max-w-60 p-4 ">
                <h2 className="text-3xl">{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
              <div className="flex flex-col max-w-60 p-4 ">
                <h2>Servicios contratados:</h2>
                {item.services.map((item, index) => (
                  <h3 key={index}>· {item}</h3>
                ))}
                {item.services.includes("Web") && (
                  <div>
                    <p>Páginas: {item.specialOptions.pages}</p>
                    <p>Idiomas extra: {item.specialOptions.lang}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center">
                <h3 className="text-3xl font-semibold">{item.total} $</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BudgetList;
