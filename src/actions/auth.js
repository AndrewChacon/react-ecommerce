import { axios } from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT
} from './types';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/auth-user');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/create-user', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  const res = await axios.post('/auth-user', body, config);
  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  });
  try {
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
