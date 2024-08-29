import { useState } from "react";
import "../Css/Login.css";
import cover from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [obscure, setObscure] = useState(true);
  const obscureIcon = obscure ? faEye : faEyeSlash;
  const inputType = obscure ? "password" : "text";
  const handleObscure = () => setObscure(!obscure);

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="row content">
        <div className="col-md-6 imgs">
          <img className="image" src={cover} alt="Image" />
        </div>
        <div className="col-12 text-center mt-3">
          <h3 className="title">Lashman Camera Systems</h3>
          <h5 className="subtitle">Sign In</h5>
        </div>
        <div className="col-md-12 mt-3">
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                placeholder="User Name"
              />
              <label htmlFor="userName">User Name</label>
            </div>
            <div className="form-floating">
              <input
                type={inputType}
                className="form-control input-group"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <label htmlFor="password">Password</label>
              <button
                className="input-group-text cursor-pointer"
                type="button"
                id="obscure"
                onClick={handleObscure}
              >
                <FontAwesomeIcon icon={obscureIcon} />
              </button>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
