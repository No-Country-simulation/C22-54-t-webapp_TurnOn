
type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string;
}

export const Button = ({ label, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={className}>
            {label}
        </button>
    ) 
}