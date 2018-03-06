import React from 'react';
import styles from './CalendarNavigator.scss';
import classNames from 'classnames/bind';
import { Button, Icon } from 'semantic-ui-react';
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
    <Button.Group size='large'>
      <Button
        circular
        color='grey'
        icon='arrow left'
        disabled={!disabled || isFirstDay}
        onClick={onPrev}
      />
      <div>
        <Button
          className={cx('date-button')}
          animated='vertical'
          toggle
          loading={!disabled}
          disabled={!disabled}
          onClick={onClick}
        >
          <Button.Content visible>
            {moment(selectedDate).format('LL')}
          </Button.Content>
          <Button.Content hidden>
            <Icon name='calendar' color='grey' />Choose a date
          </Button.Content>
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
          >
            <div className={cx('limited-days')}>
              <span>Available from {limitedDays.first} to today</span>
            </div>
          </DatePicker>
        }
      </div>
      <Button
        circular
        color='grey'
        icon='arrow right'
        disabled={!disabled || isLastDay}
        onClick={onNext}
      />
    </Button.Group>
  );
}

export default CalendarNavigator;