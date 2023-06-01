import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.css';

const App=()=>
{
  return(
    <>
     {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar/>}></Route>
          </Routes>
     </BrowserRouter>*/}
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
  

    </>
  )
}

export default App;
