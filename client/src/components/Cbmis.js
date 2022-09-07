import '../App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './shared/navBar/NavBar';
import AddCountries from './shared/addProducts/AddProducts';
import CountriesList from './shared/countriesList/CountriesList';

import ScrollTop from './shared/Utilities/scrollTop/ScrollTop';
import Footer from './shared/footer/Footer';

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<AddCountries />} />
          <Route path="/countriesList" element={<CountriesList />} />
          <Route path="*" element={<p className="notFoundPage"> Page Not Found error 404 </p>} />
        </Routes>
        <ScrollTop />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
