/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Duration } from 'luxon';
import { CgCalendarDates, CgSandClock, CgPlayListCheck } from 'react-icons/cg';
import { Container, Description, DurationLabel } from './styles';

interface StatusBoxProps {
  status: 'Planned' | 'In-Progress' | 'Completed';
  duration?: number;
}

const colors = {
  Planned: '#5F8EA0',
  'In-Progress': '#CFA516',
  Completed: '#12A454',
};

const renderIcon = (status: string) => {
  switch (status) {
    case 'Planned':
      return (
        <>
          <CgCalendarDates size={24} color={colors[status]} />
        </>
      );
    case 'In-Progress':
      return (
        <>
          <CgSandClock size={20} color={colors[status]} />
        </>
      );
    case 'Completed':
      return <CgPlayListCheck size={24} color={colors[status]} />;
    default:
      return null;
  }
};

const StatusBox: React.FC<StatusBoxProps> = ({
  status,
  duration,
}: StatusBoxProps) => {
  const getParsedDuration = () => {
    if (duration && duration > 0) {
      return Duration.fromMillis(duration).toFormat('hh:mm');
    }
    return '';
  };

  return (
    <Container>
      <Description>
        <h4 style={{ color: colors[status] }}>{status}</h4>
        {renderIcon(status)}
      </Description>
      <DurationLabel>{getParsedDuration()}</DurationLabel>
    </Container>
  );
};

export default StatusBox;
