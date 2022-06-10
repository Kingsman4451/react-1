import "../node_modules/bootstrap/scss/bootstrap.scss"
import "../src/assets/styles/styles.scss"
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mainsection from "./components/Mainsection"

function App() {
  return (
    <>
        <Header/>
        <Mainsection/>
        <Footer/>
    </>
  );
}

export default App;
