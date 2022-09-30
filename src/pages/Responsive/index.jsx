import img from '../../images/adaptive.png';
import rwdVsAdapt from '../../images/rwd-vs-adapt-example.gif';
import styles from './styles.module.css';

const Responsive = () => {
  return (
    <div className={styles.responsive}>
      <ul className={styles.menu}>
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
      </ul>

      <div className={styles.description}>
        <h2>4. Респонсивна (відзивчива) верстка</h2>

        <p>
          <strong>Даний тип верстки</strong> часто плутають з адаптивним, але на
          відміну від останнього, ґрунтується на принципі «гуми», але так само
          як і він використовують медіа-запити для адаптації сайту під ширину
          пристрою. Якщо в адаптивній верстці при зміні розмірів вікна зовнішній
          вигляд сайту змінюється кілька разів, залежно від контрольних точок,
          то в респонсивній верстці він змінюється постійно.
        </p>

        <p>
          Сторінка, що вийшла в результаті, не «стрибає» по контрольних точках,
          як в адаптивній версті, а плавно змінюється між ними.
        </p>

        <p>
          <strong>Плюси:</strong> Не має значення те, як сильно розтягується
          розмір вікна, відзивчивий макет сайту завжди адекватно
          підлаштовуватиметься під цю роздільну здатність.
        </p>

        <p>
          <strong>Мінуси:</strong> Іноді складніше реалізувати, ніж адаптивну
          верстку.
        </p>

        <img
          className={styles.img}
          src={rwdVsAdapt}
          alt='responsive VS adaptive design example'
        />
        <p>
          <strong>Верхній блок є респонсивним, а нижній – адаптивним</strong>
        </p>
      </div>

      <div className={styles.col}>
        <img className={styles.img} src={img} alt='sample pic' />

        <div className='last-column'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            reprehenderit porro amet, ut saepe commodi aspernatur officia
            consectetur cumque praesentium eum assumenda magnam nihil dolore
            deserunt veniam hic id ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            eveniet dolorem quasi, quisquam quas hic iste inventore, dolores
            quis nobis enim voluptas nesciunt labore tenetur, atque optio
            reprehenderit recusandae esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            optio beatae velit, animi illo nam delectus quis consectetur
            explicabo omnis dolore amet laudantium quod minus natus
            reprehenderit. Mollitia, fugiat reprehenderit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
