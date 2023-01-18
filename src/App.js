import MiApi from './components/MiApi'
import Footer from './components/Footer'
import Header from './components/Header'
import Carousel from './components/Carousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      {<MiApi />}
      <Footer />
    </div>
  );
}

export default App;
