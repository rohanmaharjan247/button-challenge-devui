interface ButtonProps {
  text?: string;
  variant?: 'default' | 'outline' | 'text';
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?:
    | 'add_shopping_cart'
    | 'storefront'
    | 'house'
    | 'coffee'
    | 'local_shipping';
  endIcon?:
    | 'add_shopping_cart'
    | 'storefront'
    | 'house'
    | 'coffee'
    | 'local_shipping';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'danger';
  className?: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

function setClasses(buttonProps: ButtonProps) {}

const Button = ({
  text,
  variant,
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size,
  color,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        'btn',
        className,
        !disableShadow && 'drop-shadow',
        variant === 'outline'
          ? 'outline'
          : variant === 'text'
          ? 'text'
          : 'default',
        disableShadow && 'disable-shadow',
        size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : 'btn-md',
        color === 'primary'
          ? 'btn-primary'
          : color === 'secondary'
          ? 'btn-secondary'
          : color === 'danger'
          ? 'btn-danger'
          : 'btn-default'
      )}
      disabled={disabled}
    >
      {startIcon && <span className="material-icons icons">{startIcon}</span>}
      <span
        className={classNames(
          'btn-inner-text',
          startIcon && 'ml',
          endIcon && 'mr'
        )}
      >
        {text ?? 'Default'}
      </span>
      {endIcon && <span className="material-icons icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
