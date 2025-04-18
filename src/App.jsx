import MainContent from "./Components/MainContent.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Task from "./components/Task.jsx"
import DaftarTugas from "./components/DaftarTugas.jsx";
import {useState} from "react";

function App() {
    const [addProjectVisible, setAddProjectVisible] = useState(false);
    const [isAddProject, setIsAddProject] = useState([]);
    const [isAddTask, setIsAddTask] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    //Masih perlu perbaikan
    function handleCancelProject(){
        setAddProjectVisible(true);
    }

    function handleSaveProject(newProjectData){
      if (!newProjectData.title && !newProjectData.description && !newProjectData.date && !newProjectData.date){
          console.log('Harap Isi Semua Data');
      }else {
          setIsAddProject((prevData) => [...prevData, {...newProjectData, id: newProjectData.title}]);
          console.log('Data Proyek baru:',newProjectData);
          setAddProjectVisible(false);
          setSelectedProjectId(newProjectData.title)
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

    function handleSelectedProjectList(selectedList){
        setSelectedProjectId(selectedList);
        console.log("ini id title",selectedList);
    }

    const selectedProject = isAddProject.find(project => project.title === selectedProjectId);
    const taskForSelectedProject = isAddTask.filter(task => task.projectId === selectedProjectId);

    // Main content halaman isi mendaftar project
    let mainContentVisible = <Task onSaveTask={handleSaveTask} content={selectedProject ? [selectedProject] : []} listTugas={taskForSelectedProject} />

    if(addProjectVisible === true){
        mainContentVisible = <MainContent cancel={handleCancelProject} onSaveProject={handleSaveProject}/>;
    }
  return (
    <>
        <div className='flex'>
            <Sidebar className="w-1/4" onClick={handleCancelProject} listContent={isAddProject} onProjectSelect={handleSelectedProjectList}/>
            {mainContentVisible}
        </div>
    </>
  );
}

export default App;
