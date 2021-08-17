import "./App.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { getDD } from "./table";
import { useState } from "react";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search } from "./search/search";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const fonts = {
  Times: {
    normal: "https://localhost:3000/lsansuni.ttf",
    bold: "https://localhost:3000/lsansuni.ttf",
    italics: "https://localhost:3000/lsansuni.ttf",
    bolditalics: "https://localhost:3000/lsansuni.ttf",
  },
  Roboto: {
    normal: "https://localhost:3000/7454.ttf",
    bold: "https://localhost:3000/7454.ttf",
    italics: "https://localhost:3000/7454.ttf",
    bolditalics: "https://localhost:3000/7454.ttf",
  },
};

function App() {
  return (
    <Router exact path="/dictNum">
      <ul>
        <li>
          <Link to="/dictNum">dictNum</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/dictNum">
          <DictNum />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

const DictNum = () => {
  const [startNum, changeStartNum] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    console.log("start::", startNum);
    let win = window.open("", "_blank");
    getDD(startNum).then((dd) => {
      pdfMake.createPdf(dd, null, fonts).open({}, win);
    });
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <header className="App-header">
          <input
            value={startNum}
            onChange={(e) => changeStartNum(e.target.value)}
          />
        </header>
      </form>
    </div>
  );
};

export default App;
