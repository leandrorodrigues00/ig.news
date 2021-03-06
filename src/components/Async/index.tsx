import { useEffect, useState } from "react";

export function Async() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsButtonInvisible(false);
    }, 1000);
  }, []);
  return (
    <div>
      <div>Hello world</div>
      {!isButtonInvisible && <button>Button</button>}
    </div>
  );
}
