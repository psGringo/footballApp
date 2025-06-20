interface AddButtonProps {
    name: string;
    onClick?: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({name, onClick}) => {
    return (
        <a className="ui orange basic button add-btn" href="#!" onClick={onClick}>
            <span
                className="material-symbols">add</span>
            <span className="text-off">{name}</span>
        </a>
    );
}