const ProgressBar = (props) => {
  return (
    <>
      <div className="mx-2 my-2 h-8 rounded-lg bg-gray-200 shadow-inner overflow-hidden">
        <div
          className="h-full rounded-lg border border-gray-300 relative"
          style={{
            width: `${props.progress}%`,
            backgroundColor: "#34D399",
            color: props.progress > 5 ? "white" : "black",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 10px, transparent 10px, transparent 20px)",
            transition: "width 1s ease-in-out",
          }}
        >
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white select-none">
            {props.progress}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
