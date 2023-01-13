import styles from "./Login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return(
    <main className={`${styles.main} ${styles.bgDark}`}>
    <section className={styles.signInContent} >
      <FontAwesomeIcon icon={faUserCircle} className={`${styles.signInIcon} ${styles.fa}`} />
      <h1>Sign In</h1>
      <form>
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input type="text" id={"username"} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className={styles.signInButton}>Sign In</button>
      </form>
    </section>
  </main>
  );
};

export default Login;