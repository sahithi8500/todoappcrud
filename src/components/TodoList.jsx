import React, { useState } from 'react';
import { deleteProduct , editProduct} from '../reducers/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography';


function TodoList(props) {
  const dispatch = useDispatch();
  const [edit, setEdit] =useState(false)
  console.log(props.data);
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));

  };

  return (
    <>
    <div>
        {
            props.data && props.data.map((todoitem) => {
                return (
                    <div className='d-flex'>
                      <div>
                       <Typography variant="div" style={{fontFamily: "sans-serif'", padding:"5px"}} component="div">
                       {todoitem.todo}
                   </Typography>
                   </div>
                {/* <div>{todoitem.todo}</div> */}
                <button className="btn btn-primary m-1"  onClick={() =>props.editProduct(todoitem)}>Edit</button>
                <button className="btn btn-danger m-1" onClick={() => handleDelete(todoitem.id)}>Delete</button>
                </div>
            )
            })
        }
    </div>
    </>
  )
}

export default connect((store)=> store)(TodoList)
