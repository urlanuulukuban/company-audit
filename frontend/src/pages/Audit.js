import React, { useState, useEffect } from 'react';
import '../App.css';

const QUESTIONS = {
  'Бухгалтерия': [
    'Ведется ли бухгалтерский учет без пропусков по всем операциям?',
    'Все ли первичные документы оформляются вовремя?',
    'Есть ли утвержденный порядок документооборота?',
    'Соблюдаются ли сроки сдачи отчетности?',
    'Имеются ли случаи штрафов за ошибки в отчетности?',
  ],
  'Экономика': [
    'Есть ли утвержденный бюджет организации?',
    'Сравнивается ли факт с планом ежемесячно?',
    'Есть ли анализ отклонений бюджета?',
    'Понятны ли причины перерасхода?',
    'Считается ли себестоимость по продуктам / услугам?',
  ],
  'Продажи': [
    'Есть ли план продаж на месяц?',
    'Есть ли CRM система?',
    'Фиксируются ли все лиды?',
    'Есть ли воронка продаж?',
    'Контролируется ли конверсия?',
  ],
  'Маркетинг': [
    'Есть ли маркетинговая стратегия?',
    'Есть ли целевая аудитория?',
    'Измеряется ли эффективность рекламы?',
    'Есть ли поток лидов?',
    'Есть ли расчет стоимости клиента?',
  ],
  'Управление': [
    'Есть ли структура компании?',
    'Есть ли KPI сотрудников?',
    'Есть ли контроль задач?',
    'Есть ли стратегия компании?',
    'Есть ли дисциплина исполнения?',
  ],
};

function Audit({ user, onComplete, onBack }) {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const sections = Object.keys(QUESTIONS);
  const currentSection = sections[sectionIndex];
  const questions = QUESTIONS[currentSection];
  const currentQuestion = questions[questionIndex];
  const totalQuestions = sections.reduce((sum, s) => sum + QUESTIONS[s].length, 0);
  const completedQuestions = results.length;

  const handleAnswer = (answer) => {
    const newResult = {
      section: currentSection,
      question: currentQuestion,
      answer: answer,
    };
    setResults([...results, newResult]);
    if (answer) setScore(score + 1);
    setAnswered(true);
  };

  const handleNext = () => {
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex >= questions.length) {
      const nextSectionIndex = sectionIndex + 1;
      if (nextSectionIndex >= sections.length) {
        onComplete();
        return;
      }
      setSectionIndex(nextSectionIndex);
      setQuestionIndex(0);
    } else {
      setQuestionIndex(nextQuestionIndex);
    }
    setAnswered(false);
  };

  const percentage = Math.round((completedQuestions / totalQuestions) * 100);

  return (
    <div className="container">
      <div className="header">
        <h1>Аудит компании</h1>
        <button className="button-danger" onClick={onBack}>Назад</button>
      </div>

      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <p style={{ textAlign: 'center', marginBottom: 20 }}>
        {completedQuestions} / {totalQuestions} вопросов ({percentage}%)
      </p>

      <h3>{currentSection}</h3>
      <p style={{ fontSize: 18, marginBottom: 30, lineHeight: 1.6 }}>{currentQuestion}</p>

      {!answered ? (
        <div className="button-group">
          <button className="button-success" onClick={() => handleAnswer(true)}>
            ✔ Да
          </button>
          <button className="button-danger" onClick={() => handleAnswer(false)}>
            ✖ Нет
          </button>
        </div>
      ) : (
        <button className="button-primary" onClick={handleNext}>
          {completedQuestions === totalQuestions ? 'Завершить' : 'Далее'}
        </button>
      )}
    </div>
  );
}

export default Audit;
