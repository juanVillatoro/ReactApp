import './App.css';
import MyComponent from './components/MyComponent';
// import { HeaderNavBar, FirstHeroSection,SecondHeroSection, ThirdHeroSection, FourthHeroSection, FifthHeroSection, Footer } from './components/BubbleComponents';
import { BrowserRouter } from 'react-router-dom'
import Router from "./components/Router";

function App() {
  return (

    <div className="App">
      {/* <HeaderNavBar />
      <FirstHeroSection />
      <SecondHeroSection />
      <ThirdHeroSection />
      <FourthHeroSection />
      <FifthHeroSection />
      <Footer /> */}

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      {/* <MyComponent /> */}
      {/* <Counter /> */}

    </div>
  );
}

export default App;
