import toast from "react-hot-toast";
export const getBlogs = () => {
  let blogs = [];
  const stroedBlogs = localStorage.getItem("blogs");
  if (stroedBlogs) {
    blogs = JSON.parse(stroedBlogs);
  }
  return blogs;
};

export const saveBlog = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((d) => d.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked!");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully!");
};

export const deleteBlogs = (id) => {
  const blogs = getBlogs();
  const remaining = blogs.filter((d) => d.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Removed From Bookmark!");
};
