import { useState } from 'react';
import Spacing from './Spacing';

const UseStateComponent = () => {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, nameSet] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        <div>
          <code>{JSON.stringify(arr, null, 2)}</code>
        </div>
        <button onClick={() => nameSet('Felix')}>Set name</button>
        <Spacing type="x" />
        <button onClick={() => nameSet(null)}>Unset name</button>
        <div>
          <code>{JSON.stringify(name, null, 2)}</code>
        </div>
      </div>
    </div>
  );
};

export default UseStateComponent;
