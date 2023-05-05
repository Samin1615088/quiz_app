import classes from "../styles/Button.module.css";

export default function Button({ className, children }) {
    return (
        // If I change this div to Button. My nav button does not work
        <div className={`${classes.button} ${className}`}>
            {children}
        </div>
    );
}