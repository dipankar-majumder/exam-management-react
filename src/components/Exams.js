import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GET_EXAMS, EXAMS_LOADING } from '../store/actions/types';
import { setExamsLoading, getExams } from '../store/actions/examActions';

import Exam from './Exam';
import { changeAppBarTitle } from '../store/actions/stateActions';

const Exams = () => {
  const dispatch = useDispatch();
  const { exams, isLoading } = useSelector(state => ({ ...state.examReducer }));

  useEffect(() => {
    dispatch(changeAppBarTitle('Exams'));
    dispatch(getExams());
  }, []);
  const [examName, setExamName] = useState('');
  return (
    <div className='Exams'>
      <div>Exams</div>
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
