import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Grade13 from './pages/Grade13';
import Grade12 from './pages/Grade12';
import Grade11 from './pages/Grade11';
import Grade10 from './pages/Grade10';
import Grade9 from './pages/Grade9';
import Grade8 from './pages/Grade8';
import Grade7 from './pages/Grade7';
import Grade6 from './pages/Grade6';
import Grade5 from './pages/Grade5';
import Grade4 from './pages/Grade4';
import Grade3 from './pages/Grade3';
import Grade2 from './pages/Grade2';
import Grade1 from './pages/Grade1';
import ALMaths from './component/ALMaths';
import Physics from './pages/Physics';
import Contents from './component/Contents';

function App() {
  return (
    <div className="App">
      
     <Router>
    
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/grade13' element={<Grade13/>}/>
          <Route exact path='/grade12' element={<Grade12/>}/>
          <Route exact path='/grade11' element={<Grade11/>}/>
          <Route exact path='/grade10' element={<Grade10/>}/>
          <Route exact path='/grade9' element={<Grade9/>}/>
          <Route exact path='/grade8' element={<Grade8/>}/>
          <Route exact path='/grade7' element={<Grade7/>}/>
          <Route exact path='/grade6' element={<Grade6/>}/>
          <Route exact path='/grade5' element={<Grade5/>}/>
          <Route exact path='/grade4' element={<Grade4/>}/>
          <Route exact path='/grade3' element={<Grade3/>}/>
          <Route exact path='/grade2' element={<Grade2/>}/>
          <Route exact path='/grade1' element={<Grade1/>}/>
          <Route exact path='/almaths' element={<ALMaths/>}/>
          <Route exact path='/physics' element={<Physics/>}/>
          <Route exact path='/contents' element={<Contents/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
