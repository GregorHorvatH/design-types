import img from '../../images/rubber.png';
import styles from './styles.module.css';

const Rubber = () => {
  return (
    <div className={styles.rubber}>
      <h2>2. Гумова верстка</h2>

      <p>
        <strong>Гумова верстка</strong> сайту відрізняється від фіксованої
        верстки відносними розмірами елементів веб-сторінки (у відсотковому
        співвідношенні). Тобто, при гумовій верстці веб-сторінка змінює розміри
        в залежності від ширини вікна браузера. У результаті виходить, що зі
        збільшенням ширини контейнера-батька відбувається збільшення ширини
        елемента сторінки, а при зменшенні ширини контейнера-батька відбувається
        зменшення ширини елемента сторінки. Звідси і з'явилася її назва
        «гумова».
      </p>

      <p>
        Даний тип верстки в чистому вигляді також є застарілим, оскільки
        враховує лише один тип пристроїв і не дбає про те, як контент
        виглядатиме на екранах із занадто великою або маленькою роздільною
        здатністю.
      </p>

      <p>
        <strong>Плюси:</strong> Дозволяє адаптувати шаблон під будь-який тип і
        роздільну здатність монітора, на відміну від фіксованого.
      </p>

      <p>
        <strong>Мінуси:</strong> Складніше реалізувати, ніж фіксовану.
        Нестабільність дизайну веб-сайту.
      </p>

      <img src={img} alt='sample pic' />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem
        iste ad aspernatur et porro quasi a quas, ex natus aliquid ipsa eveniet
        nulla, consequuntur vero facilis alias veritatis ipsam!
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, aliquam
        fuga. Enim possimus, magnam aperiam aliquam explicabo omnis, facilis
        voluptate eaque porro eos dicta officiis laudantium debitis corrupti?
        Consectetur, minima.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse
        repellat aliquam, architecto nulla, molestiae eaque vitae impedit ut
        accusantium, labore rem nisi illum totam culpa magni amet mollitia eos!
      </p>
    </div>
  );
};

export default Rubber;
