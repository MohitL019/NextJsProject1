"use client"
import { Modak } from "next/font/google";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addToDo } from "../../apis";
import { useRouter } from "next/navigation";
import {v4 as uuidv4} from "uuid";
const AddTask =() => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");

    const handleSubmitNewToDo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addToDo({
            id : uuidv4(),
            text : newTaskValue
        });
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }
    return (
        <div className="flex justify-center">
          <button onClick={()=>setModalOpen(true)} className="btn btn-primary">
            Add New Task
            <AiOutlinePlus className="ml-1" />
          </button>
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <form onSubmit={handleSubmitNewToDo}>
                <h3 className="font-bold text-lg">Add new task</h3>
                <div className="modal-action">
                    
                <input value={newTaskValue}
                onChange={e=> setNewTaskValue(e.target.value)} 
                type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button type="submit" className="btn">Submit</button>
                </div>
            </form>
          </Modal>
        </div>
      );
      
}

export default AddTask;