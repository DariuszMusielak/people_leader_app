import React, {PropTypes} from 'react';

const MembershipList = ({memberships}) => {
  return (
      <ul className="list-group">
        {memberships.map(membership =>
          <li className="list-group-item" key={membership.id}>
            {membership.name}
          </li>
        )}
      </ul>
  );
};

MembershipList.propTypes = {
  memberships: PropTypes.array.isRequired
};

export default MembershipList;
