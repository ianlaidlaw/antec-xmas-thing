import { useDispatch, useSelector } from 'react-redux';
import { selectPresent } from './actions';

const dispatch = useDispatch();

function presentSelectDispatch(state, present) {
  dispatch({
    type: selectPresent,
    payload: null,
  });
}