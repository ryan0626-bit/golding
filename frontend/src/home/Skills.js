import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import roof from '../images/roof.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  poppyIntro: {
    display: 'flex',
    flexDirection: 'column',
  },

  quoteText: {
    fontSize: 30,
    textAlign: 'center',
  },
  icon: {
    marginTop: '1rem',
  },
  personText: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  leftDiscription: {
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    maxHeight: '40rem',
    marginRight: '1.5rem',
    fontSize: 25,
    display: 'flex',
    alignItems: 'center',
    flexBasis: '40%',
    // borderTop: `8px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      margin: '1rem 0 1rem 0',
    },
  },
  rightDiscription: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: '1.5rem',
    flexBasis: '40%',
    fontSize: 25,
    borderTop: `8px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      margin: '1rem 0 1rem 0',
    },
  },
  skills: {
    margin: '3rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
  body: {
    margin: '1rem',
  },
  body2: {
    margin: '1rem',
  },
  pic2: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '3rem',
    },
    width: '100%',
  },

  viewButton: {},
}));

export default function Skill() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.skills}>
        <div className={classes.leftDiscription}>
          <img src={roof} className={classes.pic2} alt="roof" />
        </div>
        <Paper elevation={5} className={classes.rightDiscription}>
          <Typography>
            <Typography variant="h4">
              <div className={classes.header}>Why People Choose Us?</div>
            </Typography>
            <div className={classes.body}>
              Golding provide superior services and protection for your home or business at an
              affordable price through quality workmanship, long-lasting materials, and exceptional
              customer service.
            </div>

            <div className={classes.body2}>
              Whether your roof needs repair, maintenance services, or replacement, our roofing
              professionals have the knowledge and expertise to complete the job in a timely manner
              and to your satisfaction.
            </div>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
