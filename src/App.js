import {Routes, Route} from 'react-router-dom'
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Quiz from './components/Quiz.jsx'
import Header from './components/Header.jsx';
import Result from './components/Result.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
