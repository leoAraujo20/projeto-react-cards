import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Integrantes do projeto CapiTO</h1>
      <section className="card-container">
        <Card
          imageUrl="https://github.com/leoAraujo20.png"
          name="Leônidas Araújo"
          project="CapiTO"
        />
        <Card
          imageUrl="https://github.com/Pepeu-s.png"
          name="Pedro Felipe"
          project="CapiTO"
        />
        <Card
          imageUrl="https://github.com/github.png"
          name="Carlos Eduardo"
          project="CapiTO"
        />
      </section>
    </>
  );
}

export default App;
