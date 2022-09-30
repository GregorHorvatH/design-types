import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import styles from './styles.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link component={RouterLink} underline='hover' end to='/'>
        Home
      </Link>
      <Link component={RouterLink} underline='hover' to='fixed'>
        Fixed
      </Link>
      <Link component={RouterLink} underline='hover' to='rubber'>
        Rubber
      </Link>
      <Link component={RouterLink} underline='hover' to='adaptive'>
        Adaptive
      </Link>
      <Link component={RouterLink} underline='hover' to='responsive'>
        Responsive
      </Link>
    </div>
  );
};

export default Navigation;
