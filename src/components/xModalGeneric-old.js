import * as React from "react";
import { styled } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = ({ children, onClose, ...other }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalGeneric({
  openModal,
  openProMode,
  ruleName,
  rule,
  handleModal,
  handleProMode,
  handleDataSet,
}) {

  const properCase = (stringVal) => {
    return stringVal.slice(0, 1).toUpperCase() + stringVal.slice(1);
  };

  let ruleDialog = rule.map((element, index) => {
    if (element.constraint_parameter_boolean !== null) {
      return (
        <div key={index}>
          {openProMode ? (
            <div>
              <Divider />
              <Stack direction="row" spacing={1} alignItems="center">
                <FormControlLabel
                  label=""
                  sx={{ color: "blue", bgcolor: "orange" }}
                  control={
                    <div>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography sx={{ padding: "0px 0px 0px 20px" }}>
                          No
                        </Typography>
                        <Switch
                          checked={element.constraint_parameter_boolean}
                          name="constraint_parameter_boolean"
                          color="success"
                          onChange={(event) =>
                            handleDataSet(
                              index,
                              event.target.name,
                              event.target.checked
                            )
                          }
                        />
                        <Typography sx={{ padding: "0px 20px 0px 0px" }}>
                          Yes
                        </Typography>
                      </Stack>
                    </div>
                  }
                />
                <TextField
                  label="Default Rule"
                  multiline
                  fullWidth
                  defaultValue={element.constraint_name}
                  sx={{ color: "blue", bgcolor: "orange" }}
                  size="small"
                  name="constraint_name"
                  onChange={(event) =>
                    handleDataSet(index, event.target.name, event.target.value)
                  }
                />
              </Stack>
            </div>
          ) : (
            <div>
              <Divider />
              <FormControlLabel
                label={element.constraint_name}
                control={
                  <div>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography sx={{ padding: "0px 0px 0px 20px" }}>
                        No
                      </Typography>
                      <Switch
                        checked={element.user_input_boolean}
                        name="user_input_boolean"
                        color="success"
                        onChange={(event) =>
                          handleDataSet(
                            index,
                            event.target.name,
                            event.target.checked
                          )
                        }
                      />
                      <Typography sx={{ padding: "0px 20px 0px 0px" }}>
                        Yes
                      </Typography>
                    </Stack>
                  </div>
                }
              />
            </div>
          )}
        </div>
      );
    } else {
      if (
        element.constraint_name &&
        element.constraint_name.includes("distance")
      ) {
        return (
          <div key={index}>
            {openProMode ? (
              <div>
                <Divider />
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField
                    label="Default Rule"
                    multiline
                    fullWidth
                    defaultValue={element.constraint_name}
                    sx={{ color: "blue", bgcolor: "orange" }}
                    size="small"
                    name="constraint_name"
                    onChange={(event) =>
                      handleDataSet(
                        index,
                        event.target.name,
                        event.target.value
                      )
                    }
                  />
                  <TextField
                    label="Default Value"
                    multiline
                    fullWidth
                    defaultValue={element.constraint_parameter_integer}
                    sx={{ color: "blue", bgcolor: "orange" }}
                    size="small"
                    name="constraint_parameter_integer"
                    onChange={(event) =>
                      handleDataSet(
                        index,
                        event.target.name,
                        event.target.value
                      )
                    }
                  />
                </Stack>
              </div>
            ) : (
              <div>
                <Divider />
                <h3>{element.constraint_name}</h3>
                <TextField
                  label="Enter distance"
                  defaultValue={element.user_input_integer}
                  name="user_input_integer"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">nm</InputAdornment>
                    ),
                  }}
                  onChange={(event) =>
                    handleDataSet(index, event.target.name, event.target.value)
                  }
                />
              </div>
            )}
          </div>
        );
      } else if (
        element.constraint_name &&
        element.constraint_name.includes("time")
      ) {
        return (
          <div key={index}>
            {openProMode ? (
              <div>
                <Divider />
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField
                    label="Default Rule"
                    multiline
                    fullWidth
                    defaultValue={element.constraint_name}
                    sx={{ color: "blue", bgcolor: "orange" }}
                    size="small"
                    name="constraint_name"
                    onChange={(event) =>
                      handleDataSet(
                        index,
                        event.target.name,
                        event.target.value
                      )
                    }
                  />
                  <TextField
                    label="Default Value"
                    multiline
                    fullWidth
                    defaultValue={element.constraint_parameter_integer}
                    sx={{ color: "blue", bgcolor: "orange" }}
                    size="small"
                    name="constraint_parameter_integer"
                    onChange={(event) =>
                      handleDataSet(
                        index,
                        event.target.name,
                        event.target.value
                      )
                    }
                  />
                </Stack>
              </div>
            ) : (
              <div>
                <Divider />
                <h3>{element.constraint_name}</h3>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DateTimePicker
                      label="Date & Time"
                      value={+element.user_input_integer}
                      openTo="hours"
                      renderInput={(params) => <TextField {...params} />}
                      onChange={(event) =>
                        handleDataSet(
                          index,
                          "user_input_integer",
                          Date.parse(event)
                        )
                      }
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
            )}
          </div>
        );
      }
    }
  });

  return (
    <BootstrapDialog
      onClose={handleModal}
      aria-labelledby="customized-dialog-title"
      open={openModal}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleModal}
        sx={{ minWidth: 800 }}
      >
        {properCase(ruleName)} Rule
      </BootstrapDialogTitle>
      {ruleDialog}
      <br></br>
      <Button size="small" onClick={handleModal}>
        Submit
      </Button>
      <Typography align="right">
        <FormControlLabel
          label={"Edit Rule"}
          labelPlacement="top"
          control={
            <div>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography sx={{ padding: "0px 0px 0px 20px" }}>Locked</Typography>
                <Switch
                  name="pro_mode"
                  color="warning"
                  size="small"
                  onClick={handleProMode}
                />
                <Typography sx={{ padding: "0px 20px 0px 0px" }}>
                  Edit
                </Typography>
              </Stack>
            </div>
          }
        />
      </Typography>
    </BootstrapDialog>
  );
}
