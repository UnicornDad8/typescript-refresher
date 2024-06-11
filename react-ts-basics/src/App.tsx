import { useState } from "react";
import CourseGoal from "./components/CourseGoalItem.tsx";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";
import goalsImg from "./assets/goals.jpg";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn modern front-end frameworks",
        description:
          "In this course we will learn many front-end technologies, like React, TypeScript and Redux, also we will build many projects",
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
