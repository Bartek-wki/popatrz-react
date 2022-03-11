import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Article from './components/pages/Article/Article';
import HowWeLook from './components/pages/HowWeLook/HowWeLook';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Container from './components/views/Container/Container'


const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/howWeLook/:id" element={<HowWeLook />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>  
  );
}

export default App;
