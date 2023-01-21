import styles from "./Login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { getLogin } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: '',
  });
  const [ token, setToken ] = useState();
  const [ error, setErreur ] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInputValue = e.target.querySelector('#email').value;
    const passwordInputValue = e.target.querySelector('#password').value;

    if (emailInputValue && passwordInputValue){
      setForm({email: emailInputValue, password: passwordInputValue});
    }

  };

  useEffect(() => {
    const getFunctionData = async () => {
      const data = await getLogin(form);
      if (data.status === 200){
        setToken(data.body.token);
      }else if (data.status === 400){
        setErreur('Invalid Fields');
      } else if (data.status === 500){
        setErreur('Internal Server Error');
      }
    }

    if (form.email && form.password){
      getFunctionData();
      // a conserver dans un state globale redux
      if (token){
        localStorage.setItem('userToken', token);
        navigate("/profile");
      }
    }
  }, [form, token]);
  

  return(
    <main className={`${styles.main} ${styles.bgDark}`}>
    <section className={styles.signInContent} >
      <FontAwesomeIcon icon={faUserCircle} className={`${styles.signInIcon} ${styles.fa}`} />
      <h1>Sign In</h1>
      {error && <span className={styles.error} >{error}</span>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id={"email"} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id={"password"} />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id={"remember-me"} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className={styles.signInButton}>Sign In</button>
      </form>
    </section>
  </main>
  );
};

export default Login;