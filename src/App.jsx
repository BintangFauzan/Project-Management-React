import MainContent from "./Components/MainContent.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Task from "./components/Task.jsx"
import DaftarTugas from "./components/DaftarTugas.jsx";
import {useState} from "react";

function App() {
    const [addProjectVisible, setAddProjectVisible] = useState(false);
    const [isAddProject, setIsAddProject] = useState([]);
    const [isAddTask, setIsAddTask] = useState([]);

    //Masih perlu perbaikan
    function handleCancelProject(){
        setAddProjectVisible(true);
    }

    function handleSaveProject(newProjectData){
      if (!newProjectData.title && !newProjectData.description && !newProjectData.date && !newProjectData.date){
          console.log('Harap Isi Semua Data');
      }else {
          setIsAddProject((prevData) => [...prevData, newProjectData]);
          console.log('Data Proyek baru:',newProjectData);
          setAddProjectVisible(false);
      }
    }

    function handleSaveTask(newTaskData) {
        setIsAddTask((prevTask) => [...prevTask, newTaskData])
        console.log("Data task :" , newTaskData);
    }

    // Main content halaman isi mendaftar project
    let mainContentVisible = <Task onSaveTask={handleSaveTask} content={isAddProject} listTugas={isAddTask} />

    if(addProjectVisible === true){
        mainContentVisible = <MainContent cancel={handleCancelProject} onSaveProject={handleSaveProject}/>;
    }
  return (
    <>
        <div className='flex'>
            <Sidebar className="w-1/4" onClick={handleCancelProject} listContent={isAddProject}/>
            {mainContentVisible}
        </div>
    </>
  );
}

export default App;
