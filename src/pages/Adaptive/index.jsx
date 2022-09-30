import img from '../../images/adaptive.png';
import styles from './styles.module.css';

const Adaptive = () => {
  return (
    <div className={styles.adaptiveWrapper}>
      <div className={styles.adaptive}>
        <ul className={styles.menu}>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>

        <div className={styles.description}>
          <h2>3. Адаптивна верстка</h2>

          <p>
            <strong>Адаптивна верстка</strong> дуже близька до респонсів або
            відзивчивого (див. далі) і заснована на використанні медіа-запитів
            для адаптації контенту під різні пристрої та параметри екранів.
            Причому робиться це динамічно, без дії користувача.
          </p>

          <p>
            Основна відмінність даної верстки від респонсів або відзивчивого
            полягає в тому, що при даному типі верстки сторінка «стрибає» за
            заздалегідь заданими (контрольними) точками, адаптуючи контент
            щоразу до найбільш підходящої та найближчої з них. Іншими словами,
            медіа-запити описують фіксовані положення контенту кожної з цих
            точок. Зрештою виходить набір з кількох фіксованих макетів, які
            працюють з різними роздільними здатностями екранів.
          </p>

          <p>
            <strong>Плюси:</strong> при комбінуванні даного типу верстки з
            гумовою, можна налаштувати відображення сайту, починаючи від
            найменших дозволів мобільних пристроїв, і закінчуючи найбільшими
            моніторами.
          </p>

          <p>
            <strong>Мінуси:</strong> Досить важко передбачити, як виглядатиме
            сайт абсолютно на всіх пристроях, враховуючи, що відстані між
            контрольними точками можуть бути досить великими.
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
    </div>
  );
};

export default Adaptive;
