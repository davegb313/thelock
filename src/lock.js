import React from 'react';

const Lock = (props)=> (
  <svg version="1.1" viewBox='0 0 100 100' className='Lock'>
    <rect x={20} y={55} height={35} width={60} fill='black' />
    <rect x={65} y={35} height={31} width={5} fill='black' />
    <clipPath id="cut-off-bottom">
      <rect x="0" y="-65" width="200" height="100"/>
    </clipPath>

    <circle cx="50" cy="35" r="17.5" fill='none' stroke='black' strokeWidth='5' clipPath="url(#cut-off-bottom)" />
    {!props.opened ? (<rect x={30} y={35} height={31} width={5} fill='black' />) : null}
  </svg>
);

export default Lock;
