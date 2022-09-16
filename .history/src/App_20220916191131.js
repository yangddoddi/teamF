import logo from "./logo.svg";
import "./App.css";
import { RouterConfig } from "./router/RouterConfig";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <RouterConfig />
      <Footer />
    </>
  );
}

export default App;
