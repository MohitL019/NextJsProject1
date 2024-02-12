import Image from "next/image";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import { getAllTodos } from "../../apis";

export default async function Home() {
  const tasks = await getAllTodos();
  
  console.log(tasks);
  // return (
  //   <main className="max-w-4xl">
  //     <div className="text-center">
  //       <h3>ToDoListApp</h3>
        
  //     </div>
  //     <div>
  //     <AddTask/>
  //     </div>
  //     <ToDoList tasks = {tasks}/>
  //   </main>
  // );
  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">ToDoListApp</h3>
      </div>
      <div className="mb-4">
        <AddTask />
      </div>
      <div className="bg-white rounded shadow-md">
        <ToDoList tasks={tasks} />
      </div>
    </main>
  );
  
}
