import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux-toolkit/todo/todoSlice'

const TodoAdd = () => {
    const dipatch = useDispatch();
    const [todo, setTodo] = useState('');
    const onAddBtnClick = () => {
        if(!todo) return;
        
        dipatch(addTodo(todo));
        setTodo('');
    };

    return (
        <div>
            <input type='text' 
                placeholder='Start typing...'
                value={todo}
                onChange={e => setTodo(e.target.value)}/>
            <button onClick={onAddBtnClick}>Add Todo</button>
        </div>
    )
}

export default TodoAdd;