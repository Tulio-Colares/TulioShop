import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/homeScreen';


function App() {
  return (
    <div className="App">
        <Header />
          <HomeScreen/>
        <Footer />
    </div>
  );
}

export default App;
