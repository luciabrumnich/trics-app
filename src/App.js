import Header from "./Components/Header";
import Gif from "./Components/Gif";
import Footer from "./Components/Footer";
import "./App.css";
import "./Components/ContainerMain.css";

function App() {
  return (
    <div className='container-main'>
      <Header />
      <Gif />
      <Footer />
    </div>
  );
}

export default App;
