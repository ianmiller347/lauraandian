const pad = (num) => {
  // Ensure date values are double digits
  return num < 10 ? '0' + num : num;
};

const formatDate = (dateString) => {
  const dateTime = new Date(dateString);
  return [
    dateTime.getUTCFullYear(),
    pad(dateTime.getUTCMonth() + 1),
    pad(dateTime.getUTCDate()),
    'T',
    pad(dateTime.getUTCHours()),
    pad(dateTime.getUTCMinutes()) + '00Z',
  ].join('');
};

const getIcsUrl = (eventDetails) => {
  // Create the .ics URL
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'DTSTART:' + formatDate(eventDetails.startDate),
    'DTEND:' + formatDate(eventDetails.endDate),
    'SUMMARY:' + eventDetails.title,
    'DESCRIPTION:' + eventDetails.description,
    'LOCATION:' + eventDetails.eventLocation,
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'REPEAT:1',
    'DURATION:PT15M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Reminder',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');
};

const AddToCalendar = ({ className = '', eventDetails }) => {
  const url = getIcsUrl(eventDetails);
  return (
    <a
      className={className}
      href={encodeURI(`data:text/calendar;charset=utf8,${url}`)}
      download="calendar.ics"
    >
      Add to calendar
    </a>
  );
};

export default AddToCalendar;
