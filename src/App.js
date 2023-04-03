import logo from './logo.svg';
import './App.css';
import { AllRoutes } from "./Routes/AllRoutes";
import { Header, Footer } from "./Components/"
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
