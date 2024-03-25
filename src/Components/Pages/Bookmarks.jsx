import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../Utilites/Index";
import BlogCard from "./BlogCard";
import EmptyState from "../EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const stroedBlogs = getBlogs();
    setBlogs(stroedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlogs(id);
    const stroedBlogs = getBlogs();
    setBlogs(stroedBlogs);
  };
  if (blogs.length < 1) {
    return (
      <EmptyState
        message={"No Bookmarks Available!"}
        address={"/blogs"}
        label={"Go To Blogs"}
      ></EmptyState>
    );
  }
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10 py-10">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
