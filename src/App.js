// import logo from './logo.svg';
// import './App.scss';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import Header from './components/Header'
import Splite from './components/Splite'
import Logos from './components/Logos'
import Cards from './components/Cards'
import PriceCards from './components/PriceCards'
import Quote from './components/Quote'
import ContentImages from './components/ContentImages'
import Feature from './components/Feature'
import Contact from './components/Contact'
import Download from './components/Download'
import './App.scss';

// import ModalLogin from "./ModalLogin";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Splite />
      <Logos />
      <Cards />
      <PriceCards />
      <Quote />
      <ContentImages />
      <Feature />
      <Contact />
      <Download />
    </div>
  );
};
// export default Navigation;
export default App;
