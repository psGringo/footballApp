import {observer} from 'mobx-react-lite';
import React from 'react';
import {AccountPage} from '@/Components/Account/AccountPage/AccountPage';
import {Header} from '@/Components/Header/Header';


export const App: React.FC = observer(() => {

    return (
        // <LoginForm />
        <div className="pusher">
            <div className="main">
                <Header/>
                <AccountPage/>
            </div>
        </div>
    )
});
