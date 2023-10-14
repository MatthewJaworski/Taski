import { cva, VariantProps } from 'class-variance-authority';

const inputClasses = cva(
  [
    'relative',
    'cursor-pointer',
    'outline-none',
    'shadow-sm',
    'placeholder:text-black',
    'text-black',
    'px-4',
    'py-3',
    'rounded-lg',
    'bg-primary',
    'hover:bg-primary/70',
    'duration-200',
    'ease-in-out',
    'font-semibold',
  ],
  {
    variants: {
      type: {
        text: ['bg-primary', 'text-black'],
        checkbox: [
          'bg-transparent',
          'text-black',
          'checked:bg-secondary',
          'bg-primary',
          'checkbox',
        ],
      },
    },
    defaultVariants: {
      type: 'text',
    },
  }
);

const wrapperClasses = cva(['flex', 'justify-start', 'w-full'], {
  variants: {
    labelPosition: {
      top: ['flex-col'],
      left: ['flex-row', 'items-center', 'justify-center', 'gap-2'],
      right: ['flex-row-reverse', 'items-center', 'justify-end', 'gap-2'],
      bottom: ['flex-col-reverse'],
    },
  },
  defaultVariants: {
    labelPosition: 'top',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputClasses>,
    VariantProps<typeof wrapperClasses> {
  type: 'text' | 'checkbox';
}
const Input: React.FC<InputProps> = ({
  name,
  type,
  className,
  id,
  labelPosition,
  ...props
}) => {
  return (
    <div className={wrapperClasses({ labelPosition })}>
      <label className="m-1 text-sm font-semibold" htmlFor={id}>
        {name}
      </label>
      <input
        name={id}
        className={inputClasses({ type, className })}
        type={type}
        id={id}
        {...props}
      />
    </div>
  );
};
export default Input;
