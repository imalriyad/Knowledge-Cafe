import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks";
import Header from "./component/Header";
import "./index.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const bookMarkHandaler = (blog) => {
    const newBookmark = [...bookmarks, blog.title];
    setBookmarks(newBookmark);
  };

  const [minutes, setMinutes] = useState(0);
  const markAsRead = (time) => {
    const newMinutes = minutes + time;
    setMinutes(newMinutes);
  };

  const bookmarkRemover = (item) => {
    const remainingBookmarks = bookmarks.filter((title) => {
      return title !== item;
    });
    setBookmarks(remainingBookmarks);
  };

  return (
    <div>
      <Header />
      <hr />
      <div className="md:flex gap-14 md:justify-between">
        <Blogs bookMarkHandaler={bookMarkHandaler} markAsRead={markAsRead} />
        <Bookmarks
          bookmarks={bookmarks}
          minutes={minutes}
          bookmarkRemover={bookmarkRemover}
        />
      </div>
    </div>
  );
}
export default App;
