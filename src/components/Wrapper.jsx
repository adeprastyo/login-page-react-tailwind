import { useEffect, useState } from "react";

export default function Wrapper({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center bg-bottom bg-cover"
        style={{ backgroundImage: "url('./sunrise-urban-house.jpg')" }}
      >
        <div
          className={`animate-slide-up ${show ? "animate-slide-up-active" : ""}
        mx-auto w-4/5 rounded-3xl p-8 shadow-xl bg-white bg-opacity-10 backdrop-blur-sm sm:w-3/5 sm:p-12 lg:w-2/5 lg:p-16`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
