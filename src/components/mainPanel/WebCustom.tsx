import { useEffect, useContext, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import Modal from "./Modal";

interface WebCustomProps {
  onCustomTotal: (customTotal: number) => void;
}

interface DataModal {
  title: string;
  body: string;
}

const WebCustom: React.FC<WebCustomProps> = ({ onCustomTotal }) => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("FormBudget must be used within a MainProvider");
  }

  const { pages, lang, setPages, setLang } = context;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState<DataModal>({ title: "", body: "" })

  const dataModalPages = {
    title: "Número de páginas",
    body: "Agrega las páginas que necesites. Te las cobraremos pero te haremos sólamente una landing page",
  };

  const dataModalLang = {
    title: "Número de idiomas",
    body: "Agrega los lenguajes que quieras que tenga la página, español el ingles se cobran al doble. Ruso y chino son gratis",
  };

  const addPages = () => {
    setPages((prev) => prev + 1);
  };

  const subsPages = () => {
    if (pages > 0) setPages((prev) => prev - 1);
  };

  const addLang = () => {
    setLang((prev) => prev + 1);
  };

  const subsLang = () => {
    if (lang > 0) setLang((prev) => prev - 1);
  };

  const userSetPages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userPages = parseFloat(e.target.value);
    setPages(userPages);
  };

  const userSetLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userLang = parseFloat(e.target.value);
    setLang(userLang);
  };

  const handleShowModalPages = () => {

    setDataModal(dataModalPages)
    setIsModalOpen(true);
  };

  const handleShowModalLang = () => {

    setDataModal(dataModalLang)
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const customPrice = (pages + lang) * 30;
    onCustomTotal(customPrice);
  }, [pages, lang, onCustomTotal]);

  return (
    <>
      <div className="flex flex-col justify-center w-56 h-32 gap-3">
        <div className="flex flex-row justify-between">


          <button className="btn btn-lg"  onClick={handleShowModalPages}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </button>
          <Modal isOpen={isModalOpen} dataModal={dataModal} onClose={handleCloseModal}></Modal>


          <label htmlFor="pages">Páginas</label>
          <button onClick={subsPages}>-</button>
          <input
            className="border-2 w-12 text-center rounded-lg"
            id="pages"
            type="number"
            value={pages}
            onChange={userSetPages}
          />
          <button onClick={addPages}>+</button>
        </div>

        <div className="flex flex-row justify-between">


          <button className="btn btn-lg" onClick={handleShowModalLang}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </button>
          <Modal isOpen={isModalOpen} dataModal={dataModal} onClose={handleCloseModal}></Modal>


          <label htmlFor="lang">Idiomas</label>
          <button onClick={subsLang}>-</button>

          <input
            className="border-2 w-12 rounded-lg text-center"
            id="lang"
            type="number"
            value={lang}
            onChange={userSetLang}
          />
          <button onClick={addLang}>+</button>
        </div>
      </div>
    </>
  );
};

export default WebCustom;
