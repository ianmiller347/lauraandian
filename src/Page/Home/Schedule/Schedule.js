import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSchedule, getScheduleState } from '../../../ducks/schedule';
import { slowlyScrollIntoView } from '../Home';
import ScheduleItems from './ScheduleItems';

const Schedule = ({ bgImageLoaded }) => {
  const ScheduleSection = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const scheduleItems = useSelector((state) => getScheduleState(state)?.data);
  const isLoading = useSelector((state) => getScheduleState(state)?.isLoading);

  // fire when schedule hash is visited and schedule section exists
  useEffect(() => {
    if (location.hash === '#schedule' && ScheduleSection && bgImageLoaded) {
      slowlyScrollIntoView(ScheduleSection.current);
    }
  }, [location, ScheduleSection, bgImageLoaded]);

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  const sortedScheduleItems = scheduleItems
    ? [...scheduleItems].sort(
        (a, b) => new Date(a.event_date) - new Date(b.event_date)
      )
    : [];

  return (
    <div className="callout-content" id="schedule" ref={ScheduleSection}>
      {isLoading && <div className="loading">Fetching schedule...</div>}
      <ScheduleItems scheduleItems={sortedScheduleItems} />
    </div>
  );
};

export default Schedule;
