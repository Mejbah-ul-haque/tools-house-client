import React from 'react';
import useBlogs from '../../hooks/useBlog';
import Blog from '../Blog/Blog';

const Blogs = () => {
  const [blogs] = useBlogs([]);
  return (
    <div className="container my-24 mx-auto ">
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{
          blogs.map(blog =><Blog key={blog._id} blog={blog}></Blog>)
        }
			</div>
		</div>
  );
};

export default Blogs;