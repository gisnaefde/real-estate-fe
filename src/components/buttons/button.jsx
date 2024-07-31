const Button = ({ children, style, onClick, className}) => {
    return (
        <button className={className} style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
