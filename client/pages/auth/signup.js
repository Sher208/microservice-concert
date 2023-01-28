import { useRouter } from "next/router";
import React, { useState } from "react";
import useRequest from "../../hooks/use-request";

const Signup = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: form,
    onSuccess: () => router.push("/"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          value={form.email}
          onChange={(e) =>
            setForm((data) => ({
              ...data,
              email: e.target.value,
            }))
          }
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type={"password"}
          value={form.password}
          onChange={(e) =>
            setForm((data) => ({
              ...data,
              password: e.target.value,
            }))
          }
          className="form-control"
        />
      </div>
      {errors}
      <button className="btn btn-primary mt-2">Sign Up</button>
    </form>
  );
};

Signup.propTypes = {};

export default Signup;
