import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import MaterialTable from 'material-table';

import {
  setExamsLoading,
  getExams,
  setExamsLoadingFailed,
  addExam,
  updateExam,
  deleteExam,
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
    axios
      .get('http://localhost:5000/exams')
      .then(res => {
        console.log(res.data);
        dispatch(getExams(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(setExamsLoadingFailed());
      });
  }, []);
  return (
    <div className='Exams'>
      <MaterialTable
        title='Exams'
        columns={[
          // { title: 'ID', field: 'id' },
          { title: 'Name', field: 'name' },
        ]}
        data={[...exams]}
        editable={{
          onRowAdd: newData => {
            console.log('[onRowAdd(newData)] -> ', newData);
            return axios
              .post('http://localhost:5000/exams', { ...newData })
              .then(res => dispatch(addExam(res.data)))
              .catch(err => console.log(err));
          },
          onRowUpdate: (newData, oldData) => {
            console.log(
              '[onRowUpdate(newData, oldData)] -> ',
              newData,
              oldData,
            );
            return axios
              .patch(`http://localhost:5000/exams/${oldData.id}`, {
                ...newData,
              })
              .then(res => dispatch(updateExam(res.data)))
              .catch();
            return new Promise((resolve, reject) => {
              resolve();
            });
          },
          onRowDelete: oldData => {
            console.log('[onRowDelete(oldData)] -> ', oldData);
            return axios
              .delete(`http://localhost:5000/exams/${oldData.id}`)
              .then(res => dispatch(deleteExam(oldData.id)))
              .catch(err => console.log(err));
          },
        }}
      />
      {/* <div>Exams</div> */}
    </div>
  );
};

export default Exams;
