import axios from 'axios';

export const fetchGreeting = () => async dispatch => {
  const response = await axios.get('/api/random_greeting');
  dispatch({ type: 'FETCH_GREETING', payload: response.data });
};
