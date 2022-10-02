import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from './styles.module.css';

const BreakpointIndicator = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  const onWidthChange = ({ target }) => {
    setWidth(target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onWidthChange);

    return () => {
      window.removeEventListener('resize', onWidthChange);
    };
  }, []);

  return (
    <div className={styles.breakpointIndicator}>
      <span>
        width:<strong>{width}</strong>px -
      </span>
      {isXs && <strong>XS</strong>}
      {isSm && <strong>SM</strong>}
      {isMd && <strong>MD</strong>}
      {isLg && <strong>LG</strong>}
      {isXl && <strong>XL</strong>}
    </div>
  );
};

export default BreakpointIndicator;
