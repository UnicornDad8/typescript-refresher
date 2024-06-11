import React from "react";
import CourseGoalItem from "./CourseGoalItem.tsx";
import { type CourseGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CourseGoal[];
  onDeleteCourseGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteCourseGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoalItem
            id={goal.id}
            title={goal.title}
            onDeleteCourseGoal={onDeleteCourseGoal}
          >
            <p>{goal.description}</p>
          </CourseGoalItem>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
