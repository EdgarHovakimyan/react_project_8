import React, { useContext } from "react"
import { MyContext } from "../context/MyContext"

const Groups = () => {
    const { groups, deleteGroupById, deleteStudentById } = useContext(MyContext)
    console.log(groups);

    return (<>
        <table className="table table-bordered table-success table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Groups</th>
                    <th>Students</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((elm, i) => <tr key={i}>
                    <td>{elm.id}</td>
                    <td>{elm.groupName}</td>
                    <td>
                        <table className="table table-warning table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>surname</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elm.students.map(e => (<tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.surname}</td>
                                    <td>
                                        <button onClick={() => deleteStudentById(elm.id, e.id)} className="btn btn-danger">&times;</button>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <button onClick={() => deleteGroupById(elm.id)} className="btn btn-danger">&times;</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>)
}

export default Groups