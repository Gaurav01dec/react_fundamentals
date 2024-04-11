//importing react components
import Header from "./components/Header.jsx";
import Examples from "./components/Examples.jsx";
import AllCoreConcepts from "./components/AllCoreConcepts.jsx";


function App() {
  
  return (
    <div>
      <Header></Header>
      <main>
        <AllCoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
