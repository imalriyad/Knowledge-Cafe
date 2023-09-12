import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ bookMarkHandaler, markAsRead, bookmarkRemover }) => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((item, index) => (
        <Blog
          key={index}
          bookMarkHandaler={bookMarkHandaler}
          blog={item}
          markAsRead={markAsRead}
          bookmarkRemover={bookmarkRemover}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  bookMarkHandaler: PropTypes.func.isRequired,
  markAsRead: PropTypes.func,
  bookmarkRemover: PropTypes.func,
};
export default Blogs;
