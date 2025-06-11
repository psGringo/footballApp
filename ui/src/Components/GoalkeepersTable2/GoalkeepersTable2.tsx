import styles from './GoalkeeperTable.module.less';

// eslint-disable-next-line no-undef
export const GoalkeepersTable2: React.FC = () => {
    return (
        <div>

            <div className="ui top attached tabular inverted menu">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
                <a className="active item" data-tab="tab-1"><span className="material-symbols">group</span><span
                    className="text-off">Goalkeepers</span></a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
                <a className="item" data-tab="tab-2"><span className="material-symbols">id_card</span><span
                    className="text-off">Data</span></a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,react/no-adjacent-inline-elements */}
                <a className="item" data-tab="tab-3"><span className="material-symbols">folder_open</span><span
                    className="text-off">Files</span></a>
            </div>


            <div className="ui bottom attached active tab segment" data-tab="tab-1">

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


                <div className="ui bottom attached active tab" data-tab="tab-11">
                    <a className="ui orange basic button add-btn" href="#!">
                        <span
                            className="material-symbols">add</span>
                        <span className="text-off">Add goalkeeper</span>
                    </a>

                    <table className="ui very basic inverted table">
                        <thead>
                            <tr>

                                <th className={styles.th35}>Name</th>
                                <th className={styles.th20}>Date of birth</th>
                                <th className={styles.th20}>Team</th>
                                <th className={styles.th20}>Start of season</th>
                                <th className="right aligned"><a href="#!"><span
                                    className="material-symbols">download</span> PDF</a></th>

                            </tr>
                        </thead>
                    </table>

                    <div className="ui accordion">

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>A. 1. Alex
                                            Selikhov</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>Воспитанник БАТЭ. С 2014 г. выступал за дубль, также в 2014/15 г. выступал в
                                    юношеской лиге УЕФА. С 2015 года начал привлекаться в основную команду, где
                                    дебютировал 7 июля 2016 года в выездном матче с «Ислочью» (3:1). В 2017 году
                                    завоевал место в основном составе, провел 38 матчей (19 на 0). Был признан лучшим
                                    вратарем чемпионата и в сентябре 2016 гю подписал новый контракт с БАТЭ</p>
                                <p>В сезоне 2017 стал основным вратарём команды, провёл 23 матча в чемпионате, 4 в Лиге
                                    Чемпионов и 8 в Лиге Европы. По результатам сезона был признан лучшим вратарём
                                    чемпионата Белоруссии. Сезон 2019 в июне получил травму и до конца года выбыл. В
                                    сезоне 2020 чередовался с Антоном Чичканом, а в 2021 году вообще не появлялся на
                                    поле, хотя в феврале 2022 года продлил соглашение с БАТЭ ещё на год. Спустя 642 дня
                                    30 июня 2022 гоад впервые вышел на поле в стартовом составе дубля БАТЭ. Первый матч
                                    в Высшей Лиге сыграл 15 июля 2022 года против дзержинского «Арсенала». Всего за клуб
                                    провёл 2 матча в том сезоне.</p>
                                <p>Участник групповых турниров Лиги Европы сезонов 2017/18, 2018/19 в составе БАТЭ. По
                                    итогам первого тура группового этапа Лига Европы 2018/19, вошел в Команду недели
                                    Лиги Европы. В 2012—2013 годах играл за юношескую сборную Белоруссии в квалификации
                                    чемпионата Европы. 17 января 2015 года дебютировал за молодежную сборную Белоруссии,
                                    выйдя на замену в конце матча против Эстонии на Кубке Содружества в
                                    Санкт-Петербурге.</p>
                                <p>9 июня 2018 года дебютировал за национальную сборную Белоруссии, в товарищеском матче
                                    против сборной Финляндии.</p>
                                <p>В марте 2023 года появилась информация, что с футболистом был расторгнут контракт
                                    из-за запрета выступать в Высшей Лиге.</p>
                                <p>В июле 2023 года футболист стал игроком ФК «Урала».</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>A . 3 . Denis
                                            Sherbickiy</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>Родился в Среднеуральске<br/>
                                    Выступал за ДЮСШ Лидер и Юность<br/>
                                    В 2021 уехал в Академию Зенита и прошёл путь Зенит-м и Зенит-2</p>
                                <p>В январе 2025 пришёл в Урал-2 из Зенит-2 как свободный агент ( имея в арсенале игры в
                                    молодёжной лиге и 10 матчей в ПФЛ)</p>
                                <p>Сильные стороны:</p>
                                <p>
                                    Игра на линии (реакция)<br/>
                                    Подстраховка после ЗГП 4<br/>
                                    Передачи низом и средние во фланг (правой ногой)<br/>
                                </p>
                                <p>Зоны роста:</p>
                                <p>
                                    Игра на перехватах после ЗГП 3<br/>
                                    Игра левой ногой
                                </p>
                            </div>
                        </div>


                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>A . 2 . Aleksey
                                            Mamin</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>
                                    Рост 189,вес 84<br/>
                                    Рост папы 186,мамы 169.
                                </p>
                                <p>Двоюродный брат занимается футболом.</p>
                                <p>
                                    Ведущая рука левая<br/>
                                    Ведущая нога правая
                                </p>
                                <p>
                                    Цель: Сборная России и европейский топ-клуб<br/>
                                    Кумир: Тер-Штеген
                                </p>
                                <p>В 2025 в январе переведён в Урал-2</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>B . 5. Pavlov
                                            Vladimir</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>


                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>B . 4 . Stepan
                                            Permyakov</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>B . 7. Ykov
                                            Zarytsky</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>


                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>В . 6 . Maxim
                                            Markov</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>A . 4 . Ivan
                                            Kuznetsov</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>C . 8 . Pavel
                                            Panfilov</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>D . 10 . Artem
                                            Sokolov </strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                    </div>

                    <h2 className={styles.h2Inactive}>Inactive</h2>
                    <table className="ui very basic inverted table">
                        <thead>
                            <tr>
                                <th className={styles.th35}>Name</th>
                                <th className={styles.th20}>Date of birth</th>
                                <th className={styles.th20}>Team</th>
                                <th className={styles.th20}>Start of season</th>
                                <th className="right aligned"><a href="#!"><span
                                    className="material-symbols">download</span> PDF</a></th>
                            </tr>
                        </thead>
                    </table>
                    <div className="ui accordion">

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>Oleg Baklov</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>Nikita Alekseev</strong>
                                        </td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>C . 5 . Shataev
                                            Vycheslav</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="ui bottom attached tab" data-tab="tab-12">
                    <a className="ui orange basic button add-btn" href="#!"><span
                        className="material-symbols">add</span><span className="text-off">Add scouting</span></a>

                    <table className="ui very basic inverted table">
                        <thead>
                            <tr>
                                <th className={styles.th35}>Name</th>
                                <th className={styles.th20}>Date of birth</th>
                                <th className={styles.th20}>Team</th>
                                <th className={styles.th20}>Start of season</th>
                                <th className="right aligned"><a href="#!"><span
                                    className="material-symbols">download</span> PDF</a></th>
                            </tr>
                        </thead>
                    </table>

                    <div className="ui accordion">

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        {/* eslint-disable-next-line max-len */}
                                        <td width="35%"><i className="dropdown icon"/> <strong>Ilya Pomazun</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>

                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>Vladislav
                                            Poletaev</strong></td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>


                        <div className="title">
                            <table className="ui very basic selectable inverted table">
                                <tbody>
                                    <tr>
                                        <td width="35%"><i className="dropdown icon"/> <strong>Ivan Zemlyakov</strong>
                                        </td>
                                        <td width="20%">07.04.1994</td>
                                        <td width="20%">URAL</td>
                                        <td width="20%">20.02.2025</td>
                                        <td className="right aligned" width="5%"><a href="#!"><span
                                            className="material-symbols">edit_square</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content">
                            <div>
                                <p>. . .</p>
                                <p>. . .</p>
                                <p>. . .</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/**/}

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
