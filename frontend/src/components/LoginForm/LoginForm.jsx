import { Formik, Form, Field } from "formik";
import { eyeIcon } from "../../images/icons";

export default function LoginForm () {
  return (
    <div>
      <Formik>
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <Field type="password" name="password" placeholder="Зassword" />
          {/* {eyeIcon} */}
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
