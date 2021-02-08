import React, { useState} from 'react';

interface TodoFormProps {
    onAdd(title: string):void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)

    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field col s12 mt2">
            <input
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                type="text"
                value={title}
                id="title"
                placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    );
};

export default TodoForm;