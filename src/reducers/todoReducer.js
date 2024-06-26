import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE ,
     DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST,
     EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE} from '../reducers/actionTypes';

const initialState = {
    loading: false,
    data: [],
    error: ''
};

const todoReducer = (state = initialState, action) => {
  console.log(action, action.payload);
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload.todos,
                error: ''
            };
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            };
            case DELETE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.filter(product => product.id !== action.payload)
        };
      case DELETE_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case EDIT_PRODUCT_REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
        case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        data: state.data.map(product =>
          product.id === action.payload.id ? action.payload: product
        ),
        loading: false,

      };
      case EDIT_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case ADD_PRODUCT_REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
        case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,

        data: [...state.data, action.payload]
      };
      case ADD_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        default:
            return state;
    }
};

export default todoReducer;

