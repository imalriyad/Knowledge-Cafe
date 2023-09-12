import PropTypes from "prop-types";
import { BsFillBookmarkStarFill } from "react-icons/bs";
const Blog = ({ blog, bookMarkHandaler, markAsRead }) => {
  const {
    cover,
    title,
    posted_date,
    reading_time,
    author,
    author_img,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 mt-14">
      <img className="rounded-lg w-full" src={cover} alt="" />
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-4">
          <img className="w-[55px]" src={author_img} alt="" />
          <div>
            <h2 className="font-bold text-xl">{author}</h2>
            <p className="text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="text-lg ">
            {reading_time < 10 ? "0" + reading_time : reading_time} min read
          </h1>
          <button onClick={() => bookMarkHandaler(blog)} className="text-2xl">
            <BsFillBookmarkStarFill />
          </button>
        </div>
      </div>
      <h1 className="text-3xl mt-4 font-bold">{title}</h1>
      <div className="flex text-[#11111199] text-lg mt-2 gap-3">
        {hashtags.map((item) => (
          <p key={item}>#{item}</p>
        ))}
      </div>
      <p
        onClick={() => markAsRead(parseInt(reading_time))}
        className="underline cursor-pointer w-max text-[#6047EC] mt-2 font-semibold"
      >
        Mark as read
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookMarkHandaler: PropTypes.func.isRequired,
  markAsRead: PropTypes.func,
};
export default Blog;
