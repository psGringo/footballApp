import {observer} from 'mobx-react-lite';
import React from 'react';
import {LoginForm} from "@/Components/LoginForm/LoginForm";

export const App: React.FC = observer(() => {



    return (
        <LoginForm />
    )
});
