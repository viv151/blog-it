import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableitem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5  px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>All Blogs</h1>
      <div className="relative max-w-4xl h-4/5 mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th className="px-2 py-4 xl:px-6">#</th>
              <th className="px-2 py-4">BLOG TITLE</th>
              <th className="px-2 py-4 hidden sm:table-cell">DATE</th>
              <th className="px-2 py-4 hidden sm:table-cell">STATUS</th>
              <th className="px-2 py-4">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={blog._id}
                blog={blog}
                fetchBlogs={fetchBlogs}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
