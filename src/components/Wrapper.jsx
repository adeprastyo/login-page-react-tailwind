export default function Wrapper({ children }) {
  return (
    <>
      <div
        className="min-w-screen min-h-screen flex-col justify-center bg-bottom bg-cover pt-36
        sm:pt-56 
        lg:pt-20"
        style={{ backgroundImage: "url('./sunrise-urban-house.jpg')" }}
      >
        {children}
      </div>
    </>
  );
}
