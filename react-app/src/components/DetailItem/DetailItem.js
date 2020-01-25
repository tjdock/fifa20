import React from 'react';

const DetailItem = props => {
  const getColors = value => {
    if (value >= 90) {
      return 'col1 color90';
    } else if (value >= 80 && value <= 89) {
      return 'col1 color80';
    } else if (value >= 70 && value <= 79) {
      return 'col1 color70';
    } else if (value >= 50 && value <= 69) {
      return 'col1 color5060';
    } else if (value <= 49) {
      return 'col1 color40';
    }
  };

  return (
    <div className="row">
      <div className="col4">{props.title}</div>
      <div className={getColors(props.value)}>{props.value}</div>
    </div>
  );
};

export default DetailItem;
