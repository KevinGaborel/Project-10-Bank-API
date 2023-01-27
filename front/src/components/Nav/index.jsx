import styles from "./Nav.module.css";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Nav = () => {
  const user = useSelector((state) => state.user);

  const userToken = sessionStorage.getItem('userToken');
  const userName = sessionStorage.getItem('userName');

  const deleteToken = () => {
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userName');
  }

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
      <div >
        {userToken ? 
          <>
            <Link className={styles.mainNavItem} to={"./profile"} >
              <FontAwesomeIcon icon={faCircleUser} />
              {`${userName} `}
            </Link>
          <a className={styles.mainNavItem} href='/' onClick={() => deleteToken()} >
          <FontAwesomeIcon icon={faRightFromBracket} />
            {" Sign Out "}
          </a>
          </>
        : 
          <Link className={styles.mainNavItem} to={"./login"}>
            <FontAwesomeIcon icon={faCircleUser} />
            {" Sign In "}
          </Link>}
      </div>
    </nav>
  );
};

export default Nav