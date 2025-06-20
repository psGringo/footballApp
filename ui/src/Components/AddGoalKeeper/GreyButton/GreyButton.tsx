
interface DeleteButtonProps {
    name: string;
    iconName: string;
    onClick?: () => void;
}

// eslint-disable-next-line no-undef
export const GreyButton: React.FC<DeleteButtonProps> = ({name, iconName, onClick}) => {
    return (
        <a className="ui grey basic button add-btn" href="#!" onClick={onClick}>
            <span className="material-symbols">{iconName}</span>
            <span className="text-off">{name}</span>
        </a>
    );
}