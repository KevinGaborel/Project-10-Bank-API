import styles from "./Profil.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { add, update } from '../../features/user'
import { createMessage, deleteMessage } from "../../features/message";
import { getUserProfil, updateUserProfil } from "../../services/api";

const Profil = () => {
  const [ isForm, setIsForm ] = useState(false);

  const message = useSelector((state) => state.message);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  console.log(user, message);

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

    const response = await updateUserProfil({firstName: firstNameValue, lastName: lastNameValue});

    if (response.status === 200){
      dispatch(update({
        createdAt: response.body.createdAt,
        email: response.body.email,
        firstName: response.body.firstName,
        lastName: response.body.lastName
      }))
  
      dispatch(createMessage({style: styles.success, value: "User profile retrieved successully" }));
      console.log(message);
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
      const data = await getUserProfil();
      dispatch(add(data.body));
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
        <button className={styles.btnHeader} onClick={() => [setIsForm(false), dispatch(deleteMessage())] } >Cancel</button>
      </div>
    </form>
  );

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>

        <h1>Welcome back<br />
          {isForm ? '' : `${user.firstName} ${user.lastName}`}
        </h1>

        {isForm ? 
          editNameElt :
          <button className={styles.editButton} onClick={() => setIsForm(true)} >Edit Name</button>
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