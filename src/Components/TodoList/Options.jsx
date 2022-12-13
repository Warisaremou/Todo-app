function Options({ length, clearAllTodos }) {
  const handleClick = () => {
    clearAllTodos([]);
  };

  return (
    <div className="text-light-gray text-lg p-5 flex justify-between relative">
      {length > 1 ? <span>{`${length} items left`}</span> : <span>{`${length} item left`}</span>}
      <div className="main-options">
        <button className="text-active-option">All</button>
        <button className="px-5 options">Active</button>
        <button className="options">Completed</button>
      </div>
      <button className="options" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
}

export default Options;
