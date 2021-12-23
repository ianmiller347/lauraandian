import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeddingParty,
  getWeddingPartyState,
} from '../../ducks/weddingParty';
import PartyMemberCard from './PartyMemberCard';
import './WeddingParty.css';

const WeddingParty = () => {
  const dispatch = useDispatch();
  const partyMembers = useSelector(
    (state) => getWeddingPartyState(state)?.data
  );
  const partyMembersLoading = useSelector(
    (state) => getWeddingPartyState(state)?.isLoading
  );

  useEffect(() => {
    dispatch(fetchWeddingParty());
  }, [dispatch]);

  return (
    <div className="wedding-party-page page--no-top-image">
      <h1 className="page-title">Wedding party</h1>
      <div className="page-content">
        {partyMembersLoading && <div>Getting the wedding party...</div>}
        {partyMembers && (
          <ul className="party-members-list">
            {partyMembers?.map((partyMember) => (
              <li
                key={partyMember.full_name}
                className="party-member-list-item"
              >
                <PartyMemberCard partyMember={partyMember} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WeddingParty;
