import React from 'react';
import styles from './CalendarNavigator.scss';
import classNames from 'classnames/bind';
import { Button } from 'semantic-ui-react';
import { limitedDays } from 'lib/variables';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

const cx = classNames.bind(styles);

type Props = {
  disabled: boolean,
  isFirstDay: boolean,
  isLastDay: boolean,
  onPrev(): void,
  onNext(): void,
  maxDate: string,
  selectedDate: string,
  calendar: boolean,
  onClick(): void,
  onChange(): void
}

const CalendarNavigator = ({
  disabled,
  isFirstDay,
  isLastDay,
  onPrev,
  onNext,
  maxDate,
  selectedDate,
  calendar,
  onClick,
  onChange
}: Props) => {
  return (
    <Button.Group>
      { !isFirstDay &&
        <Button
          circular
          icon='arrow left'
          size='large'
          disabled={!disabled}
          onClick={onPrev}
        />
      }
      <div>
        <Button
          size='large'
          toggle
          active={calendar}
          disabled={!disabled}
          onClick={onClick}
        >
          {selectedDate}
        </Button>
        { calendar && 
          <DatePicker
            showYearDropdown
            scrollableYearDropdown
            withPortal
            inline
            selected={moment(selectedDate)}
            minDate={moment(limitedDays.first)}
            maxDate={moment(maxDate)}
            onChange={onChange}
          />
        }
      </div>
      { !isLastDay &&
        <Button
          circular
          icon='arrow right'
          size='large'
          disabled={!disabled}
          onClick={onNext}
        />
      }
    </Button.Group>
  );
}

export default CalendarNavigator;