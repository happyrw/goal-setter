/*eslint-disable*/
import { FormEvent, useState } from "react";

function AddGoal({ addGoal }: { addGoal: any }) {
  const [goalText, setGoalText] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!goalText || !deadline) return;

    // Include goalDescription in the goal object
    addGoal({
      text: goalText,
      description: goalDescription,
      deadline,
      completed: false,
    });

    // Reset all fields
    setGoalText("");
    setGoalDescription("");
    setDeadline("");
  };

  return (
    <>
      {showForm ? (
        <button
          onClick={() => setShowForm(false)}
          className="text-xl font-bold mb-[5px] w-fit flex  ml-auto px-4 py-[3px] pb-[7px] rounded-lg bg-black text-white"
        >
          x
        </button>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="text-xl font-bold mb-[5px] w-fit flex  ml-auto px-4 py-[3px] pb-[7px] rounded-lg bg-black text-white"
        >
          +
        </button>
      )}
      <form
        onSubmit={handleSubmit}
        className={`w-full md:w-[600px] ml-auto bg-white shadow rounded ${
          showForm ? "h-fit p-4 mb-4" : "h-0 opacity-0"
        }`}
      >
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold text-lg">
            Goal
          </label>
          <input
            type="text"
            required
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="Enter your goal"
          />
        </div>

        {/* Goal Description Input */}
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold text-lg">
            Description
          </label>
          <textarea
            value={goalDescription}
            onChange={(e) => setGoalDescription(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
            placeholder="Enter a short description for your goal"
            rows={3}
            required
          ></textarea>
        </div>

        <div className="mb-2">
          <label className="block text-gray-700 font-semibold text-lg">
            Deadline
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Goal
        </button>
      </form>
    </>
  );
}

export default AddGoal;
