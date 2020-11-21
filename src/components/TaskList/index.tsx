import React from 'react';
import { Duration } from 'luxon';
import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiEditCircleLine,
} from 'react-icons/ri';

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
            <th>
              <h5>Task</h5>
            </th>
            <th>
              <h5>Estimated Duration</h5>
            </th>
            <th>
              <h5>Status</h5>
            </th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(({ name, description, estimate, state, id }) => {
            return (
              <tr key={id}>
                <td>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </td>
                <td>
                  <h4>{Duration.fromMillis(estimate).toFormat('hh:mm')}</h4>
                </td>
                <td>{state}</td>

                <td>
                  <div className="buttonGroup">
                    <div className="saveButton">
                      <RiCheckboxCircleLine size={24} />
                    </div>

                    <div className="closeButton">
                      <RiCloseCircleLine size={24} />
                    </div>

                    <div className="editButton">
                      <RiEditCircleLine size={24} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TaskList;
