import { useContext } from "react"
import { MyContext } from "../context/MyContext"
import { IGroups } from "../types/type";
import { useForm } from 'react-hook-form';

const AddGroups = () => {
    const { addGroup, groups } = useContext(MyContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IGroups>();
    const save = (data: IGroups) => {
        console.log(data);
        addGroup({ ...data, id: Date.now(), students: [] });
        reset();
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <h3>add group</h3>
            <div className="form-group my-2">
                <input type="text"
                    placeholder='Group Name'
                    className="form-control"
                    {...register("groupName", {
                        required: "Fill the field",
                    })}
                />
                {errors.groupName && <p className='text-danger'>{errors.groupName.message}</p>}
            </div>
            <button className="btn btn-success">Save</button>
        </form>
    )
}

export default AddGroups