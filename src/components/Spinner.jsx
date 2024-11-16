import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block", // This can stay the same
  margin: "100px auto", // Center horizontally
};

const Spinner = ({ loading }) => {
  return (
      <ClipLoader
        color="hsl(209, 23%, 22%)"
        loading={loading}
        cssOverride={override}
        size={150}
      />
  );
};



export default Spinner;
