import styles from "./Profil.module.css";
import { useState, useEffect } from "react";
import { getUserProfil } from "../../services/api";

const Profil = () => {
  const [ isForm, setIsForm ] = useState(false);

  useEffect(() => {
    getUserProfil();
  }, []);

  const editNameElt = (
    <form action="">
      <div>
        <input type="text" name="firstName" id="firstName" placeholder=""/>
        <input type="text" name="name" id="name" placeholder="" />
      </div>
      <div>
        <button className={styles.btnHeader} type="submit">Save</button>
        <button className={styles.btnHeader} >Cancel</button>
      </div>
    </form>
  );

  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>
        <h1>Welcome back<br />
          {isForm ? '' : 'Tony Jarvis!'}
        </h1>
        {isForm ? 
          editNameElt :
          <button className={styles.editButton} onClick={() => setIsForm(true)} >Edit Name</button>}
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