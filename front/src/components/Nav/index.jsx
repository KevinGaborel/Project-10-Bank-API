import styles from "./Nav.module.css";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { deleteToken } from "../../features/token";


const Nav = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

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
        {token.value ? 
          <>
            <Link className={styles.mainNavItem} to={"./profile"} >
              <FontAwesomeIcon icon={faCircleUser} />
              {`${user.firstName} `}
            </Link>
          <a className={styles.mainNavItem} href='/' onClick={() => dispatch(deleteToken())} >
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