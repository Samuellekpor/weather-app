import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Cities from '../__mock__/Cities';
import store from '../redux/store';

it('City component should render correctly', () => {
  const citiesA = render(
    <Provider store={store}>
      <Cities />
    </Provider>,
  );
  expect(citiesA).toMatchSnapshot();
});
