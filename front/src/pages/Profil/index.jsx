import styles from "./Profil.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { add, update } from '../../features/user'
import { createMessage, deleteMessage } from "../../features/message";
import { openForm } from "../../features/formProfil";
import { getUserProfil, updateUserProfil } from "../../services/api";

const Profil = () => {
  const form = useSelector((state) => state.form);
  const message = useSelector((state) => state.message);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let firstNameValue = e.target.querySelector('#firstName').value;
    let lastNameValue = e.target.querySelector('#name').value;

    if(firstNameValue === ''){
      firstNameValue = user.firstName;
    }
    if (lastNameValue === '') {
      lastNameValue = user.lastName;
    }

    const response = await updateUserProfil({firstName: firstNameValue, lastName: lastNameValue}, token.value);

    if (response.status === 200){

      dispatch(update({
        createdAt: response.body.createdAt,
        email: response.body.email,
        firstName: response.body.firstName,
        lastName: response.body.lastName
      }))
  
      dispatch(createMessage({style: styles.success, value: "User profile retrieved successully" }));
    }
  
    if (response.status === 400){
      dispatch(createMessage({style: styles.error, value: "Invalid Fields"}));
    }
    if (response.status === 500){
      dispatch(createMessage({style: styles.error, value: "Internal Server Error"}));
    }

  }

  useEffect(() => {
    const getFunctionData = async () => {
      const data = await getUserProfil(token.value);
      if (data.status === 200){
        sessionStorage.setItem('userName', data.body.firstName);
        dispatch(add(data.body));
      } else if (data.status === 401 || data.status === 500){
        navigate("/");
      }
    }

    getFunctionData();
  }, []);


  const editNameElt = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input type="text" name="firstName" id="firstName" placeholder={user.firstName}/>
        <input type="text" name="name" id="name" placeholder={user.lastName}/>
      </div>
      <div>
        <button className={styles.btnHeader} type="submit">Save</button>
        <button className={styles.btnHeader} onClick={() => [dispatch(openForm(false)), dispatch(deleteMessage())] } >Cancel</button>
      </div>
    </form>
  );

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>

        <h1>Welcome back<br />
          {form.isOpen ? '' : `${user.firstName} ${user.lastName}`}
        </h1>

        {form.isOpen ? 
          editNameElt :
          <button className={styles.editButton} onClick={() => dispatch(openForm(true))} >Edit Name</button>
        }

        {message && <span className={message.style} >{ message.value }</span>}

      </div>
      <h2 className={styles.srOnly}>Accounts</h2>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
          <p className={styles.accountAmount}>$2,082.79</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
          <p className={styles.accountAmount}>$10,928.42</p>
          <p className={styles.accountAmountDescription}>Available Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
      <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles.accountAmount}>$184.30</p>
          <p className={styles.accountAmountDescription}>Current Balance</p>
        </div>
        <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
          <button className={styles.transactionButton}>View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Profil;