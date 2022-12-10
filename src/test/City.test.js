import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import City from '../components/City';
import store from '../redux/store';

it('City component should render correctly', () => {
  const city = render(
    <Provider store={store}>
      <City />
    </Provider>,
  );
  expect(city).toMatchSnapshot();
});