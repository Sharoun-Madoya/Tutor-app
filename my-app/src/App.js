import { Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import StudentModule from './components/sudent';
import DomainModule from './components/Domain';
import TutorialModule from './components/tutorial';
import Home from './components/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={< Home/>}/>
      <Route exact path="/student" element={<StudentModule/>}/>
      <Route path="/domain" element={<DomainModule />} />
      <Route path="/tutorial" element={<TutorialModule />} />
    </Routes>
    </>
  );
}

export default App;
