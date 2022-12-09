import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'city',
  initialState: {
    cities: [],
    cityWeather: [],
  },
  reducers: {
    getCities(state, action) {
      state.cities.push(...action.payload);
    },
    getCityWeather(state, action) {
      state.cityWeather.push(...action.payload);
    },
  },
});

export const { getCityWeather, getCities } = citiesSlice.actions;

export default citiesSlice.reducer;
