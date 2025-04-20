import MainContent from "./Components/MainContent.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Task from "./components/Task.jsx"
import DaftarTugas from "./components/DaftarTugas.jsx";
import Notification from "./Components/Notification.jsx";
import {useState} from "react";

function App() {
    const [addProjectVisible, setAddProjectVisible] = useState(false);
    const [isAddProject, setIsAddProject] = useState([]);
    const [isAddTask, setIsAddTask] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [notification, setNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState(null);

    //Masih perlu perbaikan
    function handleCancelProject(){
        setAddProjectVisible(true);
    }

    function handleSaveProject(newProjectData){
        // let notification = <Notification message={"Data proyek sudah ada"}/>
      if (!newProjectData.title || !newProjectData.description || !newProjectData.date){
          setNotificationMessage("harap isi semua data")
          setNotification(true);
          setTimeout(() =>{setNotification(false);}, 3000);
          console.log('Harap Isi Semua Data');
          return; //Untuk menghentikan fungsi
      }
      const isDuplicateTitle =  isAddProject.some((project) => project.title === newProjectData.title);
      if (isDuplicateTitle){
          console.log("Duplicate Title ", newProjectData.title);
          // alert('Judul proyek sudah ada. Harap gunakan judul yang berbeda.');
          setNotificationMessage("Duplicate Title");
          setNotification(true)
          setTimeout(()=>{setNotification(false)},3000);
      }else {
          setIsAddProject((preData) => [...preData,{...newProjectData , id: newProjectData.title}]);
          console.log("Data proyek", newProjectData);
          setAddProjectVisible(false);
          setSelectedProjectId(newProjectData.title);
      }
    }

    function handleSaveTask(newTaskData) {
        if (selectedProjectId) {
            setIsAddTask((prevTask) => [...prevTask,{task: newTaskData , projectId: selectedProjectId}]);
            console.log("Data task untuk proyek", selectedProjectId, "Berupa:" , newTaskData);
        } else{
            console.log("Tidak Ada Proyek Yang dipilih")
        }
    }

    function handleClearLastTask(taskRemove) {
        setIsAddTask((prevTasks) => {
            const newTasks = prevTasks.filter((_, index) => index !== taskRemove);
            return newTasks;
        });
    }

    function handleSelectedProjectList(selectedList){
        setSelectedProjectId(selectedList);
        console.log("ini id title",selectedList);
    }

    const selectedProject = isAddProject.find(project => project.title === selectedProjectId);
    const taskForSelectedProject = isAddTask.filter(task => task.projectId === selectedProjectId);

    // Main content halaman isi mendaftar project
    let mainContentVisible = <Task onSaveTask={handleSaveTask} content={selectedProject ? [selectedProject] : []} listTugas={taskForSelectedProject} onClearLastTask={handleClearLastTask}  />

    if(addProjectVisible === true){
        mainContentVisible = <MainContent cancel={handleCancelProject} onSaveProject={handleSaveProject}/>;
    }
  return (
    <>
        <div className='flex'>
            <Sidebar className="w-1/4" onClick={handleCancelProject} listContent={isAddProject} onProjectSelect={handleSelectedProjectList}/>
            {notification && <Notification message={notificationMessage}/>}
            {mainContentVisible}
        </div>
    </>
  );
}

export default App;
