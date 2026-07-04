import React, { useState } from 'react';
import { Button } from './Button';
import styles from './AIAssistant.module.css';

export function ChatContainer({ children }) {
  return <div className={styles.chatContainer}>{children}</div>;
}

export function UserMessage({ text, timestamp }) {
  return (
    <div className={styles.messageRow + ' ' + styles.userRow}>
      <div className={styles.userBubble}>
        <p className={styles.messageText}>{text}</p>
        {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
      </div>
    </div>
  );
}

export function AssistantMessage({ text, timestamp, children }) {
  return (
    <div className={styles.messageRow + ' ' + styles.assistantRow}>
      <div className={styles.avatar}>А</div>
      <div className={styles.assistantBubble}>
        {text && <p className={styles.messageText}>{text}</p>}
        {children}
        {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className={styles.messageRow + ' ' + styles.assistantRow}>
      <div className={styles.avatar}>А</div>
      <div className={styles.typingBubble}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}

export function QuestionCard({ question, options, onSelect, selected }) {
  return (
    <div className={styles.questionCard}>
      <p className={styles.questionText}>{question}</p>
      <div className={styles.optionList}>
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`${styles.optionBtn} ${selected === opt.value ? styles.selected : ''}`}
            onClick={() => onSelect(opt.value)}
          >
            {opt.icon && <span className={styles.optionIcon}>{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function RecommendationCard({ product, reason }) {
  return (
    <div className={styles.recCard}>
      <div className={styles.recLabel}>Рекомендація</div>
      <div className={styles.recName}>{product.name}</div>
      <div className={styles.recMeta}>
        <span className={styles.recClass}>{product.compressionClass}</span>
        <span className={styles.recSep}>·</span>
        <span>{product.size}</span>
        <span className={styles.recSep}>·</span>
        <span>{product.brand}</span>
      </div>
      <p className={styles.recReason}>{reason}</p>
      <Button variant="primary" size="sm" fullWidth>Переглянути товар</Button>
    </div>
  );
}

export function ChatInput({ onSend, placeholder = 'Напишіть повідомлення...' }) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim()) {
      onSend(value.trim());
      setValue('');
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.inputRow}>
      <input
        className={`ds-input ${styles.chatInputField}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
      />
      <button
        type="button"
        className={`${styles.sendBtn} ${value.trim() ? styles.sendActive : ''}`}
        onClick={handleSend}
        aria-label="Надіслати"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
}
