import React, {useState} from 'react';
import styles from './Table.module.less';
import {ITableRowProps, TableRow} from '@/Components/Account/GoalkeeperTableRow/TableRow';

interface ITableProps {
    data: ITableRowProps[];
}

export const Table: React.FC<ITableProps> = ({data}) => {

    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <div>
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
                {data.map((p) =>
                    <TableRow
                        key={p.id} {...p}
                        isActive={activeId === p.id}
                        onClick={() => setActiveId((prevId) => (prevId === p.id ? null : p.id))}
                    />
                )}
            </div>
        </div>
    );
}
