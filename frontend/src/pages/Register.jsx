import { NavLink } from "react-router-dom";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm />
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
}
