import React from 'react';

import { Container } from './styles';
import { Task } from '../../App';

interface TaskListProps {
  tasks: Task[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }: TaskListProps) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Estimated Duration</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(({ name, description, estimate, state, id }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>{estimate}</td>
                <td>{state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TaskList;
