import GlobalState from "./contexts/global/GlobalState";
import Home from "./page/Home/Home";

function App() {
  return (
    <GlobalState>
      <Home />
    </GlobalState>
  );
}

export default App;
