import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import Axios from "axios";

function LoginPage() {
  const url="http://localhost:8080/login";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newData={...formData};
    newData[e.target.id]=e.target.value;
    setFormData(newData);
    const { id, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? !prevData[id] : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login submitted successfully!");
    }
  };

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      userName:formData.email,
      password:formData.password
    }).then((res)=>{
      if(res.data==true){
        sessionStorage.setItem("email",formData.email);
        console.log(res.data);
        navigate("/");
        alert("login Successful");
      }
      else{
        console.log("UserName/Password incorrect");
        alert("UserName/Password incorrect");
      }
    })
  }

  return (
    <>
    <div>
      <Navbar/>
    <div className="LoginPage">
      <section className="vh-100 overflow-auto">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>
                      <form onSubmit={(e)=>submit(e)} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              value={formData.email}
                              className={`form-control ${
                                errors.email ? "is-invalid" : ""
                              }`}
                              onChange={(e)=>handleChange(e)}
                            />
                            <label className="htmlForm-label" htmlFor="email">
                              Your Email
                            </label>
                            {errors.email && (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              value={formData.password}
                              className={`form-control ${
                                errors.password ? "is-invalid" : ""
                              }`}
                              onChange={(e)=>handleChange(e)} 
                            />
                            <label
                              className="htmlForm-label"
                              htmlFor="password"
                            >
                              Password
                            </label>
                            {errors.password && (
                              <div className="invalid-feedback">
                                {errors.password}
                              </div>
                            )}
                          </div>
                          <div className="toggle">
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={handleTogglePassword}
                            >
                              {showPassword ? "Hide" : "Show"}
                            </button>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Login
                          </button>
                        </div>

                        <div className="d-flex justify-content-center mb-4">
                          <p className="text-center">
                            Don't have an account?{" "}
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() => navigate("/registration")}
                            >
                              Sign Up
                            </button>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                      <img
                        src="https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8="
                        className="img-fluid"
                        alt="Illustration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
}

export default LoginPage;
