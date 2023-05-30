import { useEffect, useState } from "react";

export default function FormContainer({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`animate-slide-up ${show ? "animate-slide-up-active" : ""}
      mx-auto w-4/5 rounded-3xl p-8 shadow-xl bg-white bg-opacity-10 backdrop-blur-sm 
      sm:w-3/5 sm:p-12 
      lg:w-2/5 lg:p-16`}
    >
      {children}
    </div>
  );
}
