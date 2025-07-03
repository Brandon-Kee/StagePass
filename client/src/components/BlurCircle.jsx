const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
    return (
      <div
        className="absolute z-0 w-60 aspect-square rounded-full bg-white/30 blur-3xl"
        style={{ top, left, right, bottom }}
      ></div>
    );
  };
  
  export default BlurCircle;
  