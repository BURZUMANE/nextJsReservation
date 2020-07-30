import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, CardContent, Card, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DatePicker from 'react-datepicker';
import {
  Field,
  Form,
  Formik,
  FormikConfig,
  FormikValues,
  ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import DateFnsUtils from '@date-io/date-fns';
import { reservationSlice } from '../lib/slices/reservationSlice';
import ResetButton from '../components/ResetButton';

const twoHours = new Date();
twoHours.setHours(twoHours.getHours() + 2);

const validationSchema = yup.object().shape({
  startDate: yup
    .mixed()
    .test(
      'isAfter',
      'Check should be at least two hours in advance',
      (value) => {
        return value >= twoHours;
      }
    )
    .required('required'),
  endDate: yup
    .date()
    .when('startDate', (startDate, schema) => {
      return yup
        .date()
        .min(startDate, 'Check should be at least two hours after check in')
        .required('required');
    })
    .required('Must enter end date'),
});
const IndexPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Please choose a checkin and checkout dates
        </Typography>
        <Formik
          initialValues={{
            startDate: new Date(),
            endDate: new Date(),
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // same shape as initial values
            const dates = {
              startDate: values.startDate,
              endDate: values.endDate,
            };
            dispatch(reservationSlice.actions.setDates(dates));
            router.push('/adress');
          }}
        >
          {({ isSubmitting, values, setFieldValue, errors }) => {
            const dates = useSelector((state) => state.reservation.dates);
            if (dates.startDate !== '') {
              values.startDate = new Date(dates.startDate);
            } else {
              values.startDate = new Date();
            }
            if (dates.endDate !== '') {
              values.endDate = new Date(dates.endDate);
            } else {
              values.endDate = new Date();
            }
            return (
              <Form>
                <Grid container>
                  <Grid item xs={6}>
                    <Box marginBottom={5}>
                      <DatePicker
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm"
                        showTimeInput
                        selected={values.startDate}
                        className="form-control"
                        name="startDate"
                        onChange={(date) => {
                          dispatch(reservationSlice.actions.setStart(date));
                          // setFieldValue('startDate', date)
                        }}
                      />
                      <Box>
                        <ErrorMessage name="startDate" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box marginBottom={5}>
                      <DatePicker
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm"
                        showTimeInput
                        selected={values.endDate}
                        className="form-control"
                        name="endDate"
                        onChange={(date) => {
                          dispatch(reservationSlice.actions.setEnd(date));
                          // setFieldValue('endDate', date)
                        }}
                      />
                      <ErrorMessage name="endDate" />
                    </Box>
                  </Grid>
                </Grid>
                <Button variant="contained" color="primary" type="submit">
                  Next
                </Button>
                <ResetButton />
              </Form>
            );
          }}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default IndexPage;

// .date()
// .min(twoHours, `check in date must be at least two hours in advance`)
// .required('Must enter start date'),
