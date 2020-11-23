import React from 'react';

import { Container } from './styles';

import StatusBox from '../StatusBox';

interface StatusPanelProps {
  data: {
    planned: number;
    inProgress: number;
    completed: number;
  };
}

const StatusPanel: React.FC<StatusPanelProps> = ({
  data,
}: StatusPanelProps) => {
  return (
    <Container>
      <StatusBox status="Planned" duration={data.planned} />
      <StatusBox status="In-Progress" duration={data.inProgress} />
      <StatusBox status="Completed" duration={data.completed} />
    </Container>
  );
};

export default StatusPanel;
