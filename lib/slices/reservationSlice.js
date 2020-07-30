import { createSlice } from '@reduxjs/toolkit';
const initialState = {
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
      return { ...state, location: { ...payload } };
    },
    setDates: (state, { payload }) => {
      return { ...state, dates: { ...payload } };
    },
    setAdresDesc: (state, { payload }) => {
      return { ...state, location: { ...location, adress: payload } };
    },
    setStart: (state, { payload }) => {
      return { ...state, dates: { ...state.dates, startDate: payload } };
    },
    setEnd: (state, { payload }) => {
      return { ...state, dates: { ...state.dates, endDate: payload } };
    },
    reset: (state) => {
      return initialState;
    },
  },
});
