import styles from './Time.module.scss';

const Time = ({ time }) => {

  const formattedTime = milliseconds => {

    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    if(seconds < 10){
      seconds = '0' + seconds;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    if(hours < 10){
      hours = '0' + hours;
    }

    return `${hours}:${minutes}:${seconds}.${milliseconds}`
  };

  return(
    <div className={styles.time}>
      <div className={styles.numbers}>
        {formattedTime(time)}
      </div>
    </div>
  );
};

export default Time;
