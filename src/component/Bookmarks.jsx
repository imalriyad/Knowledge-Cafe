import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, minutes, bookmarkRemover }) => {
  return (
    <div className="w-1/3 mb-20 mt-14 mx-auto text-center">
      <h1 className="bg-[#6047EC1A] px-6 py-4 rounded-md border-[#6047EC] border-[1px] text-[#6047EC] font-semibold">
        Spent time on read : {minutes} Minutes
      </h1>
      <div className="bg-[#1111110D] text-left p-4 mt-8 rounded">
        <h1 className="text-xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>

        {bookmarks.map((item) => {
          return (
            <div
              onClick={() => bookmarkRemover(item)}
              key={item}
              className="bg-white cursor-pointer p-4 rounded mt-4 font-semibold"
            >
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  minutes: PropTypes.number,
  bookmarkRemover: PropTypes.func,
};
export default Bookmarks;
