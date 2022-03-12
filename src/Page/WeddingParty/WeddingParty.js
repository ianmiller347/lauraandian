import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import LoadingTiles from '../../components/LoadingTiles';
import {
  fetchWeddingParty,
  getWeddingPartyState,
} from '../../ducks/weddingParty';
import PartyMemberCard from './PartyMemberCard';
import './WeddingParty.css';

const getSortedPartyMembers = (partyMembers) => {
  if (!partyMembers?.length) {
    return [];
  }
  return [...partyMembers].sort((aMember, bMember) => {
    const roleA = aMember.role?.[0];
    const roleB = bMember.role?.[0];
    if (roleA === 'Matron of honor') {
      return -1;
    }
    if (roleA === 'Bridesmaid') {
      return -1;
    }
    if (roleA === 'Best man') {
      return -1;
    }
    if (roleA === roleB) {
      return 0;
    }
    return 1;
  });
};

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

  const sortedPartyMembers = getSortedPartyMembers(partyMembers);

  return (
    <div className="wedding-party-page page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | Wedding Party</title>
      </Helmet>
      <h1 className="page-title">Wedding Party</h1>
      <div className="page-content">
        {partyMembersLoading && (
          <LoadingTiles
            tileStyles={{ width: '40%', height: '300px' }}
            tiles={8}
            message="Getting the wedding party..."
          />
        )}
        {partyMembers && (
          <ul className="party-members-list">
            {sortedPartyMembers?.map((partyMember) => (
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
