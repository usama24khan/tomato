import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ExploreMenu from './Components/ExploreMenu/ExploreMenu';
import DisplayList from './Components/DisplayList/DisplayList';
import Footer from './Components/Footer/Footer';
import ShowLogin from './Components/ShowLogin/ShowLogin';
import Cards from './Components/Cards/Cards';

function App() {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      {showLogin ? <ShowLogin setShowLogin={setShowLogin} /> : (
        <Router>
          <Navbar showLogin={showLogin} menu={true}  setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/tomato" element={
              <>
                <Header />
                <ExploreMenu category={category} setCategory={setCategory} />
                <DisplayList category={category} />
              </>
            } />
            <Route path="/tomato/cards" element={<Cards  />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
