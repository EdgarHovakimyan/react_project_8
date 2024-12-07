import { useContext } from "react"
import { MyContext } from "../context/MyContext"
import { IStudents } from "../types/type";
import { useForm } from 'react-hook-form';

const AddStudents = () => {
    const { addStudent, groups } = useContext(MyContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IStudents>();
    const save = (data: IStudents) => {
        console.log(data);
        addStudent({ ...data, id: Date.now() });
        reset();
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <h3>add student</h3>
            <div className="form-group my-2">
                <input type="text"
                    placeholder='Name'
                    className="form-control"
                    {...register("name", {
                        required: "Fill the field",
                    })}
                />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div>
            <div className="form-group my-2">
                <input type="text"
                    placeholder='Surname'
                    className="form-control"
                    {...register("surname", {
                        required: "Fill the field",
                    })}
                />
                {errors.surname && <p className='text-danger'>{errors.surname.message}</p>}
            </div>
            <div className="form-group my-2">
                <select
                    className="form-control"
                    {...register("groupId", {
                        required: "Fill the field",
                    })}
                >
                    <option value="" hidden>Select Group</option>
                    {groups.map((elm, i) => <option key={i} value={elm.id}>
                        {elm.groupName}
                    </option>)}

                </select>
                {errors.groupId && <p className='text-danger'>{errors.groupId.message}</p>}
            </div>
            <button className="btn btn-success">Save</button>
        </form>
    )
}



export default AddStudents