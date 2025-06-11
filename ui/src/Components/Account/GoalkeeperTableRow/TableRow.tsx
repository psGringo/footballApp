export interface ITableRowProps {
    id: number;
    name: string;
    birthDate: string;
    team: string;
    joinDate: string;
    avatar: string;
    biography: string;
    transferNote: string;
    strengths: string;
    weaknesses: string;
    isActive?: boolean;
    onClick?: () => void;
}


// eslint-disable-next-line no-undef
export const TableRow: React.FC<ITableRowProps> = ({
    name,
    birthDate,
    team,
    joinDate,
    avatar,
    biography,
    transferNote,
    strengths,
    weaknesses,
    isActive,
    onClick
}) => {
    return (
        <div onClick={onClick}>
            <div className={`title ${isActive ? 'active' : ''}`}>
                <table className="ui very basic selectable inverted table">
                    <tbody>
                        <tr>
                            <td width="35%"><i className="dropdown icon"/> <strong>{name}</strong></td>
                            <td width="20%">{birthDate}</td>
                            <td width="20%">{team}</td>
                            <td width="20%">{joinDate}</td>
                            <td className="right aligned" width="5%"><a href="#!"><span
                                className="material-symbols">edit_square</span></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={`content ${isActive ? 'active' : ''}`}>
                <div className={`ui grid transition ${isActive ? 'visible' : 'hidden'}`}>
                    <div
                        className={`six wide mobile  five wide tablet four wide computer three wide large screen  three wide widescreen column`
                        }>
                        <div className="profile-img"><img alt="ava" src={avatar}/></div>
                    </div>
                    <div
                        className={`sixteen wide mobile  eleven wide tablet twelve wide computer thirteen wide large screen thirteen wide widescreen  column`}>
                        <p>{biography}</p>
                        <p>{transferNote}</p>
                        <p>{strengths}</p>
                        <p>{weaknesses}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
