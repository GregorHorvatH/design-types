import { Hidden, Link } from '@mui/material';

import TestContainer from '../../components/TestContainer';
import breakpoints from '../../images/breakpoints.png';
import styles from './styles.module.css';

const MuiPage = () => (
  <div className={styles.page}>
    <Link
      href='https://v4.mui.com/ru/customization/breakpoints/'
      target='_blank'
      rel='noreferrer'
      underline='none'
    >
      <h2>Hidden</h2>
    </Link>
    <p>
      <strong>Hidden:</strong> Швидко та оперативно керує видимістю компонентів.
    </p>
    <img className={styles.img} src={breakpoints} alt='breakpoints' />
    <hr />

    <p>
      <strong>Всі елементи видно, якщо вони не приховані.</strong> Щоб спростити
      інтеграцію з точками зупинки Material-UI, цей компонент можна
      використовувати для приховання будь-якого контенту або використовувати
      його у поєднанні з нашим компонентом <strong>Grid.</strong>
    </p>

    <h2>Як це працює</h2>
    <p>
      Приховування працює з діапазоном точок зупинки, наприклад,{' '}
      <strong>xsUp</strong> або <strong>mdDown</strong>, або використовує одну
      або кілька точок зупинки, наприклад <strong>{`only='sm'`}</strong> або{' '}
      <strong>{`only={['md', 'xl']}`}.</strong> Діапазони та окремі точки
      зупинки можуть використовуватись одночасно для досягнення індивідуальної
      поведінки. Діапазони включають зазначені точки зупинки.
    </p>
    <hr />

    <Hidden only='xs'>
      <TestContainer>
        <p className={styles.code}>{"<Hidden only='xs'>"}</p>
      </TestContainer>
    </Hidden>

    <Hidden smUp>
      <TestContainer>
        <p className={styles.code}>{'<Hidden smUp>'}</p>
      </TestContainer>
    </Hidden>

    <Hidden mdUp>
      <TestContainer>
        <p className={styles.code}>{'<Hidden mdUp>'}</p>
      </TestContainer>
    </Hidden>
  </div>
);

export default MuiPage;
