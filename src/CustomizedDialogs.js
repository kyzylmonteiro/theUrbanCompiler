import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ top: "10px", left: "10px", position: "fixed" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        INFO
      </Button>
      <Dialog
        fullScreen="true"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Walkthrough (of demo platform)
        </DialogTitle>
        <DialogContent style={{ textAlign: "center" }} dividers>
          <h2 style={{ paddingTop: "50px" }}>Description</h2>
          <p style={{ margin: "0 auto", textAlign: "center", width: "500px" }}>
            Slangs are a huge part of communication today, but computers fail to
            understand slang. The Code Slang library is a step towards bridging
            this gap. Slang since forever has been designed by the people, as it
            is evident in the urban dictionary. This platform enables people to
            contribute to the library, continuing with Sharon De La Cruz's idea
            of crowdsourcing the library. Users will be able to contribute by
            adding a function or appreciating an existing function definition in
            the library. This approach while being a step towards the computer
            understanding slangs, will also ensure the creation of a library
            that is up to date, which is necessary as slangs are always
            evolving.It would also safeguard the library from the pitfalls of
            slangs having different meanings in different contexts.
          </p>
          <h2 style={{ paddingTop: "100px" }}>User Flow</h2>
          <img
            height="500"
            alt="user flow of the platform"
            src={require("./userflow.png")}
          />
          <h2 style={{ paddingTop: "100px" }}>Wireframe</h2>
          <img
            height="500"
            alt="wireframe of the platform"
            src={require("./wireframe.png")}
          />
          <h2 style={{ paddingTop: "100px" }}>Inspiration</h2>
          <h4>Project</h4>
          <a href="https://github.com/xujenna/codeslang">Code Slang</a>
          <h4>Video</h4>
          <iframe
            title="youtube video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CFT6w9NKfCs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h2 style={{ paddingTop: "100px" }}>My Code Repository</h2>
          You can find the code at:
          <a href="https://github.com/kyzylmonteiro/theUrbanCompiler">
            https://github.com/kyzylmonteiro/theUrbanCompiler
          </a>
        </DialogContent>
        <DialogActions style={{ position: "static", bottom: "10px" }}>
          <Button
            autoFocus
            variant="contained"
            onClick={handleClose}
            color="primary"
          >
            Back To the Platform
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
