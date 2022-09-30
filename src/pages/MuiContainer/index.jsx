import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import breakpoints from '../../images/breakpoints.png';
import styles from './styles.module.css';

const MuiPage = () => (
  <div className={styles.page}>
    <Link
      href='https://v4.mui.com/ru/components/container/'
      target='_blank'
      rel='noreferrer'
      underline='none'
    >
      <h2>Container</h2>
    </Link>
    <p>
      <strong>Container:</strong> Контейнер центрує ваш контент по горизонталі.
      Це є базовим елементом усіх макетів.
    </p>
    <img className={styles.img} src={breakpoints} alt='breakpoints' />
    <hr />

    <Container>
      <Paper elevation={3} className={styles.paper}>
        <h3>Basic Container</h3>
        <p className={styles.code}>{'<Container>...</Container>'}</p>
        <p>Максимальна ширина обмежена шириною вікна.</p>
      </Paper>
    </Container>
    <hr />

    <Container maxWidth='sm'>
      <Paper elevation={3} className={styles.paper}>
        <h3>Container with maxWidth</h3>
        <p className={styles.code}>
          {"<Container maxWidth='sm'>...</Container>"}
        </p>
        <p>Максимальна ширина обмежена шириною вказаної точки зупинки.</p>
      </Paper>
    </Container>
    <hr />

    <Container fixed>
      <Paper elevation={3} className={styles.paper}>
        <h3>Container fixed</h3>
        <p className={styles.code}>{'<Container fixed>...</Container>'}</p>
        <p>
          Максимальна ширина відповідає мінімальній ширині поточної точки
          зупинки.
        </p>
      </Paper>
    </Container>
  </div>
);

export default MuiPage;
