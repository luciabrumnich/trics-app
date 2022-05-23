import Header from "./Components/Header";
import Gif from "./Components/Gif";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Gif />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
