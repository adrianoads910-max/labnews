export const Button = ({ variant = 'primary', children, ...props }) => {
    const BUTTON_VARIANTS = {
        primary: 'text-amber-50 hover:text-brand-blue hover:bg-amber-50 text-lg font-medium border-2 rounded-full w-full p-4',
        secondary: '',
    }

    return (
        <button className={`${BUTTON_VARIANTS[variant]} cursor-pointer transition-all `} {...props}>
            {children}
        </button>
    )
}