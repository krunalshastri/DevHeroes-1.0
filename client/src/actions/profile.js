import axios from 'axios';
import { setAlert } from './alert';
import {
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
} from './types';

//get current profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/dev/profile');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data,
        status: err.response.status,
      },
    });
  }
};

//get all profiles
export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/dev/profile/all');
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data,
        status: err.response.status,
      },
    });
  }
};

//get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/dev/profile/user/${userId}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.data,
        status: err.response.status,
      },
    });
  }
};

//Edit or Create Profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const res = await axios.post('/dev/profile', formData);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? 'Profile Updated!' : 'Profile Created!', 'success')
      );

      if (!edit) history.push('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors.length > 0) {
        errors.forEach((element) => {
          dispatch(setAlert(element.msg, 'danger'));
        });
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.data,
          status: err.response.status,
        },
      });
    }
  };

//Delete account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure want to delete your account?')) {
    try {
      await axios.delete('/dev/profile');

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(
        setAlert('Your account has been successfully deleted!', 'success')
      );
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.data,
          status: err.response.status,
        },
      });
    }
  }
};
