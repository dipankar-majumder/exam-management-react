import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import MaterialTable from 'material-table';

import { GET_EXAMS, EXAMS_LOADING } from '../store/actions/types';
import {
  setExamsLoading,
  getExams,
  setExamsLoadingFailed,
} from '../store/actions/examActions';

import Exam from './Exam';
import { changeAppBarTitle } from '../store/actions/stateActions';
import MaterialTableDemo from './material-table/MaterialTableDemo';

const Exams = () => {
  const dispatch = useDispatch();
  const { exams, isLoading, isLoadingFailed } = useSelector(
    state => state.examReducer,
  );

  useEffect(() => {
    dispatch(changeAppBarTitle('Exams'));
    dispatch(setExamsLoading());
    Axios.get('http://localhost:5000/exams')
      .then(res => {
        console.log(res.data);
        dispatch(getExams(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(setExamsLoadingFailed());
      });
  }, []);
  const [examName, setExamName] = useState('');
  return (
    <div className='Exams'>
      <MaterialTable
        title='Exams'
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Name', field: 'name' },
        ]}
        data={[...exams]}
      />
      <MaterialTableDemo />
      <div>Exams</div>
    </div>
  );
};

export default Exams;
