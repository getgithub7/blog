import React from "react";
import { blogList } from "../../../../config/data";
import BlogList from "../../BlogList";
import { Header } from "../../Header";
import SearchBar from "../../SearchBar";
import { useState } from "react";
import EmptyList from "../../../common/Chip/EmptyList";
const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes.apply(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };
  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogList} />}
    </div>
  );
};

export default Home;
