interface InputProps {
  labelText?: string;
  placeholderText?: string;
  inputClassName?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  value?: string;
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  startIcon?: boolean;
  endIcon?: boolean;
  attribute?: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Input = ({
  labelText,
  placeholderText,
  inputClassName,
  error = false,
  disabled = false,
  helperText,
  value = '',
  size,
  fullWidth = false,
  multiline = false,
  rows = 3,
  startIcon,
  endIcon,
  attribute,
}: InputProps) => {
  return (
    <div className="input-group relative">
      {helperText && (
        <p className={classNames('helper-text', error && 'helper-error')}>
          {helperText}
        </p>
      )}
      {multiline ? (
        <textarea
          className={classNames(
            'form-control',
            inputClassName,
            error && 'error',
            size === 'sm' ? 'sm' : size === 'md' ? 'md' : '',
            fullWidth && 'full-width'
          )}
          rows={rows}
          placeholder={placeholderText ?? 'Placeholder'}
          defaultValue={value}
        />
      ) : (
        <>
          {startIcon && (
            <span className="material-icons form-icons start-icon">phone</span>
          )}
          <input
            id="input"
            type="text"
            className={classNames(
              'form-control',
              inputClassName,
              error && 'error',
              size === 'sm' ? 'sm' : size === 'md' ? 'md' : '',
              fullWidth && 'full-width',
              startIcon && 'pl-32'
            )}
            placeholder={placeholderText ?? 'Placeholder'}
            defaultValue={value}
            disabled={disabled}
          />
          {endIcon && (
            <span className="material-icons form-icons end-icon">lock</span>
          )}
        </>
      )}
      <label htmlFor="input" className={classNames('form-label')}>
        {labelText ?? 'Label'}
      </label>
    </div>
  );
};

export default Input;
