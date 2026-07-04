import React from 'react';

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const classes = [
    'ds-btn',
    `ds-btn-${variant}`,
    `ds-btn-${size}`,
    fullWidth ? 'ds-btn-full' : '',
  ].filter(Boolean).join(' ');

  const style = fullWidth ? { width: '100%' } : {};

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
