import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
          <Container id='main'>
            <Outlet />
          </Container>
        <Footer />
    </div>
  );
}

export default App;
