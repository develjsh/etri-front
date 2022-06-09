import ProgressBar from "react-customizable-progressbar";

const Indicator = ({progress}) => {
  return (
      <div className="indicator-countdown">
        {progress < 1 ? "0" : progress}
      </div>
  )
}

const ProgressBarTag = ({percentCompleted}) => {
  return (
      <div className="countdown">
        <ProgressBar
            radius={100}
            progress={percentCompleted}
            strokeWidth={3}
            strokeColor="indianred"
            trackStrokeWidth={3}
            trackStrokeColor="#e6e6e6"
            pointerRadius={5}
            pointerFill="white"
            pointerStrokeWidth={2}
            pointerStrokeColor="indianred"
        >
          <Indicator progress={percentCompleted}/>
        </ProgressBar>
      </div>
  )
}

export default ProgressBarTag;