import { type ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDeleteCourseGoal: (id: number) => void;
}

const CourseGoalItem = ({
  id,
  title,
  children,
  onDeleteCourseGoal,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteCourseGoal(id)}>Delete</button>
    </article>
  );
};

export default CourseGoalItem;
