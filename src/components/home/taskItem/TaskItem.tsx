import DeleteButton from "../deleteButton/DeleteButton";

export default function TaskItem() {
  return (
    <div className="flex justify-between py-2 border-b">
      <div className="flex gap-2">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <h3>task 1</h3>
        <div className="bg-[#ec453f] px-1 rounded-md text-white font-semibold">
          high
        </div>
      </div>
      <div>
        <DeleteButton />
      </div>
    </div>
  );
}
