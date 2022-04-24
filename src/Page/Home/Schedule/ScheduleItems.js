import dayjs from 'dayjs';
import AddToCalendar from '../../../components/AddToCalendar/AddToCalendar';
import ScrollInOnViewBox from '../../../components/ScrollInOnViewBox';
import { WeddingCake } from '../../../components/Icon';

const getDateDisplayFromDate = (dateTimeString) =>
  dayjs(dateTimeString).format('ddd MMM D, YYYY');

const getTimeDisplayFromDate = (dateTimeString) =>
  dayjs(dateTimeString).format('h:mm a');

const getTzDateFromDate = (dateTimeString) =>
  dateTimeString.replace(' ', 'T') + '-05:00';

const ScheduleItems = ({ scheduleItems }) => {
  if (!scheduleItems?.length) {
    return null;
  }

  const sortedScheduleItems = [...scheduleItems].sort(
    (a, b) => dayjs(a.event_date).unix() - dayjs(b.event_date).unix()
  );

  return sortedScheduleItems?.map((scheduleItem) => (
    <section key={scheduleItem.slug} className="section">
      <div className="section__title-container">
        <ScrollInOnViewBox displayType="inline-block">
          <div className="text-center icon-container">
            {scheduleItem.event_icon !== 'wedding-cake-svg' ? (
              scheduleItem.event_icon
            ) : (
              <WeddingCake size={54} />
            )}
          </div>
          <h3 className="section-title">{scheduleItem.title.rendered}</h3>
          <div className="date">
            {getDateDisplayFromDate(scheduleItem.event_date)}
          </div>
          <div className="event-time subtitle">
            {getTimeDisplayFromDate(scheduleItem.event_date)}
          </div>
        </ScrollInOnViewBox>
      </div>
      <div className="section__content-container">
        <ScrollInOnViewBox fromDirection="right" animDelay="0.3s">
          <div className="time-and-details">
            <div className="details">
              <h4 className="subsection-title">{scheduleItem.location_name}</h4>
              <div className="location-address">
                {scheduleItem.location_address}
              </div>
              <div className="location-address">
                {scheduleItem.location_citystatezip}
              </div>
              <div className="attire subtitle">
                Attire: {scheduleItem.attire}
              </div>
              <div className="location-cta-container">
                <div className="cta-button-container">
                  <a
                    className="cta-button"
                    href={scheduleItem.maps_url}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    Map
                  </a>
                </div>
                <div className="cta-button-container">
                  <AddToCalendar
                    className="cta-button cta-button--atc"
                    eventDetails={{
                      title: scheduleItem.calendar_title,
                      description: scheduleItem.calendar_description,
                      eventLocation: scheduleItem.location_name,
                      startDate: getTzDateFromDate(scheduleItem.event_date),
                      endDate: getTzDateFromDate(
                        scheduleItem.calendar_end_date
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollInOnViewBox>
      </div>
    </section>
  ));
};

export default ScheduleItems;
