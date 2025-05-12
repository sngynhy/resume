import './App.css';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <div className='headerLine'></div>
      <div className="App">
          <Header />
          <Main />
          <Footer />
      </div>
    </>
  );
}

export default App;
