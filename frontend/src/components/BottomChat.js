import BottomNavigation from "@material-ui/core/BottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 1100,
    backgroundColor: " rgba(255,0,0,0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  chatIcon: {
    color: "white",

    fontSize: "2.5rem",
  },
  iconButton: {
    margin: "0 3.5rem 3.5rem 0",
    [theme.breakpoints.only("xs")]: {
      margin: "0 .5rem 3.5rem 0",
    },
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    height: "3.5rem",
    width: "3.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "0 3.5rem 2rem 0",
    minHeight: "65vh",

    minWidth: "35vh",
    borderRadius: "1.25rem",
    backgroundColor: theme.palette.grey.main,
    [theme.breakpoints.down("xs")]: {
      minHeight: "80vh",
      width: "100%",
      margin: 0,
    },
  },
  bottomMessageBox: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: " 0 0 1.1rem 1.1rem",
  },
  textField: {
    margin: ".5rem 1rem .5rem 1rem",
    padding: 0,
    backgroundColor: "white",
  },
  topBar: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: "1rem 0 1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1.1rem 1.1rem 0 0",
  },
  form: {
    margin: "1rem 1.5rem 0rem 2rem",
    display: "flex",
    padding: "1rem 0 2rem 0",
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: "1rem",
  },
  terms: {
    margin: "0 1rem 0 1rem",
    display: "flex",
    justifyContent: "center",
  },
  termsText: {
    fontSize: theme.typography.pxToRem(8),
    textAlign: "center",
  },
  send: {
    margin: "1rem 1.5rem 0rem 2rem",
  },
  messageInfo: {
    margin: "1rem 1.5rem 0rem 2rem",
    padding: "1rem",
    backgroundColor: theme.palette.primary.light,
    borderRadius: "1rem 1rem 1rem 0 ",
  },
}));
export default function BottomChat() {
  const classes = useStyles();
  const [showBox, setShowBox] = useState(false);
  const handleShowBox = () => void setShowBox(true);
  const handleHideBox = () => void setShowBox(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleText = async () => {
    const payload = { name, phoneNumber, message };
    await axios.post("http://127.0.0.1:5001/dev/text", payload);
    setName("");
    setPhoneNumber("");
    setMessage("");

    setShowSuccess(true);
    handleHideBox();
  };

  return (
    <div className={classes.bottomNavigation}>
      {showBox && (
        <ClickAwayListener onClickAway={handleHideBox}>
          <Box className={classes.messageContainer} boxShadow={6}>
            <div className={classes.topBar}>
              <ChatIcon />
              <Typography>We'll Text You</Typography>
            </div>
            <div>
              <div className={classes.messageInfo}>
                <Typography variant="p">
                  Enter your information below and
                  <br /> our team will text you shortly.
                </Typography>
              </div>
            </div>

            <Box className={classes.form} boxShadow={0.3}>
              <TextField
                value={name}
                label="Name"
                className={classes.textField}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                label="Mobile Phone"
                value={phoneNumber}
                className={classes.textField}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <TextField
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                label="Message"
                multiline
                rowsMax={5}
                className={classes.textField}
              />
            </Box>

            <div className={classes.bottomMessageBox}>
              <Typography className={classes.termsText}>
                By submitting you agree to receive <br />
                text messages at the number provided.
                <br />
                Consent is not a condition to receive
                <br /> goods/services. We may use automated <br />
                technology. Message/data rates apply.
              </Typography>

              <Button
                onClick={handleText}
                className={classes.send}
                color="primary"
                variant="contained"
                size="large"
              >
                Send
              </Button>
            </div>
          </Box>
        </ClickAwayListener>
      )}
      <Box className={classes.iconButton} onClick={handleShowBox} boxShadow={6}>
        <ChatIcon
          className={classes.chatIcon}
          classes={{ root: { padding: 0 } }}
        />
      </Box>
    </div>
  );
}
