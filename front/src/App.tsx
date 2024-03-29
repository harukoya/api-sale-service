import { FC } from 'react'
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Feature from './components/Feature';
import Price from './components/Price';
import Contact from './components/Contact';

const App: FC = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      <Overview />
      <Feature />
      <Price />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

// const App: FC = () => (
//   <>
//     <header>
//       <Header1 />
//     </header>
//     <main>
//       <Overview />
//       <Feature />
//       <Price />
//       <Contact />
//     </main>
//     <footer>
//       <Footer />
//     </footer>
//   </>
// );

export default App;
