import logo from './logo.svg';
import './App.css';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { dd } from "./table"
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const fonts = {
    Times: {
        normal: 'https://localhost:3000/lsansuni.ttf',
        bold: 'https://localhost:3000/lsansuni.ttf',
        italics: 'https://localhost:3000/lsansuni.ttf',
        bolditalics: 'https://localhost:3000/lsansuni.ttf'
    },
    Roboto: {
        normal: 'https://localhost:3000/7454.ttf',
        bold: 'https://localhost:3000/7454.ttf',
        italics: 'https://localhost:3000/7454.ttf',
        bolditalics: 'https://localhost:3000/7454.ttf'
    },
}

function App() {

  function click() {
      console.log('start::')
    let win = window.open('', '_blank');
    pdfMake.createPdf(dd, null, fonts).open({}, win);
  }

  return (
    <div className="App">
      <header className="App-header" onClick={click}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
