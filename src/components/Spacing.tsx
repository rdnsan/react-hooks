import { FC } from 'react';

interface SpacingProps {
  type: 'x' | 'y';
}

const Spacing: FC<SpacingProps> = ({ type }) => {
  switch (type) {
    case 'x':
      return <span style={{ margin: '0 0.5rem' }} />;
    case 'y':
      return <span style={{ margin: '0.5rem 0' }} />;
  }
};

export default Spacing;
