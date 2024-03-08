import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Grade13 from './component/Grade13';
import Grade12 from './component/Grade12';
import Grade11 from './component/Grade11';
import Grade10 from './component/Grade10';
import Grade9 from './component/Grade9';
import Grade8 from './component/Grade8';
import Grade7 from './component/Grade7';
import Grade6 from './component/Grade6';
import Grade5 from './component/Grade5';
import Grade4 from './component/Grade4';
import Grade3 from './component/Grade3';
import Grade2 from './component/Grade2';
import Grade1 from './component/Grade1';
import ALMaths from './component/ALMaths';

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


        </Routes>
      </Router>
    </div>
  );
}

export default App;
