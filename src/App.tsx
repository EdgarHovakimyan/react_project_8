import { useState } from "react";
import { MyContext } from "./context/MyContext";
import { IGroups, IStudents } from "./types/type";
import Groups from "./components/Groups";
import AddStudents from "./components/AddStudent";
import AddGroups from "./components/AddGroup";


function App() {
  const [groups, setGroups] = useState<IGroups[]>([
    {
      id: 1, groupName: "Group 1", students: [
        { id: 1, name: "Sargis", surname: "Margaryan" },
        { id: 2, name: "Narine", surname: "Ghukasyan" },
        { id: 3, name: "Lusine", surname: "Hakobyan" }
      ]
    },
    {
      id: 2, groupName: "Group 2", students: [
        { id: 1, name: "Anna", surname: "Manucharyan" },
        { id: 2, name: "Ina", surname: "Grigoryan" },
        { id: 3, name: "Monika", surname: "Grigoryan" }
      ]
    },
    {
      id: 3, groupName: "Group 3", students: [
        { id: 1, name: "Andranik", surname: "Hovhannisyan" },
        { id: 2, name: "Narek", surname: "Zaqaryan" },
        { id: 3, name: "Davit", surname: "Hakobyan" }
      ]
    },
  ])
  const deleteStudentById = (gid: number, id: number): void => {
    const group = groups.find(elm => elm.id == gid);
    if (group) {
      group.students = group.students.filter(elm => elm.id != id)
      setGroups([...groups])
    }
  }
  const addStudent = (data: IStudents): void => {
    console.log(data);
    const group = groups.find(elm => elm.id == data.groupId);
    if (group) {
      group.students.push(data)
      setGroups([...groups])
    }
    // setGroups([...groups,data])
  }
  const deleteGroupById = (id: number): void => {
    setGroups([...groups.filter(elm => elm.id != id)])
  }
  const addGroup = (data: IGroups): void => {
    setGroups([...groups, data])
  }
  return (<>
    <div>
      <MyContext.Provider value={{ groups, deleteStudentById, addStudent, addGroup, deleteGroupById }}>
        <Groups />
        <AddStudents />
        <AddGroups />
      </MyContext.Provider>
    </div>
  </>)
}

export default App;
