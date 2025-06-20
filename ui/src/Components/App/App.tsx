import {observer} from 'mobx-react-lite';
import React from 'react';
import {TeamTab} from '@/Components/Account/AccountPage/TeamTab';
import {Header} from '@/Components/Header/Header';


export const App: React.FC = observer(() => {

    return (
        // <LoginForm />
        <div className="pusher">
            <div className="main">
                <Header/>
                <TeamTab/>
            </div>
        </div>
    )
});
