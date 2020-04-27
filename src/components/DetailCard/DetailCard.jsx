import React from 'react';
import './DetailCard.scss';

export default ({ module }) => {
  return (
    <div className="detail-card">
      <div className="detail-card__inner detail-card--mask">{module}</div>
    </div>
  );
};
