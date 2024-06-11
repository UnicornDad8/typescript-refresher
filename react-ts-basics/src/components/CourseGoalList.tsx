import React from "react";
import CourseGoalItem from "./CourseGoalItem.tsx";
import { type CourseGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoal[];
};

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoalItem title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoalItem>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
