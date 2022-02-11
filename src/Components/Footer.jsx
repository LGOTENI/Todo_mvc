import React from "react";
import PropTypes from "prop-types";
import Filter from "./Link";

const filterFooter = ["Tout", "Active", "Completer"];

const Footer = (props) => {
  const { activeCount, completedCount, onClearCompleted } = props;
  const itemWord = activeCount === 1 ? "item" : "items";
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || "Pas"}</strong> {itemWord} à gauche
      </span>
      <ul className="filters">
        {filterFooter.map((filter) => (
          <li key={filter}>
            <Filter filter={filter}>{filter}</Filter>
          </li>
        ))}
      </ul>
      {!!completedCount && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Tout effacer
        </button>
      )}
    </footer>
  );
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
