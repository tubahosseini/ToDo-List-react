import TaskItem from "../../components/home/taskItem/TaskItem";

export default function Home() {
  return (
    <>
      <div className="bg-[#2968eb] fixed w-1/2 h-[80%] top-[10%] left-1/4 rounded-2xl -rotate-6"></div>
      <div className="bg-white fixed w-1/2 h-[80%] top-[10%] left-1/4 rounded-2xl p-20">
        <h1 className="font-bold text-2xl">ToDo List</h1>
        <div className="px-4 py-2">
          <TaskItem />
        </div>
      </div>
    </>
  );
}
