import { REQUEST_API, GET_PICTURE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
  defaultImg: true,
};

function gallery(state = INITIAL_STATE, {type, data}) {
  switch (type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
      defaultImg: true,
    };
  case GET_PICTURE:
    return {
      ...state,
      isLoading: false,
      imgURL: data,
      defaultImg: false,
    };
  default:
    return state;
  }
}

export default gallery;
