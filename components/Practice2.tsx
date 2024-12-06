import React from 'react';

const Practice2: React.FC = () => {
  const buttonStyle = {
    backgroundColor: '#10b981', // Зеленый
    color: '#fff',
  };

  // Стили для фигур
  // Квадрат (синий):
  const squareClass = "w-8 h-8 border-2 border-blue-500";
  // Треугольник (зелёный): используем бордеры для формирования треугольника
  const triangleClass = "w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-b-8 border-b-green-500";
  // Круг (желтый)
  const circleClass = "w-8 h-8 border-2 border-yellow-500 rounded-full";

  return (
    <div className="min-h-screen bg-ecf0f1" style={{ backgroundColor: '#ecf0f1' }}>
      <header
        className="h-72 flex items-center justify-center"
        style={{
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
          backgroundImage: 'url(/images/header-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-5xl font-bold text-white text-center">
          Добро пожаловать в наш книжный магазин
        </h2>
      </header>

      <main className="p-8 space-y-16 max-w-4xl mx-auto">
        {/* Книга 1 */}
        <section className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            <img
              src="/images/book1.jpg"
              alt="Tell Me Your Life Story, Dad"
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left max-w-md mx-auto">
            <h4 className="text-xl font-bold mb-2">Tell Me Your Life Story, Dad</h4>
            <p className="text-gray-600 mb-4">Автор: Questions About Me</p>
            <p className="text-gray-700 mb-4">
              Книга с вопросами, помогающими глубже узнать своего отца, его опыт, воспоминания и ценности.
            </p>
            <button className="px-4 py-2 rounded" style={buttonStyle}>
              Купить
            </button>
          </div>
        </section>

        {/* Книга 2 (Изображение справа) */}
        <section className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
          <div className="flex-1 text-center md:text-left md:pr-8 order-2 md:order-1 max-w-md mx-auto">
            <h4 className="text-xl font-bold mb-2">Trump: The Art of the Deal</h4>
            <p className="text-gray-600 mb-4">Автор: Donald J. Trump</p>
            <p className="text-gray-700 mb-4">
              Классика деловой литературы о стратегиях переговоров и выгодных сделок.
            </p>
            <button className="px-4 py-2 rounded" style={buttonStyle}>
              Купить
            </button>
          </div>
          <div className="flex-shrink-0 order-1 md:order-2 mx-auto md:mx-0 mb-4 md:mb-0">
            <img
              src="/images/book2.jpg"
              alt="Trump: The Art of the Deal"
              className="w-48 h-48 object-contain"
            />
          </div>
        </section>

        {/* Книга 3 */}
        <section className="flex flex-col md:flex-row items-start md:items-center md:space-x-8">
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            <img
              src="/images/book3.jpg"
              alt="Maybe You Should Talk to Someone"
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left max-w-md mx-auto">
            <h4 className="text-xl font-bold mb-2">Maybe You Should Talk to Someone</h4>
            <p className="text-gray-600 mb-4">Автор: Lori Gottlieb</p>
            <p className="text-gray-700 mb-4">
              Проникновенная книга о важности психотерапии и самопознания.
            </p>
            <button className="px-4 py-2 rounded" style={buttonStyle}>
              Купить
            </button>
          </div>
        </section>

        {/* Подписка */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-4 text-center">Подпишитесь на нашу рассылку</h3>
          <p className="text-center mb-6">
            Получайте самые свежие новости и специальные предложения!
          </p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="border p-2 w-full md:w-1/2 mb-4"
            />
            <button type="submit" className="px-6 py-2 rounded" style={buttonStyle}>
              Подписаться
            </button>
          </form>
        </section>

        {/* Почему выбирают нас */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className={`${squareClass} mb-4`}></div>
              <p className="text-xl font-semibold text-center">Большой ассортимент книг</p>
              <p className="text-gray-600 text-center mt-2">
                Разнообразие жанров и авторов.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className={`${triangleClass} mb-4`}></div>
              <p className="text-xl font-semibold text-center">Быстрая доставка</p>
              <p className="text-gray-600 text-center mt-2">
                Заказ придёт максимально оперативно.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className={`${circleClass} mb-4`}></div>
              <p className="text-xl font-semibold text-center">Выгодные цены</p>
              <p className="text-gray-600 text-center mt-2">
                Частые акции и скидки.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-16">
        <p className="text-center">&copy; 2023 Наш книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Practice2;
