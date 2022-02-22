import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoadingTiles from '../../../components/LoadingTiles';
import { fetchSchedule, getScheduleState } from '../../../ducks/schedule';
import { slowlyScrollIntoView } from '../Home';
import ScheduleItems from './ScheduleItems';
import './Schedule.css';

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

  return (
    <div className="callout-content" id="schedule" ref={ScheduleSection}>
      {isLoading && (
        <div>
          <div className="marquee-container">
            <div className="loading marquee">Fetching schedule...</div>
          </div>
          <LoadingTiles
            tiles={3}
            tileStyles={{ width: '600px', height: '200px' }}
          />
        </div>
      )}
      <ScheduleItems scheduleItems={scheduleItems} />
    </div>
  );
};

export default Schedule;
