import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EmptyList from "../../../common/Chip/EmptyList";
import { blogList } from "../../../../config/data";
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [userInput, setUserInput] = useState("");

  const [publishedText, setPublishedText] = useState("");

  useEffect(() => {
    return () => {
      let blog = blogList.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    };
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handlePublish = () => {
    setPublishedText((prevPublisedText) => prevPublisedText + userInput + " ");
    setUserInput("");
  };

  return (
    <div>
      <Link to="/">Go back</Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
          </header>
          <textarea
            placeholder="Text here..."
            value={userInput}
            onChange={handleInputChange}
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0px 2px 2px #ccc",
              resize: "none",
              outline: "none",
              whiteSpace: "normal",
            }}
          ></textarea>
          <button onClick={handlePublish}>Publish</button>
          <div contentEditable>
            <p
              style={{
                maxWidth: "1200px",
                overflowY: "auto",
                overflowX: "none",
              }}
            >
              {publishedText}
            </p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
