import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Box } from '@material-ui/core';

import { changeAppBarTitle } from '../store/actions/stateActions';
import {
  setTeachersLoading,
  getTeachers,
} from '../store/actions/teacherActions';
import StickyHeadTable from './Material-UI/StickyHeadTable';

const Teachers = () => {
  const { teachers, isLoading, isLoadingFailed } = useSelector(
    state => state.teacherReducer,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeAppBarTitle('Teachers'));
    dispatch(setTeachersLoading());
    dispatch(getTeachers());
  }, []);
  return (
    <Grid container alignContent='center' alignItems='center'>
      <Grid item xs={12}>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Fragment>
            {isLoadingFailed ? (
              <h1>Loading failed</h1>
            ) : (
              <StickyHeadTable
                rows={teachers}
                columns={[
                  { id: 'id', label: 'ID' },
                  { id: 'firstName', label: 'First Name' },
                  { id: 'lastName', label: 'Last Name' },
                  { id: 'email', label: 'Email' },
                ]}
              />
            )}
          </Fragment>
        )}

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
      </Grid>
    </Grid>
  );
};

export default Teachers;
