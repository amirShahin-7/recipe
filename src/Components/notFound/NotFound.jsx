
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[700px] space-y-6 px-4">
      <div className="relative">
        <h1 className="text-9xl font-bold text-orange-500 opacity-20 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-lg">
            <span className="text-6xl">🍽️</span>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3 max-w-md">
        <h2 className="text-3xl font-bold text-gray-800">
          Oops! Recipe Not Found
        </h2>
        <p className="text-lg text-gray-600">
          Looks like this meal has been removed from the menu or doesn't exist
          yet.
        </p>
        <p className="text-sm text-gray-500">
          Don't worry, we have plenty of other delicious recipes waiting for
          you!
        </p>
      </div>

      <Link
        to="/"
        className="mt-4 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
