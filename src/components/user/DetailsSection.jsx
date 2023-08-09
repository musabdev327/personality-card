import React from "react";

function DetailsSection({ userData }) {
  const {
    username,
    date_of_birth,
    phone_number,
    email,
    subscription,
    address: location,
  } = userData;

  const formattedLocation = `${location?.street_name}, ${location?.street_address}, ${location?.city}, ${location?.state}, ${location?.zip_code}, ${location?.country}`;

  return (
    <div className="mb-4 mt-2">
      <h2 className="text-orange-600 font-bold text-lg mb-2">Details</h2>
      <dl className="grid grid-cols-2 gap-4">
        <div className="col-span-1 gap-4 flex flex-col">
          <dt className="font-bold text-detail-grey">Username:</dt>
        </div>
        <div className="col-span-1 gap-4 flex flex-col">
          <dd className="whitespace-normal">{username}</dd>
        </div>
        <div className="col-span-1 gap-4 flex flex-col">
          <dt className="font-bold text-detail-grey">Date of Birth:</dt>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dd className="whitespace-normal">{date_of_birth || "1973-04-08"}</dd>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dt className="font-bold text-detail-grey">Phone:</dt>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dd className="whitespace-normal">{phone_number}</dd>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dt className="font-bold text-detail-grey">Email:</dt>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dd className="break-all">{email}</dd>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dt className="font-bold text-detail-grey">Subscription:</dt>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dd className="whitespace-normal">{subscription.plan}</dd>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dt className="font-bold text-detail-grey">Location:</dt>
        </div>

        <div className="col-span-1 gap-4 flex flex-col">
          <dd className="whitespace-normal">{formattedLocation}</dd>
        </div>
      </dl>
    </div>
  );
}

export default DetailsSection;
