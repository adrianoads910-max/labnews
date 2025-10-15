export const Button = ({ variant = 'primary', asChild = false, children, ...props }) => {
  const BUTTON_VARIANTS = {
    primary: 'text-amber-50 hover:text-brand-blue hover:bg-amber-50 text-lg font-medium border-2 rounded-full p-6',
    secondary: 'bg-brand-blue text-amber-50 font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 shadow-md',
  };

  const Comp = asChild ? 'span' : 'button';

  return (
    <Comp className={`${BUTTON_VARIANTS[variant]} cursor-pointer transition-all`} {...props}>
      {children}
    </Comp>
  );
};
