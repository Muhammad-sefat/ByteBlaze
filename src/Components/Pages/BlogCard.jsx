import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import error from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { id, title, descrition, published_at, cover_image } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || error}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toDateString()}
          </span>
          <p>{descrition}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-blue-600 p-2 rounded-full ml-5 hover:scale-105 -top-5 -right-3 hover:bg-red-600"
        >
          <MdDeleteForever size={25}></MdDeleteForever>
        </div>
      )}
    </div>
  );
};
BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BlogCard;
