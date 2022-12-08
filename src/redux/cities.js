import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const citiesList = [];
export const fetchCities = createAsyncThunk('cities/fetchCities', async()=>{
  const citiesOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    headers: {
      'X-RapidAPI-Key': 'bd96312960msh57a0c20cb92d65ep17717cjsnaaf77f488059',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  axios.request(citiesOptions).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
  return [];
})

const citiesSlice = createSlice({
  name: 'cities',
  initialState: citiesList,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchCities.fulfilled, (state, action) => {
      const newState = state
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          element
        })
      })
      return newState;
    })
  }
})

export default citiesSlice.reducer;