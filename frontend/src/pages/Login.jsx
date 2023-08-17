import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login () {
  return (
    <div>
      <h2> Login</h2>
      <LoginForm />
      <p>
        Don't have an account? <NavLink to="/register">Registration</NavLink>
      </p>
    </div>
  );
}
