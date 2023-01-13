import styles from "./Nav.module.css";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Nav = () => {
  return(
    <nav className={styles.mainNav}>
      <Link className={styles.mainNavLogo} to={"./"}>
        <img
          className={styles.mainNavLogoImage}
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </Link>
      <div>
        <Link className={styles.mainNavItem} to={"./login"}>
          <FontAwesomeIcon icon={faCircleUser} />
          {" Sign In "}
        </Link>
      </div>
    </nav>
  );
};

export default Nav