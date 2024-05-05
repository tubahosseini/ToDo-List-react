import AddButton from "./addButton/AddButton";
import AddTaskItem from "./addTaskItem/AddTaskItem";
import SelectPriority from "./selectPriority/SelectPriority";
import TaskItem from "./taskItem/TaskItem";

export default function HomeComponent() {
  return (
    <>
      <div className="bg-[#2968eb] fixed w-1/2 h-[80%] top-[10%] left-1/4 rounded-2xl -rotate-6"></div>
      <div className="bg-white fixed w-1/2 h-[80%] top-[10%] left-1/4 rounded-2xl p-20">
        <h1 className="font-bold text-2xl">ToDo List</h1>
        <div className=" px-4 py-2 h-72 overflow-auto">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
        <div className="flex justify-between items-center">
          <AddTaskItem />

          <div className="flex w-1/2 justify-end">
            <SelectPriority />
            <AddButton />
          </div>
        </div>
      </div>
    </>
  );
}
