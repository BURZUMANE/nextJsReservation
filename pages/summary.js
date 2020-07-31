import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
  Typography,
  Box,
  CardContent,
  Card,
  Button,
  TextField,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Map from '../components/Gmap';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const Summary = () => {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const reservation = state.reservation;
  const adressDesc = state.reservation.location.adress;
  const adressCoords = state.reservation.location.latLng;
  const location = {
    address: adressDesc,
    lat: adressCoords.lat,
    lng: adressCoords.lng,
  };

  const resrvationDates = reservation.dates;
  const getExactReservationDates = (dateType) => {
    const startTime = new Date(resrvationDates[dateType]).toLocaleTimeString();
    const startDate = new Date(resrvationDates[dateType]).toLocaleDateString();
    return `${startDate} ${startTime}`;
  };
  const startTime = new Date(resrvationDates.checkIn).toLocaleTimeString();
  const startDate = new Date(resrvationDates.checkIn).toLocaleDateString();
  return (
    <Card>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Reservation summary</TableCell>
                <TableCell align="right">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Check in:
                </TableCell>
                <TableCell align="right">
                  {getExactReservationDates('startDate')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Check out:
                </TableCell>
                <TableCell align="right">
                  {getExactReservationDates('endDate')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Adress:
                </TableCell>
                <TableCell align="right">{adressDesc}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" colSpan={2}>
                  <Map location={location} zoomLevel={11}></Map>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Summary;
