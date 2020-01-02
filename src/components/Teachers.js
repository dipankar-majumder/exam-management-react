import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

import MaterialTable from 'material-table';
import {
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { Replay } from '@material-ui/icons';

import { changeAppBarTitle } from '../store/actions/stateActions';
import {
  setTeachersLoading,
  getTeachers,
  setTeachersLoadingFailed,
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
    Axios.get('http://localhost:5000/teachers')
      .then(res => {
        console.log(res.data);
        dispatch(getTeachers(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(setTeachersLoadingFailed());
      });
  }, []);
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      justifyItems='center'
      alignContent='center'
      alignItems='center'
    >
      {isLoading ? (
        <Fragment>
          <Box>
            <CircularProgress />
          </Box>
          <Box>
            <Typography variant='h5'>Loading</Typography>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          {isLoadingFailed ? (
            <Fragment>
              <Box>
                <Typography variant='h5'>Loading Failed</Typography>
              </Box>
              <Box>
                <Button variant='contained' color='primary'>
                  <Replay />
                  Reload
                </Button>
              </Box>
            </Fragment>
          ) : (
            <Box>
              {/* <StickyHeadTable
                rows={teachers}
                columns={[
                  { id: 'id', label: 'ID' },
                  { id: 'firstName', label: 'First Name' },
                  { id: 'lastName', label: 'Last Name' },
                  { id: 'email', label: 'Email' },
                  { id: 'phone', label: 'Phone' },
                ]}
              /> */}
              <MaterialTable
                title='Teachers'
                columns={[
                  { field: 'id', title: 'ID' },
                  { field: 'firstName', title: 'First Name' },
                  { field: 'lastName', title: 'Last Name' },
                  { field: 'email', title: 'Email' },
                  { field: 'phone', title: 'Phone' },
                ]}
                data={[...teachers]}
              />
            </Box>
          )}
        </Fragment>
      )}
    </Box>
    // <Grid container justify='center'>
    //   {!isLoading ? (
    //     <Grid item xs={1}>
    //       <h1>Loading</h1>
    //     </Grid>
    //   ) : (
    //     <Fragment>
    //       {isLoadingFailed ? (
    //         <Grid item xs={8}>
    //           <h1>Loading Failed</h1>
    //         </Grid>
    //       ) : (
    //         <Grid item xs={8}>
    //           <StickyHeadTable
    //             rows={teachers}
    //             columns={[
    //               { id: 'id', label: 'ID' },
    //               { id: 'firstName', label: 'First Name' },
    //               { id: 'lastName', label: 'Last Name' },
    //               { id: 'email', label: 'Email' },
    //               { id: 'phone', label: 'Phone' },
    //             ]}
    //           />
    //         </Grid>
    //       )}
    //     </Fragment>
    //   )}
    // </Grid>
  );
};

export default Teachers;
