import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonalityCard from "../components/template/PersonalityCardTemplate";

const PersonAlityCArd = () => {
  const [userData, setUserData] = useState(null);
  const [appliancesData, setAppliancesData] = useState([]);

  const fetchRandomUser = () => {
    fetchRandomAppliances();
    axios
      .get("https://random-data-api.com/api/v2/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const fetchRandomAppliances = () => {
    axios
      .get("https://random-data-api.com/api/v2/appliances?size=5")
      .then((response) => {
        setAppliancesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching appliances data:", error);
      });
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { gender, date_of_birth } = userData;


  const dateOfBirth = date_of_birth;
  const dobDate = new Date(dateOfBirth);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate - dobDate;
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <div className="flex items-center justify-center mx-auto px-10 p-10">
      <PersonalityCard
        userData={userData}
        ageInYears={ageInYears}
        gender={gender}
        appliancesData={appliancesData}
        fetchRandomUsers={fetchRandomUser}
      />
    </div>
  );
};

export default PersonAlityCArd;
