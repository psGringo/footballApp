import React from 'react';
import {teamStore, TeamTabs} from '@/Store/teamTabStore';
import {observer} from 'mobx-react-lite';

interface TabProp {
    active?: boolean;
    name: string;
    callback: () => void;
}

// eslint-disable-next-line no-undef
const TabHeader: React.FC<TabProp> = ({active, name, callback}) => {

    const onClick = () => {
        callback();
    };

    return (
        <a className={`${active ? 'active' : null} item`} data-tab="tab-11" onClick={onClick}>
            <span className="material-symbols">person</span>
            <span className="text-off">{name}</span>
        </a>
    );
}

// eslint-disable-next-line no-undef
export const AccountSecondaryMenu: React.FC = observer(() => {

    const {activeTab} = teamStore;

    return (
        <div className="ui secondary menu">
            <TabHeader
                active={activeTab === TeamTabs.Goalkeeper}
                callback={() => {
                    teamStore.setActiveTab(TeamTabs.Goalkeeper)
                }}
                name="Goalkeeper"

            />
            <TabHeader
                active={activeTab === TeamTabs.Scouting}
                callback={() => {
                    teamStore.setActiveTab(TeamTabs.Scouting)
                }}
                name="Scouting"
            />
        </div>
    );
});
