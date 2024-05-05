import './sass/App.scss';
import Container from 'react-bootstrap/esm/Container';
import SiteNav from './components/SiteNav';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {


  

  return (
    <>
      <SiteNav />
      <Container fluid className='p-0'>
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills /> 
      </Container>

    </>
  )
}

export default App
