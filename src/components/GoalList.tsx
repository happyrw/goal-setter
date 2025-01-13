/* eslint-disable */

function GoalList({
  goals,
  completeGoal,
  updateGoal,
  deleteGoal,
}: {
  goals: any;
  completeGoal: any;
  updateGoal: any;
  deleteGoal: any;
}) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-bold mb-2">Your Goals</h2>
      {goals.length === 0 && (
        <p className="text-gray-500 text-lg">No goals added yet!</p>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {goals.map((goal: any, index: any) => (
          <li
            key={index}
            className={`relative bg-white shadow-md rounded-lg p-4 flex flex-col justify-between border-l-4 ${
              goal.completed ? "border-gray-400" : "border-sky-700"
            }`}
          >
            {/* Goal Content */}
            <div>
              <h3
                className={`font-bold text-lg ${
                  goal.completed
                    ? "text-gray-400 line-through"
                    : "text-gray-800"
                }`}
              >
                {goal.text}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{goal.description}</p>
              <p className="text-[10px] text-gray-500 mt-3 italic">
                Deadline: {goal.deadline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              {!goal.completed && (
                <button
                  onClick={() => completeGoal(index)}
                  className="flex items-center bg-green-500 text-white px-[3px] text-[10px] md:px-3 py-1 rounded-full hover:bg-green-600"
                  title="Mark as Complete"
                >
                  ✅ Complete
                </button>
              )}
              <button
                onClick={() => updateGoal(index)}
                className="flex items-center bg-yellow-500 text-white px-[3px] text-[10px] md:px-3 py-1 rounded-full hover:bg-yellow-600"
                title="Edit Goal"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteGoal(index)}
                className="flex items-center bg-red-500 text-white px-[3px] text-[10px] md:px-3 py-1 rounded-full hover:bg-red-600"
                title="Delete Goal"
              >
                🗑 Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalList;
