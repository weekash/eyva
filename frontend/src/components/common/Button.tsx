interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: 'primary' | 'secondary';
    classes?:string;
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'primary',classes="", ...rest }) => {
    const baseClasses = 'px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline';
    const variantClasses = variant === 'primary'
        ? 'bg-purple-500 text-white'
        : 'bg-white text-gray-700 border border-gray-400';

    return (
        <button className={`${baseClasses} ${variantClasses} ${classes}`} {...rest}>
            {text}
        </button>
    );
};

export default Button;
