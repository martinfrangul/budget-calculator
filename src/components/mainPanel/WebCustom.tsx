import { useEffect, useState } from "react";

interface WebCustomProps {
    onCustomTotal: (customTotal: number) => void;
  }

const WebCustom: React.FC<WebCustomProps>  = ({ onCustomTotal }) => {
  const [pages, setPages] = useState(0);
  const [lang, setLang] = useState(0);

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
    if (pages > 0) setLang((prev) => prev - 1);
  };

  const userSetPages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userPages = parseFloat(e.target.value);
    setPages(userPages);
  };

  const userSetLang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userLang = e.target.value;
    setLang(parseFloat(userLang));
  };

 

  useEffect(() => {
    const customPrice = (pages + lang) * 30;
    onCustomTotal(customPrice);
  }, [pages, lang, onCustomTotal]);

  return (
    <>
      <div className="flex flex-col justify-center w-40 h-32 gap-3">
        <div className="flex flex-row justify-between">
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
          <label htmlFor="lang">Lenguajes</label>
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
