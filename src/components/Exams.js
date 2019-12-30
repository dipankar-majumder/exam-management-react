import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

import { GET_EXAMS, EXAMS_LOADING, ADD_EXAM } from '../store/actions/types';
import { setExamsLoading, getExams } from '../store/actions/examActions';

import Exam from './Exam';

const Exams = () => {
  const dispatch = useDispatch();
  const { exams, isLoading } = useSelector(state => ({ ...state.examReducer }));

  useEffect(() => {
    dispatch(getExams());
  }, []);
  const [examName, setExamName] = useState('');
  return (
    <div className='Exams'>
      <div>Exams</div>
      <div>
        <input
          type='text'
          placeholder='Exam Name'
          value={examName}
          onChange={event => {
            event.preventDefault();
            setExamName(event.target.value);
          }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              dispatch({ type: ADD_EXAM, payload: { name: examName } });
              setExamName('');
            }
          }}
        />
        <input
          type='button'
          value='Add Exam'
          onClick={() => {
            dispatch({ type: ADD_EXAM, payload: { name: examName } });
            setExamName('');
          }}
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {exams.map(exam => {
            return <Exam key={exam.id} id={exam.id} name={exam.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Exams;
