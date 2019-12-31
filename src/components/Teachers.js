import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { changeAppBarTitle } from '../store/actions/stateActions';
import { setTeachersLoading } from '../store/actions/teacherActions';

import EnhancedTable from './EnhancedTable';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.paper,
    },
  },
}))(TableRow);

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
  const { teachers, isLoading } = useSelector(state => state.teacherReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAppBarTitle('Teachers'));
    // dispatch(setTeachersLoading());
  }, []);
  useEffect(() => console.log('[log]'));

  const classes = useStyles();
  return (
    <div>
      <EnhancedTable tableTitle='Teachers' teachers={teachers} />
      {/* <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='right'>ID</StyledTableCell>
                <StyledTableCell align='left'>Email</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map(teacher => (
                <StyledTableRow key={teacher.id}>
                  <StyledTableCell align='right' component='th' scope='row'>
                    {teacher.id}
                  </StyledTableCell>
                  <StyledTableCell>{teacher.email}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper> */}
    </div>
  );
};

export default Teachers;
