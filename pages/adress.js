import {
  Typography,
  Box,
  CardContent,
  Card,
  Button,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { reservationSlice } from '../lib/slices/reservationSlice';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

const validationSchema = yup.object().shape({
  adress: yup.string().required(),
});

export default function Adress() {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyATyME8aPrEABRhIh8mtOXnfNdQ8ofNEq0&libraries=places',
        document.querySelector('head'),
        'google-maps'
      );
    }

    loaded.current = true;
  }

  function removeGoogleMapScript() {
    console.debug('removing google script...');
    let keywords = ['maps.googleapis'];

    //Remove google from BOM (window object)
    window.google = undefined;

    //Remove google map scripts from DOM
    let scripts = document.head.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      let scriptSource = scripts[i].getAttribute('src');
      if (scriptSource != null) {
        if (keywords.filter((item) => scriptSource.includes(item)).length) {
          scripts[i].remove();
          // scripts[i].parentNode.removeChild(scripts[i]);
        }
      }
    }
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);
  const state = useSelector((state) => state.reservation.location.adress);
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            adress: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (value) => {
            const coords = async (value) => {
              const results = await geocodeByAddress(value);
              const latLng = await getLatLng(results[0]);
              return latLng;
            };
            const latLng = await coords(value.adress.description);
            const location = { adress: value.adress.description, latLng };
            dispatch(reservationSlice.actions.setAdress(location));
            removeGoogleMapScript();
            router.push('/summary');
          }}
        >
          {({ isSubmitting, values, setFieldValue, errors }) => (
            <Form>
              <Autocomplete
                id="google-map-demo"
                style={{ width: 300 }}
                getOptionLabel={(option) =>
                  typeof option === 'string' ? option : option.description
                }
                filterOptions={(x) => x}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={state}
                onChange={(event, newValue) => {
                  dispatch(
                    reservationSlice.actions.setAdresDesc(newValue.description)
                  );
                  return setFieldValue('adress', newValue);
                }}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Add a location"
                    variant="outlined"
                  />
                )}
                renderOption={(option) => {
                  const matches =
                    option.structured_formatting.main_text_matched_substrings;
                  const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [
                      match.offset,
                      match.offset + match.length,
                    ])
                  );

                  return (
                    <Grid container alignItems="center">
                      <Grid item>
                        <LocationOnIcon className={classes.icon} />
                      </Grid>
                      <Grid item xs>
                        {parts.map((part, index) => (
                          <span
                            key={index}
                            style={{ fontWeight: part.highlight ? 700 : 400 }}
                          >
                            {part.text}
                          </span>
                        ))}

                        <Typography variant="body2" color="textSecondary">
                          {option.structured_formatting.secondary_text}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                }}
              />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
