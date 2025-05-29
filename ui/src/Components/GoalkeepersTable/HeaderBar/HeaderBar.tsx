import { Image } from 'semantic-ui-react';
import styles from './HeaderBar.module.less';
import logo from '@/assets/Logo.png';
import uralLogo from '@/assets/ural-logo.svg';

export const HeaderBar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Image alt="Logo" className={styles.logo} src={logo} />
                <div className={styles.title}>
                    <div>Goalkeeping</div>
                    <div>Organizer</div>
                </div>
            </div>

            <div className={styles.menu}>
                <span className={styles.active}>Account</span>
                <span>Training</span>
                <span>Pool</span>
                <span>Graphics</span>
                <span>Game</span>
                <span>Analysis</span>
            </div>

            <div className={styles.right}>
                <Image alt="Club badge" className={styles.badge} src={uralLogo} />
            </div>
        </div>
    );
};
