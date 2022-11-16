import Bio from "./components/Bio";
import Title from "./components/Title";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Bio />
      <Title text="Meus conteúdos favoritos" />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
