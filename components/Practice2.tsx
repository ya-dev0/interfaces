import React from 'react';

const Practice2: React.FC = () => {
  const colorPalette = {
    primary: '#2c3e50',
    secondary: '#ecf0f1',
  };

  const buttonStyle = {
    backgroundColor: '#10b981', // Зеленый цвет
    color: '#fff',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colorPalette.secondary }}>
      <header
        className="h-72 flex items-center justify-center"
        style={{
          backgroundColor: colorPalette.primary,
          color: colorPalette.secondary,
          backgroundImage: 'url(/images/header-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-5xl font-bold text-white text-center">
          Добро пожаловать в наш книжный магазин
        </h2>
      </header>

      <main className="p-8 space-y-16">
        {/* Книга 1: изображение слева, текст справа */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src="/images/book1.jpg"
              alt="Tell Me Your Life Story, Dad"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-center md:text-left">
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

        {/* Книга 2: изображение справа, текст слева */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 flex justify-center mb-4 md:mb-0">
            <img
              src="/images/book2.jpg"
              alt="Trump: The Art of the Deal"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="md:w-1/2 md:pr-8 text-center md:text-left md:order-1">
            <h4 className="text-xl font-bold mb-2">Trump: The Art of the Deal</h4>
            <p className="text-gray-600 mb-4">Автор: Donald J. Trump</p>
            <p className="text-gray-700 mb-4">
              Классика деловой литературы о стратегиях переговоров, поиске выгодных соглашений и уверенности в деловой среде.
            </p>
            <button className="px-4 py-2 rounded" style={buttonStyle}>
              Купить
            </button>
          </div>
        </section>

        {/* Книга 3: изображение слева, текст справа */}
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              src="/images/book3.jpg"
              alt="Maybe You Should Talk to Someone"
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Maybe You Should Talk to Someone</h4>
            <p className="text-gray-600 mb-4">Автор: Lori Gottlieb</p>
            <p className="text-gray-700 mb-4">
              Проникновенная книга о важности психотерапии, понимании человеческой природы и необходимости открытых бесед для самоанализа.
            </p>
            <button className="px-4 py-2 rounded" style={buttonStyle}>
              Купить
            </button>
          </div>
        </section>

        {/* Секция подписки */}
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

        {/* Теперь добавляем "Почему выбирают нас" внизу сайта */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <p className="text-xl font-semibold text-center">Большой ассортимент книг</p>
              <p className="text-gray-600 text-center mt-2">
                Разнообразие жанров, авторов и стилей — у нас найдется книга для каждого.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <p className="text-xl font-semibold text-center">Быстрая доставка</p>
              <p className="text-gray-600 text-center mt-2">
                Ваш заказ будет доставлен максимально оперативно.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">₽</span>
              </div>
              <p className="text-xl font-semibold text-center">Выгодные цены</p>
              <p className="text-gray-600 text-center mt-2">
                Постоянные акции и скидки для наших клиентов.
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
