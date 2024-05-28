export default function TaskItem() {
  return (
    <div className="flex justify-between py-2 border-b">
      <div className="flex gap-2">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <h3 className="font-bold">Task 1</h3>
        <div className="bg-[#e7a408] px-2 py-[2px] rounded-md text-white font-semibold">
          Medium
        </div>
      </div>
      <div>
        <button className="bg-[#f04143] rounded text-white  px-2 py-[2px] font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
}
