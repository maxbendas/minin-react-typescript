import React from 'react';
import {ITodo} from "./interfaces";

interface TodoListProps {
    todos: ITodo[],
    onRemove: (id:number)=>void,
    onToggle: (id:number)=>void,
}

const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {

    if (todos.length===0){
        return <p className="center">Пока дел нет!</p>
    }

    const removeHandler = (event: React.MouseEvent, id:number)=>{
        event.preventDefault()
        onRemove(id)
    }


    return (
        <ul>
            {todos.map(todo=>{
                const classes = ['todo']
                if (todo.completed){
                    classes.push('completed')
                }
                return(
                    <li key={todo.id} className={classes.join(' ')} >
                        <label>
                            <input
                                onChange={()=>onToggle(todo.id)}
                                type="checkbox"
                                checked={todo.completed}/>
                            <span>{todo.title}</span>
                            <i onClick={(event)=>removeHandler(event, todo.id)}
                               className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    );
};

export default TodoList;