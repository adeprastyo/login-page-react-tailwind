function App() {
  // ukuran sm (min-width 640px)
  // ukuran lg (min-width 1024px)
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="w-4/5 rounded-xl p-8 shadow-xl bg-slate-50
                  sm:w-3/5 sm:p-12
                  lg:w-2/5 lg:p-16"
      >
        {/* header */}
        <div
          className="text-center mb-4 
          sm:mb-5
          lg:mb-6
        "
        >
          <h1
            className="text-xl font-sans text-transparent font-black bg-clip-text bg-gradient-to-r from-blue-400 to-green-400
                        sm:text-4xl
                        lg:text-5xl"
          >
            LOGIN
          </h1>
          <p
            className="text-xs text-slate-500 font-light
                        sm:text-base
                        lg:text-lg"
          >
            Don't have an account?{" "}
            <span className="text-blue-600 font-normal">register</span>
          </p>
        </div>
        {/* input */}
        <form>
          <div
            className="mb-3 text-xs
                          sm:mb-4 sm:text-base sm:font-medium 
                          lg:mb-5 lg:text-lg"
          >
            <label className="block mb-1 text-slate-500">Email</label>
            <input
              className="w-full rounded-lg h-9 p-2 text-slate-600 focus:outline-blue-400
            sm:px-3 sm:py-5 sm:h-11
            lg:px-4 lg:py-6 lg:h-14"
            />
          </div>
          <div
            className="mb-3 text-xs
                          sm:mb-4 sm:text-base sm:font-medium
                          lg:mb-5 lg:text-lg"
          >
            <label className="block mb-1 text-slate-500">Password</label>
            <input
              className="w-full rounded-lg h-9 p-2 text-slate-600 focus:outline-blue-400
            sm:px-3 sm:py-5 sm:h-11
            lg:px-4 lg:py-6 lg:h-14"
            />
          </div>

          <div
            class="flex items-center ml-1 mb-3 text-xs
          sm:text-base sm:mb-4
          lg:text-lg lg:mb-5"
          >
            <input
              type="checkbox"
              id="myCheckbox"
              class="form-checkbox h-3 w-3 text-indigo-600
              sm:h-4 sm:w-4
              lg:h-5 lg:w-5"
            />
            <label for="myCheckbox" class="ml-2 text-slate-500">
              Save Password
            </label>
          </div>

          <div
            className="mb-2 text-sm 
          sm:mb-3 sm:text-lg
          lg:mb-4 lg:text-xl"
          >
            <button
              className="w-full bg-blue-400 text-white py-2 rounded-sm bg-gradient-to-r from-blue-400 to-green-400
            sm:py-3
            lg:py-4"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
