import * as React from 'react';
import clsx from 'clsx';
import {
  ButtonType,
  Size,
  Variant,
  ButtonVariantStyle,
  ButtonVariantStyles,
} from 'interfaces';
import Link from 'next/link';
import cx from './Button.module.scss';

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconAlign?: 'left' | 'right';
  label?: string;
  link?: string;
  loading?: boolean;
  size?: Size;
  style?: React.CSSProperties;
  type?: ButtonType;
  variant?: Variant;
  variantStyle?: ButtonVariantStyle;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  className,
  disabled,
  icon,
  iconAlign,
  label = 'Button',
  link,
  loading,
  size = 'md',
  style,
  variant = 'primary',
  variantStyle = 'solid',
  type,
  onClick,
}: ButtonProps) => {
  const classnames = clsx(
    cx['btn'],
    `btn-${size}`,
    {
      [`btn-${variant}`]: variantStyle === ButtonVariantStyles.solid,
      [`btn-${variantStyle}-${variant}`]:
        variantStyle !== ButtonVariantStyles.solid,
      [`btn-icon-${iconAlign}`]: iconAlign,
      'is-disabled': disabled,
      'is-loading': loading,
    },
    className
  );

  const renderIcon = icon && <span className={cx['btn-icon']}>{icon}</span>;

  const renderSpinner = loading && (
    <span className={cx['btn-spinner']}>
      <span className="sr-only">Please wait...</span>
    </span>
  );

  const renderLabel = label && <span className={cx['btn-label']}>{label}</span>;

  const renderContent = (
    <>
      {renderIcon}
      {renderLabel}
      {renderSpinner}
    </>
  );

  return type !== 'link' ? (
    <button
      className={classnames}
      disabled={disabled}
      style={style}
      type={type}
      onClick={onClick}
    >
      {renderContent}
    </button>
  ) : (
    <Link href={link as string}>
      <a className={classnames} href={link || ''} style={style}>
        {renderContent}
      </a>
    </Link>
  );
};

export default Button;
