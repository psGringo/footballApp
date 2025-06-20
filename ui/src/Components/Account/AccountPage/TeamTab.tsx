import {observer} from 'mobx-react-lite';
import {AccountMenu} from '@/Components/Account/AccountMenu/AccountMenu';
import {TeamTabTable} from '@/Components/Account/TeanTabTable/TeamTabTable';
import {AddGoalKeeper} from '@/Components/AddGoalKeeper/AddGoalKeeper';
import {teamStore} from "@/Store/teamTabStore";


// eslint-disable-next-line no-undef
export const TeamTab: React.FC = observer(() => {

    return (
        <div>
            <AccountMenu/>
            {teamStore.showAddGoalKeeper ? <AddGoalKeeper/> : <TeamTabTable/>}
            <div className="footer">
                <p>© «Goalkeeping Organizer», 2025</p>
            </div>
        </div>
    );
});
