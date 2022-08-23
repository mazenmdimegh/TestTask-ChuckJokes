import logo from './logo.svg';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import JokeDescription from './pages/JokeDescription/JokeDescription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:Keyy" element={<Home />} />
          {/* <Route path="/joke" element={<Joke />} /> */}
          <Route exact path="/joke/:id" element={<JokeDescription />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
