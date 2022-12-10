import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import CityWeather from '../__mock__/CityWeather';
import store from '../redux/store';

it('City component should render correctly', () => {
  const cityWeather = render(
    <Provider store={store}>
      <CityWeather />
    </Provider>,
  );
  expect(cityWeather).toMatchSnapshot();
});
