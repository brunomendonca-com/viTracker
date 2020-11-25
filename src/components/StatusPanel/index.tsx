import React, { useState, MouseEvent } from 'react';

import { Container } from './styles';

import StatusBox from '../StatusBox';

interface StatusPanelProps {
  data: {
    planned: number;
    inProgress: number;
    completed: number;
  };
  onFilter: (statusName: string) => void;
}

const StatusPanel: React.FC<StatusPanelProps> = ({
  data,
  onFilter,
}: StatusPanelProps) => {
  const [activeBox, setActiveBox] = useState<string>('');

  const handleBoxClick = (
    event: MouseEvent<HTMLDivElement>,
    status: string,
  ) => {
    if (event) event.preventDefault();
    if (status === activeBox) {
      setActiveBox('');
      onFilter('');
    } else {
      setActiveBox(status);
      onFilter(status);
    }
  };

  return (
    <Container>
      <StatusBox
        onBoxClick={handleBoxClick}
        activeStatus={activeBox}
        statusName="Planned"
        duration={data.planned}
      />
      <StatusBox
        onBoxClick={handleBoxClick}
        activeStatus={activeBox}
        statusName="In-Progress"
        duration={data.inProgress}
      />
      <StatusBox
        onBoxClick={handleBoxClick}
        activeStatus={activeBox}
        statusName="Completed"
        duration={data.completed}
      />
    </Container>
  );
};

export default StatusPanel;
