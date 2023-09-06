import { useState } from 'react';
import css from "../styles/Create.module.css";

const Create = (props) => {

    const { tasks, setTasks } = props;
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const CreateTaskHandler = (e) => {
        e.preventDefault();
        const todo = {
            id: tasks.index,
            title,
            desc,
        }
        // const copyTask = [...tasks];
        // copyTask.push(todo);
        // setTasks(copyTask);
        setTasks([...tasks, todo]);
        setTitle("");
        setDesc("");
    }

    const style = {
        fontWeight: "100",
        color: "tomato",
        textAlign: "center",
    };

    return (
        <div>
            {props.children}
            {/* inline css  */}

            {/* <h1 style={{ fontWeight: "100", color: "tomato" }}>
                {props.children}
            </h1> */}

            {/* internal css */}
            {/* <h1 style={style}>{props.children}</h1> */}

            {/* external css */}
            {/* <h1 className={`${css.createH1} bg-dark`}>{props.children}</h1> */}

            <h1 className="mb-5 fs-2 fw-light">To-Do App</h1>
            <form onSubmit={CreateTaskHandler}>
                <input type="text" className="mb-3 w-50 form-control" placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />
                <input type="text" className="mb-3 w-50 form-control" placeholder='Description'
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc} />
                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    );

};

export default Create;