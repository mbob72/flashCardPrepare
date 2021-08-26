import './search.css';
import {useState} from "react";
import getTranslation from "../messaging";

function Search() {
  const [word, changeWord] = useState("");
  async function onSubmit(e) {
    e.preventDefault();

    const result = await getTranslation('https://translate.yandex.ru', '/?lang=en-ru&text=', word)
    console.log('we have result:', result)
  }
  return (
    <div className="search">
      <p>Word search</p>
      <form onSubmit={onSubmit}>
        <input
            value={word}
            onChange={(e) => changeWord(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
