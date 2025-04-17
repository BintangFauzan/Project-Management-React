import {useState} from "react";

export default function MainContent({cancel, onSaveProject}) {
    const [isAddProject, setIsAddProject] = useState({
        title: '',
        description: '',
        date: ''
    });

    function handleChangeProject(inputIdentifier,value) {
        setIsAddProject((inputValue) => {
            return {
                ...inputValue,
                [inputIdentifier]: value
            }
        })
    }

    function handleSaveProject() {
        onSaveProject(isAddProject)
    }

    let task = <section className='pt-14'>
        <li className='list-none text-right'>
            <button className='start-project-buttons bg-black' onClick={cancel}>Cancel</button>
            <button className='start-project-buttons  bg-green-900' onClick={handleSaveProject}>Save</button>
        </li>
        <form action="" id='project-title'>
            <label className='block'>Title</label>
            <input type="text" required onChange={(e) => handleChangeProject('title',e.target.value)}/>
            <label className='block'>Description</label>
            <input type="text" required onChange={(e) => handleChangeProject('description',e.target.value)}/>
            <label className='block'>Date</label>
            <input type="date" required onChange={(e) => handleChangeProject('date',e.target.value)}/>
        </form>
    </section>

    return (
        <>
            {task}
        </>
    )
}