import logo from './logo.svg';  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/joke" element={<Joke />} /> */}
          {/* <Route exact path="/joke/:id" element={<JokeDescription />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
