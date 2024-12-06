import React from 'react';

const Practice2: React.FC = () => {
  const colorPalette = {
    primary: '#2c3e50',
    secondary: '#ecf0f1',
    accent: '#e74c3c',
  };

  const styles = {
    header: {
      backgroundColor: colorPalette.primary,
      color: colorPalette.secondary,
    },
    button: {
      backgroundColor: colorPalette.accent,
      color: '#fff',
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colorPalette.secondary }}>
      <header
        className="h-72 flex items-center justify-center"
        style={{
          ...styles.header,
          backgroundImage: 'url(/images/header-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="text-5xl font-bold text-white text-center">
          Добро пожаловать в наш книжный магазин
        </h2>
      </header>

      <main className="p-8">
        <section className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Наши бестселлеры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
              <img
                src="/images/book1.jpg"
                alt="Tell Me Your Life Story, Dad"
                className="mb-4 w-full h-64 object-contain"
              />
              <h4 className="text-xl font-bold text-center">Tell Me Your Life Story, Dad</h4>
              <p className="text-gray-600 text-center">Автор: Questions About Me</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Купить</button>
            </div>
            <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
              <img
                src="/images/book2.jpg"
                alt="Trump: The Art of the Deal"
                className="mb-4 w-full h-64 object-contain"
              />
              <h4 className="text-xl font-bold text-center">Trump: The Art of the Deal</h4>
              <p className="text-gray-600 text-center">Автор: Donald J. Trump</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Купить</button>
            </div>
            <div className="border p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
              <img
                src="/images/book3.jpg"
                alt="Maybe You Should Talk to Someone"
                className="mb-4 w-full h-64 object-contain"
              />
              <h4 className="text-xl font-bold text-center">Maybe You Should Talk to Someone</h4>
              <p className="text-gray-600 text-center">Автор: Lori Gottlieb</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Купить</button>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-8 mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <p className="text-xl font-semibold text-center">Большой ассортимент книг</p>
              <p className="text-gray-600 text-center mt-2">
                У нас вы найдете книги на любой вкус и предпочтения.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <p className="text-xl font-semibold text-center">Быстрая доставка</p>
              <p className="text-gray-600 text-center mt-2">
                Доставляем заказы в кратчайшие сроки по всей стране.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">₽</span>
              </div>
              <p className="text-xl font-semibold text-center">Выгодные цены</p>
              <p className="text-gray-600 text-center mt-2">
                Предлагаем лучшие цены и специальные предложения.
              </p>
            </div>
          </div>
        </section>

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
            <button type="submit" className="px-6 py-2 rounded" style={styles.button}>
              Подписаться
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-16">
        <p className="text-center">&copy; 2023 Наш книжный магазин. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Practice2;
