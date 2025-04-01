// components/ApplicationForm.tsx
import React from 'react';

interface ApplicationFormProps {
  onClose: () => void; // Когда пользователь хочет «вернуться» на главную
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  return (
    <section className="bg-gray-50 p-6 mt-8 rounded shadow-md max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Форма подачи заявки</h3>
        <button
          className="text-blue-500 hover:underline"
          onClick={onClose}
        >
          Вернуться
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">ФИО</label>
          <input
            type="text"
            placeholder="Иванов Иван Иванович"
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">E-mail</label>
          <input
            type="email"
            placeholder="example@mail.com"
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Ссылка на портфолио</label>
          <input
            type="url"
            placeholder="https://myportfolio.com"
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Прикрепить файл</label>
          <input
            type="file"
            className="border w-full p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ApplicationForm;
