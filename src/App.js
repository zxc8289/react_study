import React, { useState } from "react";

function App() {
  const [num, setnum] = useState(0);
  
  const increase = () => setnum(num+1);

  return (
  <>
    <div>클릭수 {num}</div>
    <div>
      <button onClick={increase}>클릭</button>
    </div>
  </>
  );
}

export default App;
