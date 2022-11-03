import { useRef } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>
        <button
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          Focus on input
        </button>
      </div>
    </div>
  );
};

export default UseRefComponent;
