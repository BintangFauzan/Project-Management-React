import {useRef, useState} from "react";

export default function Task({content, onSaveTask, listTugas, onClearLastTask}) {
    const taskInputRef = useRef(null);
    const projectContent = content;
    const daftarTugas = listTugas;
    
    //Input task
    function handleChangeTask() {
        const newTask = taskInputRef.current.value.trim();
        if (newTask !== "") {
            onSaveTask(newTask); // Kirim ID proyek bersama tugas
            taskInputRef.current.value = "";
        }
    }

    function handleClearTask() {
        if (taskInputRef.current) {
            taskInputRef.current.value = "";
        }
    }

    return (
        <>
            <section id='task'>
                {projectContent.map((content) => (
                    <li key={content.title} className='list-none'>
                        <h2>{content.title}</h2>
                        <p className='pt-2'>{content.description}</p>
                        <p>{content.date}</p>
                    </li>
                ))}
                <form action="" className='pt-10'>
                    <button onClick={handleChangeTask}>Add Task</button>
                    <input type="text" required ref={taskInputRef} className='flex-grow mr-2'/>
                </form>
                <h2>Daftar Tugas</h2>
                <ul>
                    {daftarTugas.map((daftarTugas, index) => (
                        <li key={index} className='justify-between flex items-center'>
                            <span>{daftarTugas.task}</span>
                            <button  className='start-project-buttons bg-green-900' type='button' onClick={() => onClearLastTask(index)} >Clear</button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}