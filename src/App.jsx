import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import { GlobalStateProvider } from "./context/GlobalStateProvider";

function App() {
  return (
    <div className="font-header text-white relative">
      <GlobalStateProvider>
        <Navigation />
        <Container />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
