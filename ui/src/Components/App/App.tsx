import {observer} from 'mobx-react-lite';
import React from 'react';
import {GoalkeeperTable} from '@/Components/GoalkeepersTable/GoalkeepersTable';
// import {LoginForm} from '@/Components/LoginForm/LoginForm';

export const App: React.FC = observer(() => {

    return (
        // <LoginForm />
        <GoalkeeperTable />
    )
});
