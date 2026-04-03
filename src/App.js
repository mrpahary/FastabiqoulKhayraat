import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Tilaawat from './components/Tilaawat';
import DalaailulKhayraat from './components/DalaailulKhayraat';
import DailyDarood from './components/DailyDarood';
import QuranAudio from './components/QuranAudio';
import Anaasheed from './components/Anaasheed';
import Tafsir from './components/Tafsir';
import Hadith from './components/Hadith';
import Aqeedah from './components/Aqeedah';
import Madhhab from './components/Madhhab';
import Tariqah from './components/Tariqah';
import Dhikr from './components/Dhikr';
import SwalaatTime from './components/SwalaatTime';
import Qiblah from './components/Qiblah';
import HijriCalendar from './components/HijriCalendar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [tilaawatCount, setTilaawatCount] = useState(0);
  const [dalaailCount, setDalaailCount] = useState(0);
  const [daroodCount, setDaroodCount] = useState(100000);

  const pages = {
    home: <Home setCurrentPage={setCurrentPage} tilaawatCount={tilaawatCount} dalaailCount={dalaailCount} daroodCount={daroodCount} />,
    tilaawat: <Tilaawat setCurrentPage={setCurrentPage} setTilaawatCount={setTilaawatCount} tilaawatCount={tilaawatCount} />,
    dalaailul: <DalaailulKhayraat setCurrentPage={setCurrentPage} setDalaailCount={setDalaailCount} dalaailCount={dalaailCount} />, 
    darood: <DailyDarood setCurrentPage={setCurrentPage} setDaroodCount={setDaroodCount} daroodCount={daroodCount} />, 
    quran: <QuranAudio setCurrentPage={setCurrentPage} />, 
    anaasheed: <Anaasheed setCurrentPage={setCurrentPage} />, 
    tafsir: <Tafsir setCurrentPage={setCurrentPage} />, 
    hadith: <Hadith setCurrentPage={setCurrentPage} />, 
    aqeedah: <Aqeedah setCurrentPage={setCurrentPage} />, 
    madhhab: <Madhhab setCurrentPage={setCurrentPage} />, 
    tariqah: <Tariqah setCurrentPage={setCurrentPage} />, 
    dhikr: <Dhikr setCurrentPage={setCurrentPage} />, 
    swalaat: <SwalaatTime setCurrentPage={setCurrentPage} />, 
    qiblah: <Qiblah setCurrentPage={setCurrentPage} />, 
    hijri: <HijriCalendar setCurrentPage={setCurrentPage} />
  };

  return (
    <div className="App">
      {pages[currentPage]}
    </div>
  );
}

export default App;