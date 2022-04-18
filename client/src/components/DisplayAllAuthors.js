import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAllAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    console.log("useEffectFired");
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err.res));
  }, []);

  const handleDeleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        const filteredAuthors = authors.filter((author, index) => {
          return author._id !== id;
        });
        console.log(filteredAuthors);
        setAuthors(filteredAuthors);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <Link className="m-2" to="/new">
        Add an author
      </Link>
      <h4 className="mt-2">We have quotes by:</h4>
      <table className="table table-striped table-bordered w-auto">
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => {
            return (
              <tr key={author._id}>
                <td className="align-middle">{author.fullName}</td>
                <td>
                  <Link to={`/edit/${author._id}`}>
                    <button className="btn btn-primary me-2">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteAuthor(author._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllAuthors;
