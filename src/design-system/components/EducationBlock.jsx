import React, { useState } from 'react';
import styles from './EducationBlock.module.css';

export function EducationBlock({ title, steps, collapsible = true, defaultOpen = false }) {
  const [open, setOpen] = useState(!collapsible || defaultOpen);

  return (
    <div className={styles.block}>
      <button
        type="button"
        className={styles.header}
        onClick={() => collapsible && setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.headerTitle}>{title}</span>
        {collapsible && (
          <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </span>
        )}
      </button>

      {open && (
        <div className={styles.content}>
          <ol className={styles.stepList}>
            {steps.map((step, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <div className={styles.stepContent}>
                  {step.title && <div className={styles.stepTitle}>{step.title}</div>}
                  <div className={styles.stepText}>{step.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

// Preset: How to wear
export function HowToWearBlock() {
  return (
    <EducationBlock
      title="Як правильно надягати компресійні панчохи"
      collapsible
      steps={[
        {
          title: 'Зранку — до підйому з ліжка',
          text: 'Надягайте панчохи до того, як встанете. У горизонтальному положенні набряк ще мінімальний.',
        },
        {
          title: 'Вивернути до п\'ятки',
          text: 'Складіть панчоху до п\'яткової частини. Не тягніть за верхній край — це деформує тканину.',
        },
        {
          title: 'Рівномірно розтягнути',
          text: 'Поступово натягніть по нозі знизу вгору, розподіляючи матеріал рівномірно без складок.',
        },
        {
          title: 'Перевірте посадку',
          text: 'Між панчохою і шкірою не повинно бути зморшок. Ступня, гомілка і стегно мають бути охоплені рівно.',
        },
      ]}
    />
  );
}

// Preset: Correct fit
export function CorrectFitBlock() {
  return (
    <EducationBlock
      title="Як має відчуватися правильна посадка"
      collapsible
      steps={[
        {
          text: 'Відчувається рівний, помірний тиск по всій нозі — сильніший знизу, менший вгорі.',
        },
        {
          text: 'Жодного болю, оніміння або поколювання. Якщо відчуваєте — знімайте і перевіряйте розмір.',
        },
        {
          text: 'Не затискає пальці, не залишає глибоких слідів на шкірі після зняття.',
        },
        {
          text: 'Клас I носять по 6–8 годин, клас II та III — не знімаючи весь день за потреби.',
        },
      ]}
    />
  );
}
