import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import fileDownload from 'js-file-download'
import React from 'react'

const useStyles = makeStyles(theme => ({
  textStyle: {
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    fontFamily: 'Arial',
    color: 'white',
  },
  headerStyle: {
    display: 'flex',
    fontFamily: 'Arial',
    marginBottom: '1rem',
    color: 'white',
    fontWeight: 'bold',
  },
  root: {
    margin: '3rem',
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      marginLeft: '3rem',
    },
  },
  projectsButton: {
    root: {
      borderRadius: '30px!important',
    },
  },
}))

export default function Intro() {
  const classes = useStyles()
  const handleDownloadResume = async () => {
    console.log('downloading')
    const resp = await axios({
      url: 'http://127.0.0.1:5001/dev/resume',
      responseType: 'blob',
      method: 'GET',
    })
    console.log(resp.data)
    fileDownload(resp.data, 'RyanS-Resume.pdf')
    // var xhr = new XMLHttpRequest();

    // var blob = new Blob([resp.data], {
    //   // type: "application/pdf",
    // });
    // var objectUrl = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = objectUrl;
    // link.setAttribute("download", `RyanSulewski.pdf`);

    // document.body.appendChild(link);
    // link.click();
    // window.open(objectUrl);
  }
  return (
    <div className={classes.root}>
      <div>
        <div>
          <Typography>LICENSE #123456</Typography>
        </div>
        <Typography className={classes.headerStyle} variant="h3">
          Let Us Solve Your Roofing Problems
        </Typography>
      </div>
      <div>
        <div>
          <Typography className={classes.textStyle} variant="h5">
            The best customer service in the business, no joke! Check it out by yourself right now.
          </Typography>
        </div>
        <div>
          <Button
            size="large"
            classes={classes.projectsButton}
            variant="contained"
            color="primary"
            onClick={handleDownloadResume}
          >
            Call Us Now!
          </Button>
        </div>
      </div>
    </div>
  )
}
