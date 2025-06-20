/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState, forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import styles from './AddGoalKeeper.module.css';
import 'react-datepicker/dist/react-datepicker.css';


import {GreyButton} from '@/Components/AddGoalKeeper/GreyButton/GreyButton';
import {InputWithLabel} from '@/Components/AddGoalKeeper/InputWithLabel/InputWithLabel';
import {teamStore} from '@/Store/teamTabStore';

export const AddGoalKeeper = () => {

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const onDeleteClick = () => {
        teamStore.toggleShowAddGoalKeeper();
    }

    return (
        <div className="ui bottom attached active tab segment" data-tab="tab-1">
            <h2>Add Goalkeeper</h2>

            <GreyButton iconName="delete" name="Delete" onClick={onDeleteClick}/>

            <form className="ui form">
                <div className="equal width fields">
                    <InputWithLabel name="First name"/>
                    <InputWithLabel name="Surname"/>
                    <div className="field">
                        <label>Date of birth</label>
                        <div className="ui icon input">
                            <DatePicker
                                calendarClassName={styles.datepickerDark}
                                customInput={<CustomInput/>}
                                dayClassName={() => styles.datepickerDarkDay}
                                onChange={(date) => setStartDate(date)}
                                popperClassName={styles.datepickerDark}
                                renderCustomHeader={({date, decreaseMonth, increaseMonth}) => (
                                    <div className={styles.headerRow}>
                                        <button className={styles.navButton} onClick={decreaseMonth}>←</button>
                                        <span className={styles.monthLabel}>
                                            {date.toLocaleString('default', {month: 'long'})} {date.getFullYear()}
                                        </span>
                                        {/* eslint-disable-next-line react/button-has-type */}
                                        <button className={styles.navButton} onClick={increaseMonth}>→</button>
                                    </div>
                                )}
                                selected={startDate}
                                weekDayClassName={() => styles.datepickerDarkDay}
                                wrapperClassName="ui calendar"
                            />
                        </div>
                    </div>
                </div>

                <div className="three fields">
                    <div className="field">
                        <label>Status</label>
                        <div className="ui selection dropdown">
                            <input name="Status" type="hidden"/>
                            <i className="dropdown icon"/>
                            <div className="default text">Goalkeeper</div>
                            <div className="menu">
                                <div className="item" data-value="1">Goalkeeper</div>
                                <div className="item" data-value="2">Scouting</div>
                                <div className="item" data-value="3">Inactive</div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Photo</label>
                        <div className="ui left action input">
                            <button className="ui orange basic labeled icon button" type="button">
                                <i className="material-symbols link icon">download</i> Download
                            </button>
                            <input type="text" value="photo.jpg" readOnly/>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label>Remarks</label>
                    <textarea/>
                </div>

                <div className="field">
                    <label>Start of season</label>
                    <div className={styles.flexRow}>
                        <select className="ui fluid search dropdown" style={{flex: '0 0 180px', marginRight: '1rem'}}>
                            <option value="0">2025/2026</option>
                            <option value="1">2024/2025</option>
                        </select>

                        <div style={{flex: 1}}>
                            <DatePicker
                                calendarClassName={styles.datepickerDark}
                                customInput={<CustomInput/>}
                                dayClassName={() => styles.datepickerDarkDay}
                                onChange={(date) => setStartDate(date)}
                                popperClassName={styles.datepickerDark}
                                renderCustomHeader={({date, decreaseMonth, increaseMonth}) => (
                                    <div className={styles.headerRow}>
                                        {/* eslint-disable-next-line react/button-has-type */}
                                        <button className={styles.navButton} onClick={decreaseMonth}>←</button>
                                        <span className={styles.monthLabel}>
                                            {date.toLocaleString('default', {month: 'long'})} {date.getFullYear()}
                                        </span>
                                        {/* eslint-disable-next-line react/button-has-type */}
                                        <button className={styles.navButton} onClick={increaseMonth}>→</button>
                                    </div>
                                )}
                                selected={startDate}
                                weekDayClassName={() => styles.datepickerDarkDay}
                                wrapperClassName="ui calendar"
                            />
                        </div>
                    </div>
                </div>

                <AddButton/>
            </form>
        </div>
    );
}

// Кастомный инпут с иконкой
const CustomInput = forwardRef(({value, onClick}: any, ref) => (
    <div className="ui icon input" onClick={onClick} ref={ref} style={{cursor: 'pointer'}}>
        <input placeholder="Select date" type="text" value={value} readOnly/>
        <i className="material-symbols link icon">calendar_month</i>
    </div>
));

const AddButton: React.FC = () => {

    const onClick = () => {
        alert('TODO Save')
        teamStore.toggleShowAddGoalKeeper();
    }

    return (
        <a className="ui orange button" href="account.html" onClick={onClick}>Add Goalkeeper</a>
    );
}
