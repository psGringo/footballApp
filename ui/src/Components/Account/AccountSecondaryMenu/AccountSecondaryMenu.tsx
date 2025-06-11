// eslint-disable-next-line no-undef
export const AccountSecondaryMenu: React.FC = () => {
    return (
        <div className="ui secondary menu">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
            <a className="active item" data-tab="tab-11">
                <span className="material-symbols">person</span>
                <span className="text-off">Goalkeeper</span>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="item" data-tab="tab-12">
                <span className="material-symbols">child_care</span>
                <span className="text-off">Scouting</span>
            </a>
        </div>
    );
}
