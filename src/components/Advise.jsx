import { useEffect, useState } from "react";

const Advise = (props) => {
  const [advise, setAdvise] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = res.json();
      setAdvise(data.slip.advice);
      setCount((count) => count + 1)
  }

    useEffect(function () {
      getAdvice()
    }, [])
  return (
    <div>
      <h1>{advise}</h1>
          <button onClick={getAdvice}>Get advise</button>
          <p>You have read {count} advice</p>
    </div>
  );
};

export default Advise;
