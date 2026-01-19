function btn({ color, bgc, onClick }) {
  return (
    <button
    onClick={onClick}
      className="p-2 m-2 border-2 rounded-xl cursor-pointer"
      style={{ backgroundColor: bgc }}
    >
      {color}
    </button>
  );
}

export default btn;
