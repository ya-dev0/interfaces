// components/ApplicationForm.tsx
import React from 'react';

const ApplicationForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 glitch" data-text="Форма подачи заявки">
        Форма подачи заявки
      </h2>
      <p className="mb-4">
        Заполните поля ниже, чтобы подать заявку на участие в конкурсе.
      </p>
      <img
        src="/images/design/screenshot2.jpg"
        alt="Скриншот прототипа формы"
        className="w-full h-auto mb-4"
      />

      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">ФИО</label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            placeholder="Введите ФИО"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">E-mail</label>
          <input
            type="email"
            className="border w-full p-2 rounded"
            placeholder="Введите e-mail"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Ссылка на портфолио</label>
          <input
            type="url"
            className="border w-full p-2 rounded"
            placeholder="https://"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Загрузить файл</label>
          <input type="file" className="border w-full p-2 rounded" />
        </div>

        <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded font-bold">
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
