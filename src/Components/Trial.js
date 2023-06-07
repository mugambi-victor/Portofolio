import React, { useState } from 'react';

function Example() {
  const [isHidden, setIsHidden] = useState(false);

  function toggleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <button onClick={toggleHidden}>
        {isHidden ? 'Show' : 'Hide'}
      </button>
      {!isHidden && <div>Content goes here</div>}
    </div>
  );
}
export default Example;