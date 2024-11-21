import './App.css';
import MyComponent from './components/MyComponent';
import { HeaderNavBar, FirstHeroSection,SecondHeroSection, ThirdHeroSection, FourthHeroSection, FifthHeroSection, Footer } from './components/BubbleComponents';

function App() {
  return (

    <div className="App">
      <HeaderNavBar />
      <FirstHeroSection />
      <SecondHeroSection />
      <ThirdHeroSection />
      <FourthHeroSection />
      <FifthHeroSection />
      <Footer />

    </div>
  );
}

export default App;
