const useDaysRemaining = () => {
  const weddingDate = new Date('2022-09-24');
  const rightNow = new Date();
  const msInADay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.ceil(
    (weddingDate.getTime() - rightNow.getTime()) / msInADay
  );
  return daysRemaining;
};

const DateAndCountdown = () => {
  const daysRemaining = useDaysRemaining();
  return (
    <div className="date-info">
      <time className="wedding-date">September 24, 2022</time>
      <div className="wedding-location">New Orleans, LA</div>
      <div className="countdown subtitle">{daysRemaining} Days to go!</div>
    </div>
  );
};

export default DateAndCountdown;
