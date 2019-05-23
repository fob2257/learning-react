import React from 'react';
import { Route } from 'react-router-dom';

import { AboutMenu } from './menu';
import { PageTemplate } from './pageTemplate';

// import './stylesheets/pages.scss';

export const Home = () =>
  (
    <PageTemplate>
      <section className='home'>
        <h1>[Home Page]</h1>
      </section>
    </PageTemplate>
  );

export const About = ({ match }) =>
  (
    <PageTemplate>
      <section className='about'>
        <Route component={AboutMenu} ></Route>
        <Route exact path='/about' component={Company} ></Route>
        <Route exact path='/about/history' component={History} ></Route>
        <Route exact path='/about/services' component={Services} ></Route>
        <Route exact path='/about/location' component={Location} ></Route>
      </section>
    </PageTemplate>
  );

export const Events = () =>
  (
    <PageTemplate>
      <section className='events'>
        <h1>[Events Calendar]</h1>
      </section>
    </PageTemplate>
  );

export const Products = () =>
  (
    <PageTemplate>
      <section className='products'>
        <h1>[Products Catalog]</h1>
      </section>
    </PageTemplate>
  );

export const Contact = () =>
  (
    <PageTemplate>
      <section className='contact'>
        <h1>[Contact Us]</h1>
      </section>
    </PageTemplate>
  );

export const Whoops404 = ({ location }) =>
  (
    <div className='whoops-404'>
      <h1>
        Resource not found at {location.pathname}
      </h1>
    </div>
  );

const Company = () =>
  (
    <section className='company'>
      <h2>[Company]</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.
        Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );

const History = () =>
  (
    <section className='history'>
      <h2>[History]</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.
        Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );

const Services = () =>
  (
    <section className='services'>
      <h2>[Services]</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.
        Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );

const Location = () =>
  (
    <section className='location'>
      <h2>[Location]</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus
        diam. Sed nisi. Nulla quis sem at nibh
        elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed
        augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla.
        Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos
        himenaeos. Curabitur sodales ligula in
        libero.
      </p>
    </section>
  );
