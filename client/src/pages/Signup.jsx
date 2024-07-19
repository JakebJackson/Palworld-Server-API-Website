import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

// eslint-disable-next-line no-unused-vars
function Signup(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="container mt-4 p-5 bg-dark border border-sky-blue border-4 rounded-5 shadow text-white">
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="usernameSignup" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="username"
            className="form-control"
            id="usernameSignup"
            aria-describedby="usernameHelp"
            onChange={handleChange}
          />
          <div id="usernameHelp" className="form-text text-light">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordSignup" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="passwordSignup"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <Link to="/login">Already have an account? Log-in here instead</Link>
    </div>
    </section>
  );
}

export default Signup;