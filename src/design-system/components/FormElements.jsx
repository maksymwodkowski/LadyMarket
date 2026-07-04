import React from 'react';
import styles from './FormElements.module.css';

// ─── TEXT INPUT ───────────────────────────────────────────────────────────────
export function TextInput({
  label,
  placeholder,
  value,
  onChange,
  state = 'default',
  helpText,
  errorText,
  disabled = false,
  unit,
  ...props
}) {
  const inputClass = ['ds-input', state === 'error' ? 'error' : ''].filter(Boolean).join(' ');

  return (
    <div className={styles.fieldWrap}>
      {label && <label className={`ds-label ${styles.label}`}>{label}</label>}
      <div className={styles.inputWithUnit}>
        <input
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      {state === 'error' && errorText && (
        <span className={`ds-caption ${styles.errorText}`}>{errorText}</span>
      )}
      {state !== 'error' && helpText && (
        <span className={`ds-caption ${styles.helpText}`}>{helpText}</span>
      )}
    </div>
  );
}

// ─── SELECT ───────────────────────────────────────────────────────────────────
export function Select({ label, options = [], value, onChange, disabled = false, placeholder }) {
  return (
    <div className={styles.fieldWrap}>
      {label && <label className={`ds-label ${styles.label}`}>{label}</label>}
      <select
        className="ds-input ds-select"
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

// ─── SIZE SELECTOR ───────────────────────────────────────────────────────────
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export function SizeSelector({ label = 'Розмір', selected, onChange, outOfStock = [] }) {
  return (
    <div className={styles.fieldWrap}>
      {label && <label className={`ds-label ${styles.label}`}>{label}</label>}
      <div className={styles.sizeGrid}>
        {SIZES.map((sz) => {
          const oos = outOfStock.includes(sz);
          return (
            <button
              key={sz}
              type="button"
              className={[
                styles.sizeBtn,
                selected === sz ? styles.sizeBtnSelected : '',
                oos ? styles.sizeBtnOos : '',
              ].filter(Boolean).join(' ')}
              onClick={() => !oos && onChange(sz)}
              disabled={oos}
              title={oos ? 'Немає в наявності' : sz}
            >
              {sz}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── MEASUREMENT INPUT ────────────────────────────────────────────────────────
export function MeasurementInput({ label, value, onChange, placeholder, note }) {
  return (
    <div className={styles.fieldWrap}>
      {label && <label className={`ds-label ${styles.label}`}>{label}</label>}
      <div className={styles.inputWithUnit}>
        <input
          type="number"
          className="ds-input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <span className={styles.unit}>см</span>
      </div>
      {note && <span className={`ds-caption ${styles.helpText}`}>{note}</span>}
    </div>
  );
}

// ─── CHECKBOX ─────────────────────────────────────────────────────────────────
export function Checkbox({ label, checked, onChange, disabled = false }) {
  return (
    <label className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxBox}>
        {checked && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4L4.2 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </span>
      <span className={styles.checkboxText}>{label}</span>
    </label>
  );
}

// ─── RADIO ───────────────────────────────────────────────────────────────────
export function RadioGroup({ label, options, value, onChange }) {
  return (
    <div className={styles.fieldWrap}>
      {label && <label className={`ds-label ${styles.label}`}>{label}</label>}
      <div className={styles.radioGroup}>
        {options.map((opt) => (
          <label key={opt.value} className={styles.radioLabel}>
            <input
              type="radio"
              name={label}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className={styles.radioInput}
            />
            <span className={styles.radioCircle}>
              {value === opt.value && <span className={styles.radioDot} />}
            </span>
            <span className={styles.radioText}>{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
