import { Formik, Form, Field} from 'formik';

export default function RegisterForm  () {
  return (
    <div>
      
      <Formik>
        <Form>
        <Field type="text" name="name"  placeholder="Name" />
          <Field type="email" name="email"  placeholder="Email" />
          <Field type="password" name="password" placeholder="Зassword" />
          <Field type="password" name="confirmPassword" placeholder="Сonfirm Password" />
          <button type="submit" >
          Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
