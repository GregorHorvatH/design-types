import Link from '@mui/material/Link';
import styles from './styles.module.css';

const Home = () => (
  <div className={styles.home}>
    <Link
      href='https://v4.mui.com/ru/guides/responsive-ui/'
      target='_blank'
      rel='noreferrer'
      underline='none'
    >
      <h4>Material UI</h4>
    </Link>
    <p>
      <strong>Grid:</strong> Адаптивна сітка макетів Material Design
      підлаштовується під розмір та орієнтацію екрану, забезпечуючи узгодженість
      макетів.
    </p>
    <p>
      <strong>Container:</strong> Контейнер центрує ваш контент по горизонталі.
      Це є базовим елементом усіх макетів.
    </p>
    <p>
      <strong>Breakpoints:</strong> API, що дозволяє використовувати контрольні
      точки у широкому діапазоні контекстів.
    </p>
    <p>
      <strong>useMediaQuery:</strong> Це хук медіа-запиту для React. Він
      відстежує збіги з медіа-запитом CSS.
    </p>
    <p>
      <strong>Hidden:</strong> Швидко та оперативно керує видимістю компонентів.
    </p>
  </div>
);

export default Home;
