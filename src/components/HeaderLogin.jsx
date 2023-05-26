export default function HeaderLogin() {
  return (
    <div className="text-center mb-4 sm:mb-5 lg:mb-6">
      <h1 className="text-xl font-sans text-transparent font-black bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 sm:text-4xl lg:text-5xl">
        LOGIN
      </h1>
      <p className="text-xs text-white font-light sm:text-base lg:text-lg">
        Don't have an account?{" "}
        <span className="text-blue-300 font-medium">register</span>
      </p>
    </div>
  );
}
