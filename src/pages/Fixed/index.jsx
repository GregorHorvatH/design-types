import img from '../../images/fixed.png';
import styles from './styles.module.css';

const Fixed = () => {
  return (
    <div className={styles.fixed}>
      <h2>1. Фіксована верстка</h2>

      <p>
        <strong>Фіксована верстка</strong> — тип верстки, при якому ширина
        контенту жорстко заданий у пікселях і не змінюється залежно від розміри
        вікна браузера.
      </p>

      <p>
        На даний момент такий тип верстки вже застарів і є пережитком минулого,
        коли ширина контенту сторінки була суворо продиктована роздільною
        здатністю найпоширеніших екранів (800 на 600, 1024 на 768 і так далі).
        Але навіть зараз у мережі легко можна зустріти сайти із фіксованою
        шириною контенту.
      </p>

      <p>
        <strong>Плюси:</strong> Можливість швидкої реалізації та простота,
        результат завжди виглядає передбачувано.
      </p>

      <p>
        <strong>Мінуси:</strong> На роздільних здатностях, які досить сильно
        відрізняються від цільового, сайт може виглядати не привабливо.
      </p>

      <img src={img} alt='sample pic' />
    </div>
  );
};

export default Fixed;
