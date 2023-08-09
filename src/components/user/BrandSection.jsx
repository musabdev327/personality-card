import React from 'react';
import Chip from '../generic/Chip'

function BrandsSection({ appliancesData }) {
  return (
    <div className="mb-4">
      <h2 className="text-orange-600 font-bold text-lg mb-2">Brands</h2>
      <div className="flex flex-wrap mb-2">
        {appliancesData.map((appliance, index) => (
          <Chip key={index} text={appliance.brand} />
        ))}
      </div>
    </div>
  );
}

export default BrandsSection;