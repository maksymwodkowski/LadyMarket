import React from 'react';
import styles from './UseCaseTag.module.css';

const tagConfig = {
  medical:   { label: 'Медичне',         icon: '⚕', cssClass: 'medical'   },
  pregnancy: { label: 'Вагітність',      icon: '🤰', cssClass: 'pregnancy' },
  travel:    { label: 'Подорожі',        icon: '✈', cssClass: 'travel'    },
  work:      { label: 'Робота',          icon: '💼', cssClass: 'work'      },
  fashion:   { label: 'Мода та здоров\'я', icon: '✨', cssClass: 'fashion'   },
};

export function UseCaseTag({ type = 'medical', onClick, active = false }) {
  const config = tagConfig[type] || tagConfig.medical;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.tag} ${styles[config.cssClass]} ${active ? styles.active : ''}`}
    >
      <span className={styles.icon}>{config.icon}</span>
      <span className={styles.label}>{config.label}</span>
    </button>
  );
}
