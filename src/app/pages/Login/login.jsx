import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { fAlertToast } from '../../Utility/Utilitys';
import 'react-toastify/dist/ReactToastify.css';
import { fExecuteAPI } from '../../Server/Apis1';
import { CmpTextField } from '../../component/ToolBox/ToolBox';
import './login.css';
import {
  DB_Logint_Set,
} from '../../DBSlice/SliceDB';
import {
  getBuyerAccess,
  getFpUserRights,
  getKernValue,
  getLogin,
  getPickLocation,
  getReturnRequestReviewLocation,
  getTruckLists
} from './action';

import { updateFilter } from '../../layout/slice';

const Login = () => {
  const dispatch = useDispatch();
  const [sLoginObj, setLoginObj] = useState({
    userName: '',
    Password: ''
  });

  let vErrorMsg = {
    userName: '',
    Password: ''
  };

  const [sErrorMsg, setErrorMsg] = useState({
    userName: '',
    Password: ''
  });
  const fValidation = () => {
    let iRes = true;
    if (sLoginObj.userName === '') {
      setErrorMsg((obj) => ({ ...obj, userName: 'userName is Empty' }));
      iRes = false;
    }
    if (sLoginObj.Password === '') {
      setErrorMsg((obj) => ({ ...obj, Password: 'Password is Empty' }));
      iRes = false;
    }
    return iRes;
  };

  const fLogin = async (event) => {
    setErrorMsg(vErrorMsg);
    if (fValidation()) {
      let result = await Getlogin();
      if(result?.status===200)
      dispatch(DB_Logint_Set( {
        userId: sLoginObj.userName,
        userName: sLoginObj.userName,
      }));

    }
  };

  //API GET_API_LOGIN
  const Getlogin = async () => {
    let loginObj = {
      username: sLoginObj.userName,
      password: sLoginObj.Password,
    };

    const vlogin = await getLogin(loginObj);
    return vlogin;
  };

  const fKeyTabLogin = (event, name) => {
    if (event.key === 'Enter') {
      if (name == 'Password') {
        document.getElementsByName(name)[0].focus();
      } else if (name == 'login') {
        fLogin();
      }
    }
  };
  return (
    <div className="login-form">
      <div>
        <ToastContainer />
      </div>
      <form className="login-form-bg p-5" autocomplete="off">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CmpTextField
                xLabelText={'UserName'}
                xVariant={'outlined'}
                xValue={sLoginObj.userName}
                xOnChange={(event) =>
                  setLoginObj((obj) => ({ ...obj, userName: event.target.value }))
                }
                xOnKeyUp={(e) => {
                  fKeyTabLogin(e, 'Password');
                }}
                xReadOnly={false}
                xType={'text'}
                xName={'UserName'}
                xError={sErrorMsg.userName === '' ? false : true}
                xErrorMessage={sErrorMsg.userName}
              />
            </Grid>
            <Grid item xs={12}>
              <CmpTextField
                xLabelText={'Password'}
                xVariant={'outlined'}
                xValue={sLoginObj.Password}
                xOnChange={(event) =>
                  setLoginObj((obj) => ({ ...obj, Password: event.target.value }))
                }
                xReadOnly={false}
                xOnKeyUp={(e) => {
                  fKeyTabLogin(e, 'login');
                }}
                xType={'password'}
                xName={'Password'}
                xError={sErrorMsg.Password === '' ? false : true}
                xErrorMessage={sErrorMsg.Password}
              />
            </Grid>
            <Grid item lg={12} md={12} xs={12} className="text-center">
              <Button
                onClick={(e) => fLogin(e)}
                variant="contained"
                className="btn-text-transform-none">
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default Login;
