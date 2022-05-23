import Header from "./Components/Header";
import Gif from "./Components/Gif";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center bg-indigo-300">
      <Gif />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
