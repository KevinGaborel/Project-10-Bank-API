import styles from "./Profil.module.css";
import { useState, useEffect } from "react";
import { getUserProfil, updateUserProfil } from "../../services/api";

const Profil = () => {
  const [ isForm, setIsForm ] = useState(false);
  const [ message, setMessage ] = useState();
  const [ user, setUser ] = useState({
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updatedAt: ""
  });

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
      setUser({...user, 
        createdAt: response.body.createdAt,
        email: response.body.email,
        firstName: response.body.firstName,
        lastName: response.body.lastName
      })
  
      setMessage(<span className={styles.success} >User profile retrieved successully</span>);
    }
  
    if (response.status === 400){
      setMessage(<span className={styles.error} >Invalid Fields</span>);
    }
    if (response.status === 500){
      setMessage(<span className={styles.error} >Internal Server Error</span>);
    }

  }

  useEffect(() => {
    const getFunctionData = async () => {
      const data = await getUserProfil();
      setUser(data.body);
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
        <button className={styles.btnHeader} onClick={() => [setIsForm(false), setMessage('')] } >Cancel</button>
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

        {message && message}

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