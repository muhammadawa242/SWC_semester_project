import React from 'react';
import { useSelector } from 'react-redux';

function Ads() {
  const user = useSelector((state) => state.user);
  const aws = useSelector((state) => state.awsPath);

  return (
    <div className="right-ad" style={{ position: 'fixed', right: 30, top: 70, width: 250 }}>
      <h2>Advertisements</h2>
      
      <div className="ad">
        <img src={aws + user.picturePath} alt="Ad 1" />
        <p>Ad description</p>
      </div>
      
      <div className="ad">
        <img src={aws + user.picturePath} alt="Ad 1" />
        <p>Ad description</p>
      </div>

    </div>
  );
}

export default Ads;