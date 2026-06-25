import styles from "./Button.module.css";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

export default function Button({ children, className = "", ...rest }: ButtonProps) {

    return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
    );
}