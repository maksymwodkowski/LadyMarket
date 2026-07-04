import React from 'react';
import styles from './Alerts.module.css';

const alertConfig = {
  outOfStock: {
    icon: '🚫',
    title: 'Немає в наявності',
    cssClass: 'outOfStock',
  },
  equivalent: {
    icon: '↔',
    title: 'Доступний аналог',
    cssClass: 'equivalent',
  },
  sizeConfirm: {
    icon: '📏',
    title: 'Підтвердіть розмір',
    cssClass: 'sizeConfirm',
  },
  success: {
    icon: '✓',
    cssClass: 'success',
  },
  warning: {
    icon: '⚠',
    cssClass: 'warning',
  },
  error: {
    icon: '✕',
    cssClass: 'error',
  },
};

export function Alert({
  type = 'success',
  title,
  message,
  action,
  onAction,
  onDismiss,
}) {
  const config = alertConfig[type] || alertConfig.success;
  const displayTitle = title || config.title;

  return (
    <div className={`${styles.alert} ${styles[config.cssClass]}`}>
      <span className={styles.alertIcon}>{config.icon}</span>
      <div className={styles.alertContent}>
        {displayTitle && <div className={styles.alertTitle}>{displayTitle}</div>}
        {message && <div className={styles.alertMessage}>{message}</div>}
        {action && (
          <button className={styles.alertAction} onClick={onAction} type="button">
            {action}
          </button>
        )}
      </div>
      {onDismiss && (
        <button className={styles.alertDismiss} onClick={onDismiss} aria-label="Закрити" type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
    </div>
  );
}

// Shorthand exports
export const OutOfStockNotice = (props) => <Alert type="outOfStock" {...props} />;
export const EquivalentAlert = (props) => <Alert type="equivalent" {...props} />;
export const SizeConfirmPrompt = (props) => <Alert type="sizeConfirm" {...props} />;
export const SuccessAlert = (props) => <Alert type="success" {...props} />;
export const WarningAlert = (props) => <Alert type="warning" {...props} />;
export const ErrorAlert = (props) => <Alert type="error" {...props} />;
