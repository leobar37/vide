import React, { HTMLAttributes } from 'react';
import { useToken } from '@chakra-ui/react';
const Line = (props: HTMLAttributes<SVGElement>) => {
  const bg = useToken('colors', 'primary');
  return (
    <svg
      viewBox="0 0 843 1246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y="1083.29"
        width="1424.33"
        height="344.655"
        transform="rotate(-70 0 1083.29)"
        fill={bg}
      />
    </svg>
  );
};

export default Line;
