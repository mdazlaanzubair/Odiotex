const GradientText = ({ text }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-700">
      {text}
    </span>
  );
};

export default GradientText;
