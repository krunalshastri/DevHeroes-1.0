import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/dev/profile');
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
      console.log(formData);

      const res = await axios.post(
        'http://localhost:5000/dev/profile',
        formData
      );

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? 'Profile updated!' : 'Profile Created!', 'success')
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
