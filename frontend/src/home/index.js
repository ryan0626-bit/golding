import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { React, useState } from "react";
import Icons from "./Icons";
import Intro from "./Intro";
import MenuItem from "@material-ui/core/MenuItem";
import Skills from "./Skills";
import FormControl from "@material-ui/core/FormControl";
import { Button, Typography } from "@material-ui/core";
import HomeRoof from "../images/HomeRoof.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  contactBox: {
    [theme.breakpoints.up("sm")]: {
      marginRight: "3rem",
    },
    display: "flex",
    flexDirection: "column",
    padding: "50px",
    justifyContent: "space-around",
    border: `1px ${theme.palette.grey.main} solid`,
    borderRadius: "3rem",
    margin: "2rem",
    backgroundColor: "white",
  },
  icons: {
  
    backgroundColor: theme.palette.primary.main,
  },
  textBox: {
    margin: "1rem",
  },
  estimate: {
    display: "flex",
    margin: "2rem",
    flexDirection: "column",
    paddingBottom: "",
  },
  background: {
    backgroundImage: `url(${HomeRoof})`,
    backgroundSize: "cover",
  },
}));

export default function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roof, setRoof] = useState("");

  const clear = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setRoof("");
  };

  const handleSubmit = () => {
    const payload = { name, email, phoneNumber, roof };
    clear();
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid container item xs={12} className={classes.background}>
          <Grid item xs={12} md={6}>
            <Intro />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.contactBox}>
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
                placeholder={"Name..."}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                className={classes.textBox}
                variant="outlined"
                value={email}
                placeholder={"Email..."}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                className={classes.textBox}
                variant="outlined"
                value={phoneNumber}
                placeholder={"Phone Number..."}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <FormControl variant="outlined">
                <Select
                  className={classes.textBox}
                  placeholder={"Im Interested In..."}
                  onChange={(e) => setRoof(e.target.value)}
                  value={roof}
                >
                  <MenuItem value={"new"}>New Roof</MenuItem>
                  <MenuItem value={"repair"}>Repair Roof</MenuItem>
                </Select>
              </FormControl>
              <Button onClick={handleSubmit}>Submit Now!</Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.icons}>
          <Icons />
        </Grid>

        <Grid item xs={12}></Grid>

        <Grid item xs={12}>
          <Skills />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}></Grid>
      </Grid>
    </div>
  );
}
