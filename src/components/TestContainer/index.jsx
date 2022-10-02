import { Container, Paper } from '@mui/material';
import styles from './styles.module.css';

const TestContainer = ({ children }) => (
  <>
    <Container>
      <Paper elevation={3} className={styles.paper}>
        {children}
      </Paper>
    </Container>
    <hr />
  </>
);

export default TestContainer;
