import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Toaster
        position="top-right"
        />
    </div>
  );
};

export default App;
