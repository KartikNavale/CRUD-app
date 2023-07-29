
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from "./components/Head";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import CreateUser from "./components/CreateUser";
import Edit from "./components/Edit";
import Details from "./components/Details"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/CreateUser' element={<CreateUser />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
