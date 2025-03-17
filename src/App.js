import "./App.css";
import { ThemeContextProvider } from "./components/ThemeSetting/ThemeSettings";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
