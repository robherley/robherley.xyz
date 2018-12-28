import React from 'react';

export default function Vue(props) {
  return (
    <svg
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      {...props}
    >
      <g transform="translate(2e-7 .16004)">
        <path
          d="m1.791 3.6914 10.209 17.619 10.209-17.533v-.085938h-3.9688l-6.1816 10.615-6.1523-10.615z"
          style={{ fill: '#41b883' }}
        />
        <path
          d="m5.9072 3.6914 6.1521 10.617 6.1809-10.617h-3.7228l-2.4337 4.1783-2.4226-4.1783z"
          style={{ fill: '#35495e' }}
        />
      </g>
    </svg>
  );
}