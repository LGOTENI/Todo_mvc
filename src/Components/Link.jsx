import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStore } from "laco-react";
import { TodoStore, setVisibilityFilter } from "./stores/store";

const Link = ({ children, filter }) => {
  const { visibilityFilter } = useStore(TodoStore);

  return (
    <a
      className={classNames({ selected: filter === visibilityFilter })}
      style={{ cursor: "pointer" }}
      onClick={() => setVisibilityFilter(filter)}
      href="!#"
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Link;
