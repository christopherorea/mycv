import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav';
import './style.css';
import './home.css';
import Hero from './components/hero';
import Banner from './components/banner';
import CardList from './components/cardList';
import Subscribe from './components/subscribe';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Nav />
      <Hero />
      <Banner />
      <CardList />
      <Subscribe />
      <Footer />
    </div>
  </React.StrictMode>
);