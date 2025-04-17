import Task from './Task.jsx';

export default function DaftarTugas({content, contentTask}) {
    const projectContent = content
    const taskContent = contentTask
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
                {taskContent.map((task) =>(
                    <li key={task.daftarTugas}>
                        <h2>{task.daftarTugas}</h2>
                    </li>
                ))}
                <Task/>
            </section>
        </>
    )
}