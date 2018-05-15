import {FETCH_USER} from './type';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
   const res = await axios.get('/current_user');
   dispatch({
      type: FETCH_USER,
      payload: res.data
   });
}