import React from "react";
import ProfileInfo from "../user/ProfileInfo";
import BrandsSection from "../user/BrandSection";
import DetailsSection from "../user/DetailsSection";
import { loremIpsum } from "lorem-ipsum";
import Button from "../generic/Button";

function PersonalityCardTemplate({
  userData,
  ageInYears,
  gender,
  appliancesData,
  fetchRandomUsers,
}) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg py-4 px-4 md:px-24">
      <ProfileInfo
        userData={userData}
        ageInYears={ageInYears}
        gender={gender}
      />

      <p className="mt-2 text-detail-grey">
        {loremIpsum({ count: 1, units: "paragraphs" })}
      </p>

      <DetailsSection userData={userData} />
      <BrandsSection appliancesData={appliancesData} />

      <Button text="Random Student" onClick={fetchRandomUsers} />
    </div>
  );
}

export default PersonalityCardTemplate;
