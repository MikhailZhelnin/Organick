import React, {useState} from "react";

import styles from './Subscribe.module.scss'

const Subscribe = () => {

    const [email, setEmail] = useState('');

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setEmail('');
    }

    return (
        <div className={styles.subscribe}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2>Subscribe to our Newsletter</h2>
                    </div>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <input
                          type='text'
                          placeholder='Your Email Address'
                          className={styles.formInput}
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <button type='submit' className={styles.formButton}>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;