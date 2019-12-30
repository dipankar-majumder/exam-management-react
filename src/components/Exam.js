import React from 'react';
import PropTypes from 'prop-types';

const Exam = props => {
  return <div>{props.name}</div>;
};

Exam.propTypes = { id: PropTypes.number, name: PropTypes.string };

export default Exam;
