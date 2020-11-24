import React from 'react';
import { Duration } from 'luxon';
import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiEditCircleLine,
} from 'react-icons/ri';

import { Container, StatusButton } from './styles';
import { Task } from '../../App';

interface TaskListProps {
  data: Task[];
  onDeleteTask: (id: number) => void;
}
const TaskList: React.FC<TaskListProps> = ({
  data,
  onDeleteTask,
}: TaskListProps) => {
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
          {data.map(({ name, description, estimate, state, id }) => {
            return (
              <tr key={id}>
                <td>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </td>
                <td>
                  <h4>
                    {Duration.fromMillis(Number(estimate)).toFormat('hh:mm')}
                  </h4>
                </td>
                <td>
                  <StatusButton state={state}>{state}</StatusButton>
                </td>

                <td>
                  <div className="buttonGroup">
                    {/* <button type="button" className="saveButton">
                      <RiCheckboxCircleLine size={24} />
                    </button> */}

                    <button
                      type="button"
                      className="closeButton"
                      onClick={() => onDeleteTask(Number(id))}
                    >
                      <RiCloseCircleLine size={24} />
                    </button>

                    {/* <button
                      type="button"
                      className="editButton"
                      onClick={() => alert(`Task: ${name}, id: ${id}`)}
                    >
                      <RiEditCircleLine size={24} />
                    </button> */}
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
