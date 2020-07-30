import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, CardContent, Card, Button } from '@material-ui/core';
import { reservationSlice } from '../lib/slices/reservationSlice';
import { useRouter } from 'next/router';

const ResetButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    dispatch(reservationSlice.actions.reset());
    if (router.pathname !== '/') {
      router.push('/');
    }
  };
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Reset
    </Button>
  );
};

export default ResetButton;
