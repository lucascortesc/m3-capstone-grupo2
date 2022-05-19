import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <Toaster />
    </div>
  );
};

export default App;
