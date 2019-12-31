import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { changeAppBarTitle } from '../store/actions/stateActions';
import { setTeachersLoading } from '../store/actions/teacherActions';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const Teachers = () => {
  const classes = useStyles();

  const { teachers, isLoading } = useSelector(state => state.teacherReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAppBarTitle('Teachers'));
    // dispatch(setTeachersLoading());
  }, []);
  useEffect(() => console.log('[log]'));
  return (
    <div>
      <h1>Teachers</h1>
      {JSON.stringify(teachers)}
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>ID</TableCell>
              <TableCell align='left'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map(teacher => (
              <TableRow key={teacher.id}>
                <TableCell align='right' component='th' scope='row'>
                  {teacher.id}
                </TableCell>
                <TableCell>{teacher.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Teachers;
