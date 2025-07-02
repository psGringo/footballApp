import {observer} from 'mobx-react-lite';
import React from 'react';
import styles from './App.module.less';
// import {TeamTab} from '@/Components/Account/AccountPage/TeamTab';
// import {Header} from '@/Components/Header/Header';
import SliderWidget from '@/Components/Slider/Slider';


export const App: React.FC = observer(() => {

    return (

        <div className={styles.widget}>
            <SliderWidget interval={4000}>
                <div style={{ color: 'purple' }}>
                    <h3>Слайд 1</h3>
                    <p>Транзакции за Декабрь 2025: 2 574 963,00 RUB</p>
                </div>
                <div style={{ color: 'blue' }}>
                    <h3>Слайд 2</h3>
                    <p>Расчёты с контрагентами: 1 000 400,00 RUB</p>
                </div>
                <div style={{ color: 'green' }}>
                    <h3>Слайд 3</h3>
                    <p>Кредиты: 846 383,00 RUB</p>
                </div>
            </SliderWidget>           
        </div>

    // <LoginForm />
    // <div className="pusher">
    //     <div className="main">
    //         <Header/>
    //         <TeamTab/>
    //     </div>
    // </div>
    )
});
