import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import fileDownload from "js-file-download";
import React from "react";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    alignItems: "baseline",
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem",
    fontFamily: "Times New Roman",
    fontSize: 30,
  },
  headerStyle: {
    display: "flex",
    fontFamily: "Times New Roman",
    marginBottom: "2rem",
  },
  intro: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
      marginLeft: "3rem",
    },
  },
  projectsButton: {
    root: {
      borderRadius: "30px!important",
    },
  },
}));

export default function Intro() {
  const classes = useStyles();
  const handleDownloadResume = async () => {
    console.log("downloading");
    const resp = await axios({
      url: "http://127.0.0.1:5001/dev/resume",
      responseType: "blob",
      method: "GET",
    });
    console.log(resp.data);
    fileDownload(resp.data, "RyanS-Resume.pdf");
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
  };
  return (
    <div className={classes.intro}>
      <div>
        <div>
          <Typography>LICENSE #123456</Typography>
        </div>
        <Typography className={classes.headerStyle} variant="h2">
          Let Us Solve Your Roofing Problems
        </Typography>
      </div>
      <div>
        <div>
          <Typography className={classes.textStyle}>
            The best customer service in the business, no joke! Check it out by
            yourself right now.
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
  );
}
