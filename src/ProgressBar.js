const ProgressBar = (props) => {
  return (
    <>
      <div className=" mx-2 ">
        <div
          className="bg-green-800 mb-1 border border-black rounded-lg text-white text-center"
          style={{ width: `${props.progress}%` }}
        >
          {props.progress}%
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
