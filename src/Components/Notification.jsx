export default function Notification({message}) {
    return (
        <>
            <aside className='notification'>
                <p>{message}</p>
            </aside>
        </>
    )
}