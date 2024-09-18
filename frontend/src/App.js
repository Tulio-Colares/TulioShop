import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
        <Header />
          <Container id='main'>
            <Outlet />
          </Container>
        <Footer />
        <ToastContainer />
    </div>
  );
}

export default App;
