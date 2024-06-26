import React, { useState , useEffect} from 'react'
import './todo.css';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import { fetchData, editProduct, addProduct } from '../reducers/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Todo(props) {
    console.log(props);
    const dispatch = useDispatch();
    const dataState = useSelector(state => state.todoReducer);
    console.log(dataState);
    const [edit, setEdit] = useState(false);
    const [intialState, setInitialstate]= useState({todo:'', completed:'', userId: ''})
    useEffect(() => {
        dispatch(fetchData());
    }, [ dispatch]);

    if (dataState.loading) {
        return <h2>Loading...</h2>;
    }

    if (dataState.error) {
        return <h2>{dataState.error}</h2>;
    }
   
     function addproduct(intialState) {

        let data= {
            completed: false,
            todo:intialState.todo,
            userId:74,
        }
        console.log(intialState);
            console.log('editblock');
            dispatch(addProduct(data));
            setInitialstate({todo:'', completed:'', userId: ''})
    }
    function submiteditedProduct(intialState) {
        setEdit(false);
        setInitialstate({todo:'', completed:'', userId: ''})
        console.log(intialState);
            console.log('addporduct');
            dispatch(editProduct(intialState.id , (intialState)));
    }
 
 const editProduct1= (todo)=>{
    console.log(todo);
   setInitialstate(todo)
   setEdit(true)

 }

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h4" style={{width: "100%", alignItems: "center", padding:"10px"}} align="center"color="inherit" component="div">
            Todolist Application with CRUD Operations
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        <div class="search"> 
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="addTodo" 
      name='todo' 
      value={intialState.todo} 
      onChange={(e)=> setInitialstate({...intialState, [e.target.name]:e.target.value})}
      variant="outlined"
      color="secondary" focused />
    </Box>
        {/* <input type='text' name='todo' value={intialState.todo} onChange={(e)=> setInitialstate({...intialState, [e.target.name]:e.target.value})}/> */}
       {edit && <button className="btn btn-success" onClick={()=> submiteditedProduct(intialState)}>submit edited Product</button>
}
       {!edit &&<button className="btn btn-success"  onClick={()=> addproduct(intialState)}>Add product</button>
}
</div>
       <TodoList data={dataState.data} editProduct= {editProduct1} />
    </div>
  )
}


export default Todo