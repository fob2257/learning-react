import React from 'react';

import { Navbar } from './navbar';

export const Home = () =>
  (
    <section className='home'>
      <h1>[Home Page]</h1>
      <Navbar />
    </section>
  );

export const About = () =>
  (
    <section className='about'>
      <h1>[About Us]</h1>
      <Navbar />
    </section>
  );

export const Events = () =>
  (
    <section className='events'>
      <h1>[Events Calendar]</h1>
      <Navbar />
    </section>
  );

export const Products = () =>
  (
    <section className='products'>
      <h1>[Products Catalog]</h1>
      <Navbar />
    </section>
  );

export const Contact = () =>
  (
    <section className='contact'>
      <h1>[Contact Us]</h1>
      <Navbar />
    </section>
  );

export const Whoops404 = ({ location }) =>
  (
    <div className='whoops-404'>
      <h1>
        Resource not found at {location.pathname}
      </h1>
    </div>
  );
