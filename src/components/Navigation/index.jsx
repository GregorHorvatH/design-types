import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import styles from './styles.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link component={RouterLink} to='/fixed'>
        Fixed
      </Link>
      <Link component={RouterLink} to='/rubber'>
        Rubber
      </Link>
      <Link component={RouterLink} to='/adaptive'>
        Adaptive
      </Link>
      <Link component={RouterLink} to='/responsive'>
        Responsive
      </Link>
    </div>
  );
};

export default Navigation;
