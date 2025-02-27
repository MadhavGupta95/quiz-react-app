import {Routes, Route} from 'react-router-dom'
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Quiz from './components/Quiz.jsx'
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Quiz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
