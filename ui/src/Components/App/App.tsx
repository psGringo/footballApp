import {observer} from 'mobx-react-lite';
import React from 'react';
import {GoalkeepersTable2} from '@/Components/GoalkeepersTable2/GoalkeepersTable2';
import {Header} from '@/Components/Header/Header';


export const App: React.FC = observer(() => {

    return (
        // <LoginForm />
        <div className="pusher">
            <div className="main">
                <Header/>
                <GoalkeepersTable2/>
            </div>
        </div>
    )
});
