const Subscribe = () => {
  return (
    <div className="bg-wh-10 px-5 py-10 text-center">
      <h4 className="text-base font-semibold">Subscribe to our Newsletter</h4>

      <p className="my-3 text-wh-500 w-5/6 mx-auto">
        Enter email address to get top news and great deals
      </p>

      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter Email Address"
      />

      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Subscribe;
