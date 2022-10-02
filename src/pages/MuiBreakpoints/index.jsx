import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import breakpoints from '../../images/breakpoints.png';

const useStyles = makeStyles((theme) => ({
  page: { padding: 10 },
  img: { maxWidth: 800 },
  box: {
    textAlign: 'center',
    padding: 5,
    width: 80,
  },
  xs: { backgroundColor: '#dec0af' },
  sm: { backgroundColor: '#dedcaf' },
  md: { backgroundColor: '#b4deaf' },
  lg: { backgroundColor: '#afb7de' },
  xl: { backgroundColor: '#daafde' },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: 20,
    padding: 10,
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#dec0af',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#dedcaf',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#b4deaf',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: '#afb7de',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: '#daafde',
    },
  },
}));

const MuiPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.page}>
      <Link
        href='https://v4.mui.com/ru/customization/breakpoints/'
        target='_blank'
        rel='noreferrer'
        underline='none'
      >
        <h2>Breakpoints</h2>
      </Link>

      <p>
        <strong>Breakpoints:</strong> API, що дозволяє використовувати
        контрольні точки у широкому діапазоні контекстів.
      </p>
      <img className={styles.img} src={breakpoints} alt='breakpoints' />

      <ul>
        <li>
          theme.breakpoints.<strong>up</strong>(key)
        </li>
        <li>
          theme.breakpoints.<strong>down</strong>(key)
        </li>
        <li>
          theme.breakpoints.<strong>only</strong>(key)
        </li>
        <li>
          theme.breakpoints.<strong>not</strong>(key)
        </li>
        <li>
          theme.breakpoints.<strong>between</strong>(start, end)
        </li>
      </ul>
      <hr />

      <Container>
        <Paper elevation={3} className={styles.paper}>
          <span className={styles.box}>up ►</span>
          <span className={[styles.box, styles.xs].join(' ')}>xs - 0</span>
          <span className={[styles.box, styles.sm].join(' ')}>sm - 600</span>
          <span className={[styles.box, styles.md].join(' ')}>md - 900</span>
          <span className={[styles.box, styles.lg].join(' ')}>lg - 1200</span>
          <span className={[styles.box, styles.xl].join(' ')}>xl - 1536</span>
        </Paper>
      </Container>
      <hr />
    </div>
  );
};

export default MuiPage;
