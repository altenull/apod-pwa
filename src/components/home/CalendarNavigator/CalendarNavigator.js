import React from 'react';
import styles from './CalendarNavigator.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Transition } from 'semantic-ui-react';
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
  onClickOutside(e: Event): void,
  onChange(): void,
  onLine: boolean
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
  onClickOutside,
  onChange,
  onLine
}: Props) => {
  return (
    <div>
      <Transition visible={!onLine} animation='shake' duration={750}>
        <div className={cx('warning', `${onLine && 'hide'}`)}>Disconnected network.</div>
      </Transition>
      <Button.Group size='large' className={cx('calendar-navigator')}>
        <Button
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
          { (calendar && onLine) &&
            <DatePicker
              showYearDropdown
              scrollableYearDropdown
              withPortal
              inline
              selected={moment(selectedDate)}
              minDate={moment(limitedDays.first)}
              maxDate={moment(maxDate)}
              onClickOutside={onClickOutside}
              onChange={onChange}
            >
              <div className={cx('limited-days')}>
                <span>Available from {limitedDays.first} to today</span>
              </div>
            </DatePicker>
          }
        </div>
        <Button
          color='grey'
          icon='arrow right'
          disabled={!disabled || isLastDay}
          onClick={onNext}
        />
      </Button.Group>
    </div>
  );
}

export default CalendarNavigator;