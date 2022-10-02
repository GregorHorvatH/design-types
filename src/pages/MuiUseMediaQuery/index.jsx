import { Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import TestContainer from '../../components/TestContainer';
import breakpoints from '../../images/breakpoints.png';
import styles from './styles.module.css';

const MuiPage = () => {
  const theme = useTheme();
  const matchByWidth = useMediaQuery('(max-width: 600px)'); // xs
  const matchByUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchByUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchByDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className={styles.page}>
      <Link
        href='https://v4.mui.com/ru/customization/breakpoints/'
        target='_blank'
        rel='noreferrer'
        underline='none'
      >
        <h2>useMediaQuery</h2>
      </Link>

      <p>
        <strong>useMediaQuery:</strong> Це хук медіа-запиту для React. Він
        відстежує збіги з медіа-запитом CSS.
      </p>
      <img className={styles.img} src={breakpoints} alt='breakpoints' />
      <hr />

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

      {matchByWidth && (
        <TestContainer>
          <p>
            useMediaQuery('<strong>max-width: 600px</strong>')
          </p>
        </TestContainer>
      )}

      {matchByUpSm && (
        <TestContainer>
          <p>
            <strong>useMediaQuery</strong>(theme.breakpoints.up('
            <strong>sm</strong>'))
          </p>
        </TestContainer>
      )}

      {matchByUpMd && (
        <TestContainer>
          <p>
            <strong>useMediaQuery</strong>(theme.breakpoints.up('
            <strong>md</strong>'))
          </p>
        </TestContainer>
      )}

      {matchByDownLg && (
        <TestContainer>
          <p>
            <strong>useMediaQuery</strong>(theme.breakpoints.down('
            <strong>lg</strong>'))
          </p>
        </TestContainer>
      )}
    </div>
  );
};

export default MuiPage;
