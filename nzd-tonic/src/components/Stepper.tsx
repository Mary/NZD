import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles
} from "@material-ui/core/styles";
import { styled } from '@material-ui/core'
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from '@material-ui/icons/Done';
import MoodIcon from '@material-ui/icons/Mood';
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { StepIconProps } from "@material-ui/core/StepIcon";


const InstructionsText= styled(Typography)({
  fontFamily: 'Roboto Mono', 
  fontSize: '12px'
})

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 15
  },
  active: {
    "& $line": {
      backgroundImage:
      "linear-gradient( 136deg, rgb(52, 235, 140) 0%, rgb(52, 235, 229) 50%, rgb(52, 165, 235) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage:
      "linear-gradient( 136deg, rgb(52, 235, 140) 0%, rgb(52, 235, 229) 50%, rgb(52, 165, 235) 100%)"
    }
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(52, 235, 140) 0%, rgb(52, 235, 229) 50%, rgb(52, 165, 235) 100%)"
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(52, 235, 140) 0%, rgb(52, 235, 229) 50%, rgb(52, 165, 235) 100%)"
  }
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <AddIcon />,
    2: <DoneIcon />,
    3: <MoodIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

function getSteps() {
  return ["Add", "Complete", "Celebrate"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return "Add A Task To Your To Do List";
    case 1:
      return "Complete Your Task";
    case 2:
      return "Celebrate! You Got One Thing Done Today!";
    default:
      return "Unknown step";
  }
}

export default function CustomizedStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <InstructionsText>How Does It Work?</InstructionsText>

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <InstructionsText className={classes.instructions}>
              Get Started Below
            </InstructionsText>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <InstructionsText className={classes.instructions}>
              {getStepContent(activeStep)}
            </InstructionsText>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="outlined"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
