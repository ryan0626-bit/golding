import { Button, Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { React, useState } from 'react';
import { sendRequest } from '../../api';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '3rem',
    },
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    flexGrow: 1,
    justifyContent: 'space-around',
    border: `1px ${theme.palette.grey.main} solid`,
    borderRadius: '3rem',
    margin: '2rem',
    backgroundColor: 'white',
    [theme.breakpoints.only('sm')]: {
      marginLeft: '6rem',
      marginRight: '6rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  textBox: {
    margin: '1rem',
  },
  estimate: {
    display: 'flex',
    margin: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  submit: {},
}));

export default function App() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [roof, setRoof] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [roofError, setRoofError] = useState(false);

  const clear = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setRoof('');
  };
  const validateForm = () => {
    let isValid = true;
    if (name === '') {
      setNameError(true);
      isValid = false;
    }
    if (phoneNumber === '' || phoneNumber <= 9) {
      setPhoneNumberError(true);
      isValid = false;
    }
    if (email === '') {
      setEmailError(true);
      isValid = false;
    }
    if (roof === '') {
      setRoofError(true);
      isValid = false;
    }
    return isValid;
  };
  const handleSubmit = async () => {
    if (validateForm()) {
      const payload = { name, email, phoneNumber, roofType: roof };
      await sendRequest(payload);
      clear();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.estimate}>
        <Typography variant="h4">Get An Estimate</Typography>
        <div>
          <Typography>Need to know how much your cost?</Typography>
        </div>
      </div>
      <TextField
        className={classes.textBox}
        variant="outlined"
        value={name}
        error={nameError}
        helperText={nameError ? 'Name Is Required' : ''}
        placeholder={'Name...'}
        onChange={e => {
          setName(e.target.value);
          setNameError(false);
        }}
      />
      <TextField
        className={classes.textBox}
        variant="outlined"
        value={email}
        placeholder={'Email...'}
        helperText={emailError ? 'Email Is Required' : ''}
        error={emailError}
        onChange={e => {
          setEmail(e.target.value);
          setEmailError(false);
        }}
      />
      <TextField
        className={classes.textBox}
        variant="outlined"
        error={phoneNumberError}
        helperText={phoneNumberError ? 'Phone Number Is Required' : ''}
        value={phoneNumber}
        placeholder={'Phone Number...'}
        onChange={e => {
          setPhoneNumber(e.target.value);
          setPhoneNumberError(false);
        }}
      />

      <Select
        variant="outlined"
        className={classes.textBox}
        error={roofError}
        helperText={roofError ? 'Select An Option' : ''}
        placeholder={'Im Interested In...'}
        value={roof}
        onChange={e => {
          setRoof(e.target.value);
          setRoofError(false);
        }}
      >
        <MenuItem value={'new'}>New Roof</MenuItem>
        <MenuItem value={'repair'}>Repair Roof</MenuItem>
      </Select>

      <Button color="primary" variant="contained" className={classes.submit} onClick={handleSubmit}>
        Submit Now!
      </Button>
    </div>
  );
}
