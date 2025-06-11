import styles from './Account.module.less';
import {AccountMenu} from '@/Components/Account/AccountMenu/AccountMenu';
import {AccountSecondaryMenu} from '@/Components/Account/AccountSecondaryMenu/AccountSecondaryMenu';
import {Table} from '@/Components/Table/Table';
import {activePlayers} from '@/Utils/activePlayers';
import {inactivePlayers} from '@/Utils/inactivePlayers';


// eslint-disable-next-line no-undef
export const AccountPage: React.FC = () => {

    return (
        <div>
            <AccountMenu/>
            <div className="ui bottom attached active tab segment" data-tab="tab-1">
                <AccountSecondaryMenu/>

                <div className="ui bottom attached active tab" data-tab="tab-11">
                    <a className="ui orange basic button add-btn" href="#!">
                        <span
                            className="material-symbols">add</span>
                        <span className="text-off">Add goalkeeper</span>
                    </a>
                    <Table data={activePlayers} />
                    <h2 className={styles.h2Inactive}>Inactive</h2>
                    <Table data={inactivePlayers} />
                </div>
            </div>


            <div className="ui bottom attached tab segment" data-tab="tab-2">

                <h2 style={{margin: 0.5}}>My Data</h2>

                <div className="loader-box">
                    <div className="ui active centered inline big text loader">Data</div>
                </div>

            </div>


            <div className="ui bottom attached tab segment" data-tab="tab-3">
                <div className="ui secondary menu">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
                    <a className="active item" data-tab="tab-31"><span className="material-symbols">folder</span><span
                        className="text-off">Training</span></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
                    <a className="item" data-tab="tab-32"><span className="material-symbols">folder</span><span
                        className="text-off">Exercise Pool</span></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
                    <a className="item" data-tab="tab-33"><span className="material-symbols">folder</span><span
                        className="text-off">Game</span></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="item" data-tab="tab-34"><span className="material-symbols">folder</span><span
                        className="text-off">Graphics</span></a>
                </div>

                <div className="ui bottom attached active tab" data-tab="tab-31">
                    {/* eslint-disable-next-line react/no-adjacent-inline-elements */}
                    <a className="ui orange basic button add-btn" href="#!"><span
                        className="material-symbols">add</span><span className="text-off">Create a folder</span></a>

                    <div className="loader-box">
                        <div className="ui active centered inline big text loader">Files</div>
                    </div>

                </div>

            </div>

            <div className="footer">
                <p>© «Goalkeeping Organizer», 2025</p>
            </div>
        </div>

    );
}
