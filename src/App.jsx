import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./globalStyles.css"
import { GlobalProvider } from "./Components/global.context";


function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/favs" element={<Favs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/dentist/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </GlobalProvider>
    </>
  );
}

export default App;