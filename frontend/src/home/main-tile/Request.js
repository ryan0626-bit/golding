import { Button, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { React, useState } from 'react'

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
}))

export default function App() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [roof, setRoof] = useState('')

  const clear = () => {
    setName('')
    setEmail('')
    setPhoneNumber('')
    setRoof('')
  }

  const handleSubmit = () => {
    const payload = { name, email, phoneNumber, roof }
    clear()
  }

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
        placeholder={'Name...'}
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <TextField
        className={classes.textBox}
        variant="outlined"
        value={email}
        placeholder={'Email...'}
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <TextField
        className={classes.textBox}
        variant="outlined"
        value={phoneNumber}
        placeholder={'Phone Number...'}
        onChange={e => {
          setPhoneNumber(e.target.value)
        }}
      />

      <Select
        variant="outlined"
        className={classes.textBox}
        placeholder={'Im Interested In...'}
        onChange={e => setRoof(e.target.value)}
        value={roof}
      >
        <MenuItem value={'new'}>New Roof</MenuItem>
        <MenuItem value={'repair'}>Repair Roof</MenuItem>
      </Select>

      <Button color="primary" variant="contained" className={classes.submit} onClick={handleSubmit}>
        Submit Now!
      </Button>
    </div>
  )
}
