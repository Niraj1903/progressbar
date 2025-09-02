const ProgressBar = (props) => {
  return (
    <>
      <div className="outer">
        <div className="inner">
          <h1>{props.progress}</h1>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
