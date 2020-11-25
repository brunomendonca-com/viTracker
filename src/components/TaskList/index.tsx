import React from 'react';
import { Duration } from 'luxon';
import { RiCloseCircleLine } from 'react-icons/ri';

import { Container, StatusButton, List, Header, Row, Column } from './styles';
import { Task } from '../../App';

interface TaskListProps {
  data: Task[];
  onClickTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
}
const TaskList: React.FC<TaskListProps> = ({
  data,
  onDeleteTask,
  onClickTask,
}: TaskListProps) => {
  return (
    <Container>
      <List>
        <Header>
          <Column>
            <h5>Task</h5>
          </Column>

          <Column>
            <h5>Estimated Duration</h5>
          </Column>

          <Column>
            <h5>Status</h5>
          </Column>

          <Column />
        </Header>

        {data.map(task => {
          const { name, description, estimate, state, id } = task;

          return (
            <Row key={id} onClick={() => onClickTask(task)}>
              <Column className="task-description">
                <h4>{name}</h4>
                <p>{description}</p>
              </Column>
              <Column>
                <h4>
                  {Duration.fromMillis(Number(estimate)).toFormat('hh:mm')}
                </h4>
              </Column>
              <Column>
                <StatusButton state={state}>{state}</StatusButton>
              </Column>

              <Column>
                <button
                  type="button"
                  className="closeButton"
                  onClick={event => {
                    event.stopPropagation();
                    onDeleteTask(task);
                  }}
                >
                  <RiCloseCircleLine size={24} />
                </button>
              </Column>
            </Row>
          );
        })}
      </List>
    </Container>
  );
};

export default TaskList;
