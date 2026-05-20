import React, { useState, useEffect } from 'react';
import '../App.css';

function Dashboard({ user, onStartAudit, onLogout }) {
  const [stats, setStats] = useState({
    totalAudits: 0,
    lastAuditDate: null,
    averageScore: 0,
  });

  useEffect(() => {
    // Load stats from localStorage
    const audits = JSON.parse(localStorage.getItem('audits') || '[]');
    if (audits.length > 0) {
      const lastAudit = audits[audits.length - 1];
      const avgScore = (audits.reduce((sum, a) => sum + a.score, 0) / audits.length).toFixed(1);
      setStats({
        totalAudits: audits.length,
        lastAuditDate: new Date(lastAudit.date).toLocaleDateString('ru-RU'),
        averageScore: avgScore,
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Главная панель</h1>
        <button className="button-danger" onClick={onLogout}>Выход</button>
      </div>

      <div className="info">Добро пожаловать, {user.name || 'Пользователь'}!</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '40px',
      }}>
        <div style={{
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid #3b82f6',
          padding: '20px',
          borderRadius: '8px',
        }}>
          <h3 style={{ marginTop: 0 }}>Всего аудитов</h3>
          <p style={{ fontSize: 32, fontWeight: 'bold', margin: '10px 0' }}>{stats.totalAudits}</p>
        </div>
        <div style={{
          background: 'rgba(22, 163, 74, 0.1)',
          border: '1px solid #16a34a',
          padding: '20px',
          borderRadius: '8px',
        }}>
          <h3 style={{ marginTop: 0 }}>Средний результат</h3>
          <p style={{ fontSize: 32, fontWeight: 'bold', margin: '10px 0' }}>{stats.averageScore}%</p>
        </div>
        <div style={{
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid #6366f1',
          padding: '20px',
          borderRadius: '8px',
        }}>
          <h3 style={{ marginTop: 0 }}>Последний аудит</h3>
          <p style={{ fontSize: 16, margin: '10px 0' }}>{stats.lastAuditDate || 'Нет данных'}</p>
        </div>
      </div>

      <h2>Действия</h2>
      <div className="button-group">
        <button className="button-success" onClick={onStartAudit} style={{ flex: 1 }}>
          🚀 Начать новый аудит
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
