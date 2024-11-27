import './App.css';
import MyComponent from './components/MyComponent';
// import { HeaderNavBar, FirstHeroSection,SecondHeroSection, ThirdHeroSection, FourthHeroSection, FifthHeroSection, Footer } from './components/BubbleComponents';
import { BrowserRouter } from 'react-router-dom'
import RouterApp from './components/Router';

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

        <MyComponent />
        {/* <Counter /> */}

        {/* <BrowserRouter>
          <RouterApp />
        </BrowserRouter> */}

    </div>
  );
}

export default App;
