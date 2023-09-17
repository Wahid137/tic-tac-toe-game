import "../App.css";

const square = ({ value, clickBtn, index }) => {
  return (
    <>
      <button onClick={() => clickBtn(index)}>{value}</button>
    </>
  );
};

export default square;
