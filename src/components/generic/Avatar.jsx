import React from 'react';

function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-full mb-2 w-24 h-24" />;
}

export default Avatar;