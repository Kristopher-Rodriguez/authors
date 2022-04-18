import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleAddAuthor = (e) => {
    e.preventDefault();
    console.log(fullName);
    axios
      .post("http://localhost:8000/api/authors", {
        fullName,
      })
      .then((res) => {
        console.log("success", res);
        console.log(res.data);
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
      <h4>Add a new author:</h4>
      <form onSubmit={handleAddAuthor} className="border border-dark container">
        <div className="mt-3 d-flex flex-column align-items-start">
          <label htmlFor="fullName">Name:</label>
          <input
            className="mt-1"
            type="text"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        {errors.fullName && (
          <p className="mt-2" style={{ color: "red" }}>{errors.fullName.message}</p>
        )}
        <div className="my-2">
          <Link to="/"><button className="btn btn-primary  m-2">Cancel</button></Link>{" "}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthorForm;
