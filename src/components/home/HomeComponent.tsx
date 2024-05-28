import TaskItem from "./taskItem/TaskItem";

export default function HomeComponent() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 fixed w-1/2 h-[80%] top-[10%] left-1/4 rounded-3xl -rotate-6"></div>
      <div className="bg-white fixed w-1/2 h-[80%] top-[10%] left-1/4 rounded-3xl p-20">
        <h1 className="font-bold text-2xl">ToDo List</h1>
        <div className=" px-4 py-2 h-72 overflow-auto">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </div>
        <div className="flex justify-between items-center ml-5">
          <input
            type="text"
            placeholder="Task name"
            className="my-4 outline-none border-none w-1/2"
          />
          <div className="flex w-1/2 justify-end mr-5">
            <div>
              <select className="outline-none">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <button className="bg-[#45e381] rounded-md px-2 py-1 text-white whitespace-nowrap">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
