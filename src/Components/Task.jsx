import {useRef, useState} from "react";

export default function Task({content, onSaveTask, listTugas}) {
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

    // function handleSaveTask() {
    //     onSaveTask(isAddTask);
    // }

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
                    <input type="text" required ref={taskInputRef} />
                </form>
                <h2>Daftar Tugas</h2>
                <ul>
                    {daftarTugas.map((daftarTugas) => (
                        <li key={daftarTugas}>{daftarTugas}</li>
                    ))}
                </ul>
            </section>
        </>
    );
}