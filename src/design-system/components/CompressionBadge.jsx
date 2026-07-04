import React from 'react';
import styles from './CompressionBadge.module.css';

const classData = {
  I: {
    label: 'Клас I',
    mmhg: '15–21 mmHg',
    plain: 'Легка підтримка',
    cssClass: 'compressionI',
  },
  II: {
    label: 'Клас II',
    mmhg: '23–32 mmHg',
    plain: 'Помірна підтримка',
    cssClass: 'compressionII',
  },
  III: {
    label: 'Клас III',
    mmhg: '34–46 mmHg',
    plain: 'Сильна підтримка',
    cssClass: 'compressionIII',
  },
};

export function CompressionBadge({ compressionClass = 'II', compact = false }) {
  const data = classData[compressionClass] || classData['II'];

  return (
    <div className={`${styles.badge} ${styles[data.cssClass]} ${compact ? styles.compact : ''}`}>
      <span className={styles.dot} />
      <span className={styles.classLabel}>{data.label}</span>
      <span className={styles.separator}>·</span>
      <span className={styles.mmhg}>{data.mmhg}</span>
      {!compact && (
        <>
          <span className={styles.separator}>·</span>
          <span className={styles.plain}>{data.plain}</span>
        </>
      )}
    </div>
  );
}
