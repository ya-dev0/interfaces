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
      backgroundColor: '#10b981', // Зеленый цвет (bg-green-500)
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

      <main className="p-8 space-y-16">
        {/* Карточка книги 1: Изображение слева, описание справа */}
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
              Книга, которая поможет лучше узнать историю вашего отца через интересные вопросы и
              воспоминания.
            </p>
            <button className="px-4 py-2 rounded" style={styles.button}>
              Купить
            </button>
          </div>
        </section>

        {/* Карточка книги 2: Изображение справа, описание слева */}
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
              Классическая книга о стратегиях ведения бизнеса, переговорах и поиске выгодных сделок.
            </p>
            <button className="px-4 py-2 rounded" style={styles.button}>
              Купить
            </button>
          </div>
        </section>

        {/* Карточка книги 3: Изображение слева, описание справа */}
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
              Вдохновляющая книга о человеческой природе, эмоциях и необходимости разговора с
              терапевтом, чтобы понять себя глубже.
            </p>
            <button className="px-4 py-2 rounded" style={styles.button}>
              Купить
            </button>
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
