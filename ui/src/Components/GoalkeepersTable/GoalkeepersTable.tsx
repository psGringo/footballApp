import {Table, Button, Icon} from 'semantic-ui-react';
import styles from './GoalkeeperTable.module.less';
import {HeaderBar} from '@/Components/GoalkeepersTable/HeaderBar/HeaderBar';

const goalkeepers = [
    {name: 'A. 1. Alex Selikhov', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'A. 3. Denis Sherbickiy', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'A. 2. Aleksey Mamin', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'B. 5. Pavlov Vladimir', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'B. 4. Stepan Permyakov', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'B. 7. Ykov Zarytsky', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'B. 6. Maxim Markov', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'A. 4. Ivan Kuznetsov', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'C. 8. Pavel Panfilov', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
    {name: 'D. 10. Artem Sokolov', birth: '07.04.1994', team: 'URAL', season: '20.02.2025'},
];

export const GoalkeeperTable = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <HeaderBar/>


                <div className={styles.wrapper}>
                    <div className={styles.actionsRow}>
                        <Button className={styles.addBtn} labelPosition="left" icon>
                            <Icon name="plus"/> Add goalkeeper
                        </Button>
                        <Button className={styles.pdfBtn} basic icon>
                            <Icon name="download"/> PDF
                        </Button>
                    </div>

                    <Table className={styles.table} celled inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Date of birth</Table.HeaderCell>
                                <Table.HeaderCell>Team</Table.HeaderCell>
                                <Table.HeaderCell>Start of season</Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {goalkeepers.map((gk, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell><Icon name="caret right"/> {gk.name}</Table.Cell>
                                    <Table.Cell>{gk.birth}</Table.Cell>
                                    <Table.Cell>{gk.team}</Table.Cell>
                                    <Table.Cell>{gk.season}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Icon className={styles.editIcon} name="edit outline" link/>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};
