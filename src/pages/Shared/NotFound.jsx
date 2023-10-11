import error from "../../assets/404.gif";
const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <img src={error} alt="Not Found" />
        {/* <h1 className="text-6xl font-bold text-red-400">!404</h1> */}
        <p className="text-2xl font-semibold">Page Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
