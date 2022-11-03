import { useEffect, useState } from 'react';

const UseEffectComponent = () => {
  const [val, valSet] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      valSet((v) => v + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{val}</div>;
};

export default UseEffectComponent;
