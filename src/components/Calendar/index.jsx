import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.scss';

const CalendarWrapper = ({ options={}, onChange }) => {
  const [value, setValue] = useState([new Date(), new Date()]);
  const [calendarVissibility, toggleCalendarVisibility] = useState(false);

  const handleSelect = (value) => {
    toggleCalendarVisibility(false);
    setValue(value);
    onChange && onChange(value);
  }
  
  return (
    <div className={styles.container} role="button">
        <div className={styles.selected} onClick={() => toggleCalendarVisibility(!calendarVissibility)}>
          {`${value[0].toLocaleDateString()}     -     ${value[1].toLocaleDateString()}` || 'Select a date range'}
          <DownOutlined />  
        </div>
      {
        calendarVissibility && (
          <Calendar {...options} className={styles.calendar} onChange={handleSelect} value={value} selectRange />
        )
      }
    </div>
  )
}

export default CalendarWrapper;