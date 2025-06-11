// eslint-disable-next-line no-undef
export const Header: React.FC = () => {
    return (
        <div className="ui text inverted menu">
            <div className="item" id="toggle"><span className="material-symbols">menu</span></div>
            <div className="item">
                {/* eslint-disable-next-line react/no-adjacent-inline-elements */}
                <a className="logo" href="index.html">
                    <img alt="Logo" src="src/assets/Logo.png"/>
                    <span className="text-off">Goalkeeping<br/>Organizer</span>
                </a>
            </div>

            <div className="right center menu">
                <a className="item text-off active" href="#!">Account</a>
                <a className="item text-off" href="#!">Training</a>
                <a className="item text-off" href="#!">Pool</a>
                <a className="item text-off" href="#!">Graphics</a>
                <a className="item text-off" href="#!">Game</a>
                <a className="item text-off" href="#!">Analysis</a>
            </div>

            <div className="right menu">
                <div className="item">
                    <a className="logo-profile" href="#!"><img alt="ural-logo" src="src/assets/ural-logo.svg"/></a>
                </div>
                <div className="ui dropdown item inverted">
                    <div><span className="material-symbols">sports_and_outdoors</span></div>
                    <div className="menu">
                        <a className="item" href="#!"><span className="material-symbols">settings</span>Настройки</a>
                        <a className="item" href="index.html"><span className="material-symbols">logout</span> Выход</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
