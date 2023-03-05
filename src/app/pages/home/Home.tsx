import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  function IncrementFunction() {
    setValue(value + 1);
  }
  return (
    <article>
      <h1>HOME</h1>
      <button onClick={IncrementFunction}>{value}</button>
    </article>
  );
};

export default Home;
