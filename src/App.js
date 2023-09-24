import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <div className="App">
      < Navbar />
      < Home />
      < Footer />
    </div>
  );
}

export default App;
