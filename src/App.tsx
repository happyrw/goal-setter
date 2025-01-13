/* eslint-disable */

import { useState, useEffect } from "react";
import AddGoal from "./components/AddGoal";
import GoalList from "./components/GoalList";
//@ts-ignore
import "./globals.css";

function App() {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = (newGoal: any) => {
    setGoals([...goals, newGoal]);
  };

  const completeGoal = (index: number) => {
    const updatedGoals = goals.map((goal: any, i: number) =>
      i === index ? { ...goal, completed: true } : goal
    );
    setGoals(updatedGoals);
  };

  const updateGoal = (index: number) => {
    const updatedText = prompt("Update your goal:", goals[index].text);
    const updatedDescription = prompt(
      "Update your description:",
      goals[index].description || ""
    );

    if (updatedText || updatedDescription) {
      const updatedGoals = goals.map((goal: any, i: any) =>
        i === index
          ? {
              ...goal,
              text: updatedText || goal.text,
              description: updatedDescription || goal.description,
            }
          : goal
      );
      setGoals(updatedGoals);
    }
  };

  const deleteGoal = (index: any) => {
    const updatedGoals = goals.filter((_: any, i: any) => i !== index);
    setGoals(updatedGoals);
  };

  // Exercises for javascript
  // function to calculate 10!
  function calculate() {
    let number = 2;
    let multiplier = 1;
    for (let i = 1; i <= number; i++) {
      let result = number + " * " + i + " = " + number * i;
      console.log(result);
    }
  }
  calculate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 mt-5">
        Goal Setter App
      </h1>
      <AddGoal addGoal={addGoal} />
      <GoalList
        goals={goals}
        completeGoal={completeGoal}
        updateGoal={updateGoal}
        deleteGoal={deleteGoal}
      />
    </div>
  );
}

export default App;
