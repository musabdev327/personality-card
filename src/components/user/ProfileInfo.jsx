import React from 'react';
import Avatar from '../generic/Avatar';

function ProfileInfo({ userData, ageInYears, gender }) {
  const { first_name, last_name } = userData;

  return (
    <div className="flex justify-start">
      <Avatar src={userData.avatar} alt="Profile" />
      <div className="text-center ml-2 self-center">
        <p className="font-bold text-lg">
          {first_name} {last_name}
        </p>
        <p className="text-sm text-detail-grey-100 text-left">
          {ageInYears}&nbsp;/&nbsp;{gender}
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;