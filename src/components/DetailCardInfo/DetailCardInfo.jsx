import React from 'react';
import './DetailCardInfo.scss';

export default ({ title_1, title_2, info_1, info_2 }) => {
  return (
    <div className="detail-info">
      <div className="detail-info__item">
        <p className="detail-info__title">{title_1}</p>
        <p className="detail-info__info">{info_1}</p>
      </div>
      <div className="detail-info__item">
        <p className="detail-info__title">{title_2}</p>
        <p className="detail-info__info">{info_2}</p>
      </div>
    </div>
  );
};
