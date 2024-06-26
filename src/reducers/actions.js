import axios from 'axios';
import {EDIT_PRODUCT_REQUEST,EDIT_PRODUCT_SUCCESS,EDIT_PRODUCT_FAILURE, FETCH_DATA_REQUEST,
     FETCH_DATA_SUCCESS, ADD_PRODUCT_REQUEST,ADD_PRODUCT_SUCCESS,ADD_PRODUCT_FAILURE,
     FETCH_DATA_FAILURE,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAILURE
     } from '../reducers/actionTypes';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const fetchData = () => {
  console.log('fetch');
    return (dispatch) => {
        dispatch(fetchDataRequest());
        axios.get('https://dummyjson.com/todos')
            .then(response => {
                const data = response.data;
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};
export const deleteProduct = (productId) => {
    console.log("deletion")
    return async (dispatch) => {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
      try {
        let deltedproduct = await axios.delete(`https://dummyjson.com/todos/${productId}`);
        console.log(deltedproduct);
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
      } catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
      }
    };
  };
  // export const editProduct = (productId, data) => {
  //   console.log("edited", data, typeof productId, productId)
  //   return async (dispatch) => {
  //     dispatch({ type: EDIT_PRODUCT_REQUEST });
  //     try {
  //       let editedproduct = await axios.put(`https://dummyjson.com/todos/${productId}`, data);
  //       console.log(editedproduct);
  //       dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: editProduct.data });
  //     } catch (error) {
  //       dispatch({ type: EDIT_PRODUCT_FAILURE, payload: error.message });
  //     }
  //   };
  // };
  export const editProduct = (id, updatedTodo) => async dispatch => {
    dispatch({ type: EDIT_PRODUCT_REQUEST });
    try {
      const response = await axios.put(`https://dummyjson.com/todos/${id}`, {updatedTodo});
     console.log(response, 'responce', updatedTodo);
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: updatedTodo });
    } catch (error) {
      dispatch({ type: EDIT_PRODUCT_FAILURE, payload: error.message });
    }
  };
  export const addProduct = (data) => {
    console.log(data);
    console.log("edited")
    return async (dispatch) => {
      dispatch({ type: ADD_PRODUCT_REQUEST });
      try {
        let newproduct = await axios.post(`https://dummyjson.com/todos/add`, data);
        console.log(newproduct);
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload:data });
      } catch (error) {
        dispatch({ type: ADD_PRODUCT_FAILURE, payload: error.message });
      }
    };
  };
  // export const editProduct = (id) => async dispatch => {
  //   const response = await fetch(`https://dummyjson.com/todos/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({completed: false}),
  //   });
    
  //   const product = await response.json();
  //   console.log(product);
    
  //   dispatch({ type: EDIT_PRODUCT, payload: product });
  // };