export default function Sidebar({onClick, listContent}) {
    const projectListContent = listContent
    return (
        <>
            <div className="sidebar">
                <h3 className="sidebar-title">Your Project</h3>
                <button className="sidebar-link" onClick={onClick}>Add Project</button>
                {projectListContent.map((project, index) => (
                    <button key={index}>{project.title}</button>
                ))}
            </div>
        </>
    )
}