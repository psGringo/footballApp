// eslint-disable-next-line no-undef
export const AccountMenu: React.FC = () => {

    return <div className="ui top attached tabular inverted menu">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
        <a className="active item" data-tab="tab-1"><span className="material-symbols">group</span><span
            className="text-off">Team</span></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
        <a className="item" data-tab="tab-2"><span className="material-symbols">id_card</span><span
            className="text-off">Trainer</span></a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
        <a className="item" data-tab="tab-3"><span className="material-symbols">lan</span><span
            className="text-off">Scheme</span></a>
        <a className="item" data-tab="tab-3"><span className="material-symbols">folder_open</span><span
            className="text-off">Files</span></a>
    </div>;
}
