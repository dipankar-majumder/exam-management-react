import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeAppBarTitle } from '../store/actions/stateActions';

const Teachers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAppBarTitle('Teachers'));
  }, []);
  return (
    <div>
      <h1>Teachers</h1>
    </div>
  );
};

export default Teachers;
