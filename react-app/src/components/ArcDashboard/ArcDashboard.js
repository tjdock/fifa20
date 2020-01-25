import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const ArcDashboard = props => {
  let arc1 = useRef();
  let arc2 = useRef();

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const describeArc = useCallback((x, y, radius, startAngle, endAngle) => {
    console.log('describeArc');
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y
    ].join(' ');

    return d;
  }, []);

  const getColors = value => {
    if (value >= 90) {
      return '#007e33';
    } else if (value >= 80 && value <= 89) {
      return '#4caf50';
    } else if (value >= 70 && value <= 79) {
      return '#fbc02d';
    } else if (value >= 50 && value <= 69) {
      return '#fb8c00';
    } else if (value <= 49) {
      return '#f44336';
    }
  };

  useEffect(() => {
    let deg = ((props.value - 50) * 90) / 50;
    arc1.current.setAttribute('d', describeArc(52, 52, 50, -90, 90));
    arc2.current.setAttribute('d', describeArc(52, 52, 50, -90, deg));
  }, [props, describeArc]);

  return (
    <svg
      height="50"
      version="1.1"
      width="104"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" stroke="#ddd" strokeWidth="4" ref={arc1} />
      <path
        fill="none"
        stroke={getColors(props.value)}
        strokeWidth="4"
        ref={arc2}
      />
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={getColors(props.value)}
        fontSize="22"
      >
        {props.value}
      </text>
    </svg>
  );
};

export default ArcDashboard;
