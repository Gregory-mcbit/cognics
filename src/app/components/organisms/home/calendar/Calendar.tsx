"use client";

import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";

type CalendarProps = {};

const Calendar: React.FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [headerDate, setHeaderDate] = useState("");

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  useEffect(() => {
    setHeaderDate(
      currentDate.toLocaleDateString("default", {
        month: "long",
        year: "numeric",
      })
    );
  }, [currentDate]);

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <div className={styles.icon} onClick={prevMonth}>
          &lt;
        </div>
        <div>{headerDate}</div>
        <div className={styles.icon} onClick={nextMonth}>
          &gt;
        </div>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className={styles.days}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.day}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const monthEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const startDay = monthStart.getDay();
    const startDate = new Date(
      monthStart.setDate(startDay === 0 ? -6 : 1 - startDay)
    );

    const endDate = new Date(
      monthEnd.setDate(monthEnd.getDate() + (7 - monthEnd.getDay()))
    );

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = new Date(day);
        days.push(
          <div
            key={day.toString()}
            className={`${styles.cell} ${
              day.getMonth() !== monthStart.getMonth()
                ? styles.disabled
                : selectedDate &&
                  day.toDateString() === selectedDate.toDateString()
                ? styles.selected
                : ""
            }`}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className={styles.number}>{day.getDate()}</span>
          </div>
        );
        day.setDate(day.getDate() + 1);
      }
      rows.push(
        <div key={day.toString()} className={styles.row}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className={styles.body}>{rows}</div>;
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  return (
    <div className={styles.calendar}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
