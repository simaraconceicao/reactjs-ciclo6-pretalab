import Header from "./components/Header";
import Bio from "./components/Bio";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Header>Meus cume favoritos!</Header> */}
      <Header title="Meus cume favoritos" />
      <Bio />
      <Cards />
      <Footer description="Feito com ♡ por Lis. E todos os direitos são reservados." />
    </div>
  );
}

export default App;
