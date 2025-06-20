import {makeAutoObservable} from 'mobx';

export enum TeamTabs {
    Goalkeeper,
    Scouting
}

export class TeamTabStore {
    activeTab: TeamTabs = TeamTabs.Goalkeeper;

    showAddGoalKeeper: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setActiveTab(tab: TeamTabs) {
        this.activeTab = tab;
    }

    toggleShowAddGoalKeeper() {
        this.showAddGoalKeeper = !this.showAddGoalKeeper;
    }
}

export const teamStore = new TeamTabStore();
