import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('NavBar component should render correctly', () => {
  const nav = render(
    <Router>
      <NavBar />
    </Router>,
  );
  expect(nav).toMatchSnapshot();
});
