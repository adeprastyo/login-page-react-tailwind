export default function Form() {
  return (
    <form>
      <div className="mb-3 text-xs text-white sm:mb-4 sm:text-base lg:mb-5 lg:text-lg">
        <label className="block mb-1">Email</label>
        <input className="w-full rounded-xl h-9 p-2 text-white focus:outline-white bg-white bg-opacity-40 sm:px-3 sm:py-5 sm:h-11 lg:px-4 lg:py-6 lg:h-14" />
      </div>
      <div className="mb-3 text-xs text-white sm:mb-4 sm:text-base lg:mb-5 lg:text-lg">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          className="w-full rounded-xl h-9 p-2 text-white focus:outline-white bg-white bg-opacity-40 sm:px-3 sm:py-5 sm:h-11 lg:px-4 lg:py-6 lg:h-14"
        />
      </div>

      <div className="flex items-center ml-1 mb-3 text-xs sm:text-base sm:mb-4 lg:text-lg lg:mb-5">
        <input
          type="checkbox"
          id="myCheckbox"
          className="form-checkbox h-3 w-3 text-indigo-600 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
        />
        <label htmlFor="myCheckbox" className="ml-2 text-white">
          Save Password
        </label>
      </div>

      <div className="mb-2 text-sm sm:mb-3 sm:text-lg lg:mb-4 lg:text-xl">
        <button className="w-full bg-blue-400 text-white py-2 rounded-xl bg-gradient-to-r from-blue-400 to-green-400 sm:py-3 lg:py-4">
          Login
        </button>
      </div>
    </form>
  );
}
