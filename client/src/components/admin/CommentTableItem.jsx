import React from "react";
import { assets } from "../../assets/assets";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-y border-gray-300">
      <td className="px-6 py-4">
        <b>Blog</b>: {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b>: {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b>: {comment.content}
      </td>

      <td className="px-6 py-4 hidden sm:table-cell">
        {BlogDate.toLocaleDateString()}
      </td>

      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              className="w-5 hover:scale-110 transition-all cursor-pointer"
              alt="Approve"
              //   onClick={() => {
              //     approveComment;
              //   }}
            />
          ) : (
            <p className="text-xs border border-green-600 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            src={assets.bin_icon}
            alt="Delete"
            className="w-5 hover:scale-110 transition-all cursor-pointer"
            // onClick={() => {
            //   deleteComment;
            // }}
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
