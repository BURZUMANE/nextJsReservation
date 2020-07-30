import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  step: 0,
  dates: {
    startDate: '',
    endDate: '',
  },
  location: { adress: '', latLng: { lat: null, lng: null } },
};
export const reservationSlice = createSlice({
  name: 'reservation',
  initialState: initialState,
  reducers: {
    setAdress: (state, { payload }) => {
      console.log(payload);
      return { ...state, location: { ...payload } };
    },
    setDates: (state, { payload }) => {
      console.log(payload);
      return { ...state, dates: { ...payload } };
    },
    setAdresDesc: (state, { payload }) => {
      console.log('payload');
      return { ...state, location: { ...location, adress: payload } };
    },
    setStart: (state, { payload }) => {
      console.log('dasdassda');
      return { ...state, dates: { ...state.dates, startDate: payload } };
    },
    setEnd: (state, { payload }) => {
      return { ...state, dates: { ...state.dates, endDate: payload } };
    },
    // stepIncrement: (state) => {
    //   console.log('dasasddas');
    //   return (state) => (state.step += 1);
    // },
    reset: (state) => {
      return initialState;
    },
  },
});
