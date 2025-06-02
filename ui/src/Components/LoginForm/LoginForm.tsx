/* eslint-disable jsx-a11y/alt-text */
import Logo from '@/assets/img/Logo.png';
import styles from './LoginForm.module.less';

export const LoginForm: React.FC = () => {

    return (
        <div className="login-page">
            <div className="ui segment login-form ">
                <div className="logo">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={Logo}/>
                    <span>Goalkeeping<br/>Organizer</span>
                </div>
                <form className="ui form">
                    <div className="field">
                        <label>Login</label>
                        <input name="login" placeholder="Login" type="text"/>
                    </div>
                    <div className="field">
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label>Password</label>
                        <input name="password" placeholder="Password" type="text"/>
                    </div>
                    <div className={styles.buttonContainer}>
                        <a className={`ui orange basic button ${styles.button}`} href="account.html">Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
};
