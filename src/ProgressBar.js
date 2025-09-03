const ProgressBar = (props) => {
  return (
    <>
      <div className="border border-black mx-2 rounded-lg">
        <div className="bg-green-800" style={{ width: `${props.progress}` }}>
          {props.progress}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
