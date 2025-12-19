/** @format */

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[700px] space-y-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
            <span className="text-3xl animate-pulse">🍽️</span>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-700 animate-pulse">
          Preparing your meals...
        </h3>
        <p className="text-sm text-gray-500">
          Just a moment, we're cooking something delicious
        </p>
      </div>

      <div className="flex space-x-2">
        <div
          className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
