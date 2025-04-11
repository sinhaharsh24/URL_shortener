import * as React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="min-h-screen flex flex-col bg-purple-300">
      <Header />
      <main className="flex-grow">
        <Container />
      </main>
      <Footer />
    </div>
  );
};

export default App;


/*
//this code is not good as it is basic app not a component so when we add header inside this then header component come inside the app not in the app leaving some space

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
    </>
  ) 
}

export default App;
*/