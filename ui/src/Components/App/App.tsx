import {Button} from '@mui/material';
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import styles from './Styles.module.less'
import {appStore} from '@/Store/appStore';
import {useTranslationTyped} from '@/Utils';

export const App: React.FC = observer(() => {

    const {t, i18n} = useTranslationTyped();


    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        // GreetingsApiService.sayHello().then((greeting) => {
        //     // dispatch(appStore.setGreeting((greeting);
        // })
    }, [])

    const getLang = () => {
        return lang === 'ru' ? 'en' : 'ru';
    }

    const handleButtonClick = () => {
        setLang(getLang());
        i18n.changeLanguage(getLang());
    }

    return (
        <div className={styles.app}>
            <div className={styles.topPanel}>
                <div className={styles.name}>
                    123456
                </div>
                <div className={styles.button}>
                    <Button
                        className={styles.button} color="primary" onClick={handleButtonClick}
                        variant="contained">{getLang()}</Button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.block}>
                    {t('App.description')}
                </div>
                <div className={styles.block}>
                    {appStore.greeting || 'backend greeting expected...'}
                </div>
            </div>
        </div>)
});
