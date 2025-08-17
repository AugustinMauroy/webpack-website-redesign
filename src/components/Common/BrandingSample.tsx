import type { FC } from 'react';

type BrandingSampleProps = {
  color: string;
};

export const BrandingSample: FC<BrandingSampleProps> = ({ color }) => {
  return <div style={{ backgroundColor: color }}>&nbsp;</div>;
};
