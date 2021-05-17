import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

//Register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:5000/dev/users', {
        name,
        email,
        password,
      });
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors.length > 0) {
        errors.forEach((element) => {
          dispatch(setAlert(element.msg, 'danger'));
        });
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };