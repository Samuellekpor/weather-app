import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Cities from '../components/Cities';
import store from '../redux/store';

it('City component should render correctly', () => {
  const cities = render(
    <Provider store={store}>
      <Cities />
    </Provider>,
  );
  expect(cities).toMatchSnapshot();
});
