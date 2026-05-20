import React from 'react';
import '../App.css';

function Results({ user, onBack }) {
  const handleExport = (format) => {
    const data = localStorage.getItem('auditResults');
    if (!data) return;

    if (format === 'json') {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
      element.setAttribute('download', 'audit_results.json');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Результаты аудита</h1>
        <button className="button-secondary" onClick={onBack}>Назад</button>
      </div>
      <p>Результаты успешно сохранены!</p>
      <div className="button-group">
        <button className="button-primary" onClick={() => handleExport('json')}
>
          📥 Экспортировать JSON
        </button>
      </div>
    </div>
  );
}

export default Results;
