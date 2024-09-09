import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const todoCount = useSelector(state => state.todos.length);

  return (
    <footer>
      <p>Total TODOs: {todoCount}</p>
    </footer>
  );
};

export default Footer;
