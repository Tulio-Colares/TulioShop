import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/homeScreen';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
        <Header />
          <Container id='main'>
            <HomeScreen />
          </Container>
        <Footer />
    </div>
  );
}

export default App;
