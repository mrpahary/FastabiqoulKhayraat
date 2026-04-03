import React from 'react';

const Home = ({ setCurrentPage, tilaawatCount, dalaailCount, daroodCount }) => {
  const buttons = [
    { label: 'Tilaawat', page: 'tilaawat' },
    { label: 'Dalaailul Khayraat', page: 'dalaailul' },
    { label: '1000 Daily Darood', page: 'darood' },
    { label: 'Qur'an Audio', page: 'quran' },
    { label: 'Anaasheed', page: 'anaasheed' },
    { label: 'Tafsir', page: 'tafsir' },
    { label: 'Hadith', page: 'hadith' },
    { label: '\'Aqeedah', page: 'aqeedah' },
    { label: 'Madhhab', page: 'madhhab' },
    { label: 'Tariqah', page: 'tariqah' },
    { label: 'Dhikr', page: 'dhikr' },
    { label: 'Swalaat Time', page: 'swalaat' },
    { label: 'Qiblah', page: 'qiblah' },
    { label: 'Hijri Calendar', page: 'hijri' }
  ];

  return (
    <div className="home-container">
      <div className="header">
        <h1>فَٱسْتَبِقُوا۟ ٱلْخَيْرَٰتِ</h1>
        <h2>Fastabiqoul Khayraat</h2>
        <p className="quran-verse">"And for this let the competitors compete." (Quran 2:148)</p>
      </div>

      <div className="counters-section">
        <div className="counter-box">
          <h3>Tilaawat</h3>
          <div className="counter-display">{tilaawatCount}</div>
        </div>
        <div className="counter-box">
          <h3>Dalaailul Khayraat</h3>
          <div className="counter-display">{dalaailCount}</div>
        </div>
        <div className="counter-box">
          <h3>1000 Daily Darood</h3>
          <div className="counter-display">{daroodCount}</div>
        </div>
      </div>

      <div className="buttons-grid">
        {buttons.map((btn) => (
          <button
            key={btn.page}
            className="nav-button"
            onClick={() => setCurrentPage(btn.page)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;