function Tab({ label, isActive, onClick }) {
    return (
      <button
        className={`tab ${isActive ? 'tab--active' : 'tab--unselected'}`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  
  export default Tab;