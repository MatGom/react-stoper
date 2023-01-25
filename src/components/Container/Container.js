import styles from './Container.module.scss';
import Timer from '../Timer/Timer';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

const Container = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const Start = () => {
    setTimerOn(true);
  };

  const Stop = () => {
    setTimerOn(false);
  };

  const Reset = () => {
    setTimerOn(false);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <Timer time={time} />
      <Button onClick={Start}>Start</Button>
      <Button onClick={Stop}>Stop</Button>
      <Button onClick={Reset}>Reset</Button>
    </div>
  );
};

export default Container;
