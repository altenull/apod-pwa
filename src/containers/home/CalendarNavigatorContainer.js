import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { State } from 'store';
import { HomeActions } from 'store/actionCreators';
import { limitedDays } from 'lib/variables';
import moment from 'moment';

import CalendarNavigator from 'components/home/CalendarNavigator';

type Props = {
  isLoaded: boolean,
  apod: any,
  today: string,
  calendar: boolean,
  onLine: boolean
}

class CalendarNavigatorContainer extends Component<Props> {
  getAPOD = async (date) => {
    try {
      await HomeActions.getAPOD(date);
    } catch (e) {
      console.log(e);
    }
  }

  handlePrev = () => {
    const { apod } = this.props;
    const prevDate = moment(apod.date).subtract(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { apod } = this.props;
    const nextDate = moment(apod.date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  handleCalendarToggle = (e) => {
    e && e.preventDefault();
    const { calendar } = this.props;

    if (!calendar) {
      HomeActions.showCalendar();
    } else {
      HomeActions.hideCalendar();
    }
  }

  handleClickOutside = (e) => {
    e && e.preventDefault();
    HomeActions.hideCalendar();
  }

  handleChange = (date) => {
    this.getAPOD(date.format('YYYY-MM-DD'));
    this.handleCalendarToggle();
  }

  render() {
    const { isLoaded, apod, today, calendar, onLine } = this.props;
    const { handlePrev, handleNext, handleCalendarToggle, handleClickOutside, handleChange } = this;

    const isFirstDay = limitedDays.first === apod.date;
    const isLastDay = today === apod.date;

    return (
      <CalendarNavigator
        disabled={isLoaded}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
        onPrev={handlePrev}
        onNext={handleNext}
        maxDate={today}
        selectedDate={apod.date}
        calendar={calendar}
        onClick={handleCalendarToggle}
        onClickOutside={handleClickOutside}
        onChange={handleChange}
        onLine={onLine}
      />
    );
  }
}

export default connect(
  ({ base, home }: State)=>({
    isLoaded: home.isLoaded,
    apod: home.apod.toJS(),
    today: home.today,
    calendar: home.calendar,
    onLine: base.onLine
  }),
  ()=>({})
)(CalendarNavigatorContainer);