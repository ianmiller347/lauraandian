const PartyMemberCard = ({ partyMember }) => (
  <div className="party-member__card">
    <div className="party-member__image">
      <img src={partyMember.image.guid} alt={partyMember.full_name} />
    </div>
    <h4 className="party-member__name">{partyMember.full_name}</h4>
    <div className="party-member__role">{partyMember.role?.[0]}</div>
    <div className="party-member__description">
      {partyMember.caption_description}
    </div>
  </div>
);

export default PartyMemberCard;
