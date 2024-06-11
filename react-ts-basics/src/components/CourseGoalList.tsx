import React from "react";
import CourseGoalItem from "./CourseGoalItem.tsx";
import { type CourseGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoal[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoalItem id={goal.id} title={goal.title} onDelete={onDelete}>
            <p>{goal.summary}</p>
          </CourseGoalItem>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
