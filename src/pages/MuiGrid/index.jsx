import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import breakpoints from '../../images/breakpoints.png';
import styles from './styles.module.css';

const MuiPage = () => (
  <div className={styles.page}>
    <Link
      href='https://v4.mui.com/ru/components/grid/'
      target='_blank'
      rel='noreferrer'
      underline='none'
    >
      <h2>Grid</h2>
    </Link>
    <p>
      <strong>Grid:</strong> Адаптивна сітка макетів Material Design
      підлаштовується під розмір та орієнтацію екрану, забезпечуючи узгодженість
      макетів.
    </p>
    <img className={styles.img} src={breakpoints} alt='breakpoints' />

    <h3>Basic Grid</h3>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} className={styles.paper}>
          xs=12
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3} className={styles.paper}>
          xs=12, sm=6, md=4, lg=3
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3} className={styles.paper}>
          xs=12, sm=6, md=4, lg=3
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3} className={styles.paper}>
          xs=12, sm=6, md=4, lg=3
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3} className={styles.paper}>
          xs=12, sm=6, md=4, lg=3
        </Paper>
      </Grid>
    </Grid>

    <h3>Inner Grid</h3>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7} md={8}>
        <Paper elevation={3} className={styles.paper}>
          <p>xs=12, sm=7, md=8</p>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} className={styles.paper}>
                xs=12, md=6, lg=4
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} className={styles.paper}>
                xs=12, md=6, lg=4
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper elevation={3} className={styles.paper}>
                xs=12, md=6, lg=4
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={5} md={4}>
        <Paper elevation={3} className={styles.paper}>
          <p>xs=12, sm=5, md=4</p>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className={styles.paper}>
                xs=12
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={3} className={styles.paper}>
                xs=12, lg=6
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={3} className={styles.paper}>
                xs=12, lg=6
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default MuiPage;
