
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Viewdoctor from './Viewdoctor/Viewdoctor';
import Doctorlist from './Doctorlist/Doctorlist';
import Footer from './Footer/Footer'


function App() {
  return (
    <div className="App">

      <Header/>

      {/* place the route inside the routes */}
      <Routes>

        {/* specify routes for each component */}
        {/* setting route for main doctor page */}
        <Route path='/' element={<Doctorlist/>}/>  

        {/* setting route for view doctor page */}
        <Route path='/viewdoctor/:id' element={<Viewdoctor/>}/>

      </Routes>

      <Footer/>
     
    </div>
  );
}

export default App;
