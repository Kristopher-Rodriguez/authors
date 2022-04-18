import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateAuthor = () => {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        const { data } = res;
        setFullName(data.fullName);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdateAuthor = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, {
        fullName,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err.response);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <div className="m-2">
        <Link to="/">Home</Link>
      </div>
      <h4>Edit this author</h4>
      <form
        onSubmit={handleUpdateAuthor}
        className="border border-dark container"
      >
        <div className="mt-3 d-flex flex-column align-items-start">
          <label htmlFor="fullName">Name:</label>
          <input
            className="mt-1"
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
        {errors.fullName && (
          <p className="mt-2" style={{ color: "red" }}>
            {errors.fullName.message}
          </p>
        )}
        <div className="my-2">
          <Link to="/">
            <button className="btn btn-primary  m-2">Cancel</button>
          </Link>{" "}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAuthor;
