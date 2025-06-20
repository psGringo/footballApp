interface InputWithLabelProps {
    name: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({name}) => {
    return (
        <div className="field">
            <label>{name}</label>
            <input placeholder="First Name" type="text"/>
        </div>
    );
}