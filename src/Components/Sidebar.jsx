export default function Sidebar({onClick, listContent, onProjectSelect}) {
    const projectListContent = listContent
    return (
        <>
            <div className="sidebar">
                <h3 className="sidebar-title">Your Project</h3>
                <button className="sidebar-link" onClick={onClick}>Add Project</button>
                {projectListContent.map((project) => (
                    <li key={project.title} onClick={() => onProjectSelect(project.title)} style={{ cursor: 'pointer' }}>
                        {project.title}
                    </li>
                ))}
            </div>
        </>
    )
}