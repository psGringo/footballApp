import styles from '@/Components/Account/AccountPage/Account.module.less';
import {AccountSecondaryMenu} from '@/Components/Account/AccountSecondaryMenu/AccountSecondaryMenu';
import {AddButton} from '@/Components/Buttons/AddButton';
import {Table} from '@/Components/Table/Table';
import {teamStore, TeamTabs} from '@/Store/teamTabStore';
import {activePlayers} from '@/Utils/activePlayers';
import {inactivePlayers} from '@/Utils/inactivePlayers';

export const TeamTabTable: React.FC = () => {

    const {activeTab} = teamStore;

    const onAddButtonClick = () => {
        teamStore.toggleShowAddGoalKeeper();
    }

    return (
        <div className="ui bottom attached active tab segment" data-tab="tab-1">
            <AccountSecondaryMenu/>

            {activeTab === TeamTabs.Goalkeeper && <div className="ui bottom attached active tab" data-tab="tab-11">
                <AddButton name="Add Goalkeeper" onClick={onAddButtonClick}/>
                <Table data={activePlayers}/>
                <h2 className={styles.h2Inactive}>Inactive</h2>
                <Table data={inactivePlayers}/>
            </div>}
            {activeTab === TeamTabs.Scouting && <div className="ui bottom attached active tab" data-tab="tab-11">
                <AddButton name="Add Scouting"/>
                <Table data={activePlayers}/>
            </div>}
        </div>
    );
}
