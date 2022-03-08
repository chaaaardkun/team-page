/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import cx from './Input.module.scss';
import clsx from 'clsx';

type InputProps = {
  defaultValue?: string | number;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'price';
  style?: React.CSSProperties;
  className?: string;
  autoFocus?: boolean;
  variant?: 'ifta' | 'text' | 'price';
  errorMessage?: string;
  emitTextValue?: (_value: string) => void;
  maxLength?: number;
};

const Input = ({
  defaultValue,
  name,
  label,
  placeholder,
  type = 'text',
  style,
  className,
  autoFocus,
  variant = 'ifta',
  emitTextValue,
  errorMessage,
  maxLength = 99999,
}: InputProps) => {
  const inputProps = {
    name,
    label,
    placeholder,
    style,
    className,
    autoFocus,
    maxLength,
  };

  const [inputValue, setInputValue] = React.useState(defaultValue);
  const [visibility, setVisibility] = React.useState(true);
  React.useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleInput = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLTextAreaElement;
    event.persist();
    setInputValue(target.value);
    if (emitTextValue) emitTextValue(target.value);
  };

  const renderInput = () => {
    switch (type) {
      case 'password':
        return (
          <>
            <input
              type={visibility ? type : 'text'}
              {...inputProps}
              className={clsx(
                cx['input'],
                cx['peer'],
                cx[`input__${variant}`],
                { [cx[`input__${variant}--error`]]: errorMessage },
                className
              )}
              placeholder={placeholder}
              value={inputValue}
              onInput={handleInput}
            />

            <div className={`absolute ${!visibility ? 'top-[50%]' : 'top-[53%]'} right-[11px] ${inputValue ? 'visible' : 'hidden'}`}>
              <button onClick={() => setVisibility(!visibility)} className="cursor-pointer">
                <img src={`/icons/${!visibility ? 'icon-visible.svg' : 'icon-hide.svg'}`} alt="icon-visibility" />
              </button>
            </div>
          </>
        );

      default:
        return (
          <input
          type={type}
          {...inputProps}
          className={clsx(
            cx['input'],
            cx['peer'],
            cx[`input__${variant}`],
            { [cx[`input__${variant}--error`]]: errorMessage },
            className
          )}
          placeholder={placeholder}
          value={inputValue}
          onInput={handleInput}
        />
        );
    }
  };

  return (
    <div className="relative">
      <div className={cx['input-wrapper']}>
        {renderInput()}
        <label
          className={clsx(
            variant === 'ifta'
              ? cx['input__ifta-label']
              : cx['input__text-label'],
            className
          )}
          htmlFor={name}
        >
          {variant !== 'text' ? placeholder : label}
        </label>
        {errorMessage && (
          <p className={cx['input__error-message']}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
