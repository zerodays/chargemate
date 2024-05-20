import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";

const baudrates = [
  300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 74880, 115200, 230400,
  250000, 500000, 921600, 1000000, 2000000,
];

const lineEndings = ["None", "\\n", "\\r", "\\r\\n"];

const formElementCSS = {
  marginTop: 1,
  minWidth: "10em",
};

const Settings = (props) => {
  const [baudRate, setBaudRate] = React.useState(props.settings.baudRate);
  const [lineEnding, setLineEnding] = React.useState(props.settings.lineEnding);
  const [echoFlag, setEchoFlag] = React.useState(props.settings.echoFlag);
  const [timeFlag, setTimeFlag] = React.useState(props.settings.timeFlag);
  const [ctrlFlag, setCtrlFlag] = React.useState(props.settings.ctrlFlag);

  const cancel = () => {
    setBaudRate(props.settings.baudRate);
    setLineEnding(props.settings.lineEnding);
    setEchoFlag(props.settings.echoFlag);
    setTimeFlag(props.settings.timeFlag);
    setCtrlFlag(props.settings.ctrlFlag);

    props.close();
  };

  const reset = () => {
    if (!props.openPort) setBaudRate(115200);
    setLineEnding("\\r\\n");
    setEchoFlag(true);
    setTimeFlag(false);
    setCtrlFlag(true);
  };

  const save = () => {
    props.save({
      baudRate: baudRate,
      lineEnding: lineEnding,
      echoFlag: echoFlag,
      timeFlag: timeFlag,
      ctrlFlag: ctrlFlag,
    });

    props.close();

    props.saveToast();
  };

  return (
    <Dialog open={props.open} onClose={props.close}>
      <div style={{ padding: "24px" }}>
        <DialogTitle style={{ fontFamily: "Poppins, sans-serif" }}>
          Settings
        </DialogTitle>

        <DialogContent>
          <DialogContentText style={{ fontFamily: "Poppins, sans-serif" }}>
            Serial Connection
          </DialogContentText>

          <FormControl variant="filled" fullWidth sx={formElementCSS}>
            <InputLabel style={{ fontFamily: "Poppins, sans-serif" }}>
              Baud Rate {props.openPort && "(Requires Reconnect)"}
            </InputLabel>
            <Select
              style={{ fontFamily: "Poppins, sans-serif" }}
              value={baudRate}
              onChange={(e) => setBaudRate(e.target.value)}
              label="baudrate"
              disabled={props.openPort}
            >
              {baudrates.map((baud) => (
                <MenuItem
                  value={baud}
                  key={baud}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {baud} baud
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="filled" fullWidth sx={formElementCSS}>
            <InputLabel style={{ fontFamily: "Poppins, sans-serif" }}>
              Line Ending
            </InputLabel>
            <Select
              style={{ fontFamily: "Poppins, sans-serif" }}
              value={lineEnding}
              onChange={(e) => setLineEnding(e.target.value)}
              label="Line Ending"
            >
              {lineEndings.map((name) => (
                <MenuItem
                  value={name}
                  key={name}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={echoFlag}
                  onChange={(e) => setEchoFlag(e.target.checked)}
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: "#97D700",
                    },
                  }}
                />
              }
              label="Show input (echo)"
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={timeFlag}
                  onChange={(e) => setTimeFlag(e.target.checked)}
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: "#97D700",
                    },
                  }}
                />
              }
              label="Show timestamps"
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ctrlFlag}
                  onChange={(e) => setCtrlFlag(e.target.checked)}
                  sx={{
                    [`&, &.${checkboxClasses.checked}`]: {
                      color: "#97D700",
                    },
                  }}
                />
              }
              label="Detect CTRL+C, CTRL+D"
            />
          </FormGroup>
        </DialogContent>

        <DialogActions>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "0.5em",
            }}
          >
            <Button
              onClick={save}
              style={{
                flexGrow: 1,
                background: "#97D700",
                color: "white",
                fontSize: "1rem",
                textTransform: "none",
                padding: "0.5em 0",
              }}
            >
              Save Changes
            </Button>
            <Button
              onClick={cancel}
              style={{
                background: "#FAFAFA",
                color: "black",
                fontSize: "1rem",
                textTransform: "none",
                padding: "0.5em 1em",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={reset}
              style={{
                background: "transparent",
                color: "red",
                fontSize: "1rem",
                textTransform: "none",
                padding: "0.5em 1em",
              }}
            >
              Reset
            </Button>
          </div>
        </DialogActions>
      </div>
    </Dialog>
  );
};

Settings.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  settings: PropTypes.object,
  save: PropTypes.func,
  openPort: PropTypes.bool,
  saveToast: PropTypes.func,
};

export default Settings;
