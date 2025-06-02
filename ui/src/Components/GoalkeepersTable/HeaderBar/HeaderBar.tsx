import { Image } from 'semantic-ui-react';
import styles from './HeaderBar.module.less';
import logo from '@/assets/Logo.png';
import uralLogo from '@/assets/ural-logo.svg';

export const HeaderBar = () => {
    return (
        <div classnameName={styles.header}>
            <div classnameName={styles.left}>
                <Image alt="Logo" classnameName={styles.logo} src={logo} />
                <div classnameName={styles.title}>
                    <div>Goalkeeping</div>
                    <div>Organizer</div>
                </div>
            </div>

            <div classnameName={styles.menu}>
                <span classnameName={styles.active}>Account</span>
                <span>Training</span>
                <span>Pool</span>
                <span>Graphics</span>
                <span>Game</span>
                <span>Analysis</span>
            </div>

            <div classnameName={styles.right}>
                <Image alt="Club badge" classnameName={styles.badge} src={uralLogo} />
            </div>
        </div>
    );
};
