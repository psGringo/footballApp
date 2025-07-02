interface InputWithLabelProps {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({name, placeholder, value, onChange}) => {
    return (
        <div className="field">
            <label>{name}</label>
            <input onChange={onChange} placeholder={placeholder} type="text" value={value}/>
        </div>
    );
}
