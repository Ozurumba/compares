import React, {  } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Paper, Grid } from "@material-ui/core";
import Draggable from "react-draggable";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DialogDisplay(props) {

  const { isOpen } = props.modalContent;
  const { isMatch, matchText } = props.modalContent.result;

  const handleClose = () => {
    props.onCancel();
  };

  // console.log("open", [open, isOpen]);

  return (
    <div>
      <Dialog
        open={isOpen}
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move", padding: "0px" }}
          id="draggable-dialog-title"
        >
          <p
            style={{
              textAlign: "center",
              padding: "10px",
              backgroundColor: "rgb(3, 67, 95)",
              color: "#fff",
              marginTop: "-5px"
            }}
          >
            {" "}
            Comparism Result{" "}
            
          </p>
          <span style={{ display: "inline-block", marginLeft: "5px" }}>
            {/* {Title} */}
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container alignItems="center" justify="center">
              <Grid item>
              { isMatch ? (<CancelIcon color="secondary" style={{fontSize: 100}} />) : 
                (<CheckCircleIcon style={{ color: 'green', fontSize: 100 }} />) }
                
              </Grid>
              <Grid item>
                The assignments do not match
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}