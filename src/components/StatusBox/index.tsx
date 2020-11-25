/* eslint-disable react/jsx-one-expression-per-line */
import React, { MouseEvent } from 'react';
import { Duration } from 'luxon';
import { CgCalendarDates, CgSandClock, CgPlayListCheck } from 'react-icons/cg';
import { Container, Description, DurationLabel } from './styles';

export interface StatusBoxProps {
  onBoxClick: (event: MouseEvent<HTMLDivElement>, statusName: string) => void;
  activeStatus: string;
  statusName: 'Planned' | 'In-Progress' | 'Completed';
  duration?: number;
}

export const colors = {
  Planned: '#5F8EA0',
  'In-Progress': '#CFA516',
  Completed: '#12A454',
};

const renderIcon = (statusName: string) => {
  switch (statusName) {
    case 'Planned':
      return (
        <>
          <CgCalendarDates size={24} color={colors[statusName]} />
        </>
      );
    case 'In-Progress':
      return (
        <>
          <CgSandClock size={20} color={colors[statusName]} />
        </>
      );
    case 'Completed':
      return <CgPlayListCheck size={24} color={colors[statusName]} />;
    default:
      return null;
  }
};

const StatusBox: React.FC<StatusBoxProps> = ({
  onBoxClick,
  activeStatus,
  statusName,
  duration,
}: StatusBoxProps) => {
  const getParsedDuration = () => {
    if (duration && duration > 0) {
      return Duration.fromMillis(duration).toFormat('hh:mm');
    }
    return '';
  };

  return (
    <Container
      state={statusName}
      className={activeStatus === statusName ? 'active-box' : undefined}
      onClick={event => onBoxClick(event, statusName)}
    >
      <Description state={statusName}>
        <h4>{statusName}</h4>
        {renderIcon(statusName)}
      </Description>
      <DurationLabel>{getParsedDuration()}</DurationLabel>
    </Container>
  );
};

export default StatusBox;
