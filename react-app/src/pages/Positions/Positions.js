import React from 'react';
import './Positions.scss';

const Positions = props => {
  return (
    <div className="center">
      <div className="positions">
        <div className="mid-line"></div>
        <div className="mid-circle"></div>
        <div className="mid-dot"></div>

        <div className="top-arc"></div>
        <div className="top-left-arc"></div>
        <div className="top-right-arc"></div>
        <div className="top-big-area"></div>
        <div className="top-small-area"></div>
        <div className="top-dot"></div>

        <div className="bottom-arc"></div>
        <div className="bottom-left-arc"></div>
        <div className="bottom-right-arc"></div>
        <div className="bottom-big-area"></div>
        <div className="bottom-small-area"></div>
        <div className="bottom-dot"></div>

        <div className="row d-evenly">
          <div className="position">LF</div>
          <div className="position">ST</div>
          <div className="position">RF</div>
        </div>
        <div className="row d-between">
          <div className="position">LW</div>
          <div className="position">CF</div>
          <div className="position">RW</div>
        </div>
        <div className="row d-center">
          <div className="position">CAM</div>
        </div>
        <div className="row d-evenly">
          <div className="position">LM</div>
          <div className="position">CM</div>
          <div className="position">RM</div>
        </div>
        <div className="row d-between">
          <div className="position">LWB</div>
          <div className="position">CDM</div>
          <div className="position">RWB</div>
        </div>
        <div className="row d-evenly">
          <div className="position">LB</div>
          <div className="position">CB</div>
          <div className="position">RB</div>
        </div>
        <div className="row d-center">
          <div className="position">GK</div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
