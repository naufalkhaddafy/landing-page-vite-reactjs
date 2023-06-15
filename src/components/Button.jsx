import clsx from 'clsx';

const Button = (props) => {
  const { className = '', children, text } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        ' whitespace-nowrap inline-flex justify-center items-center gap-x-2 bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border-2 text-white px-4 h-10 rounded font-medium [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2'
      )}>
      {' '}
      {children || text}
    </button>
  );
};
export default Button;
