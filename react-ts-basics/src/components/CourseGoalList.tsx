import { type ReactNode } from "react";
import CourseGoalItem from "./CourseGoalItem.tsx";
import { type CourseGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CourseGoal[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <h2>Info</h2>
        <p>You have no course goals yet. You can start adding some!</p>
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        <p>
          You're collecting a lot of goals. Don't put too much on your plate
        </p>
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoalItem id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.summary}</p>
            </CourseGoalItem>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
