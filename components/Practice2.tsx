// components/Practice2.tsx
import React from 'react';

const Practice2: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">UI Kit: Приложение в стиле кейфижуал</h1>

      {/* Цветовая палитра */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Цветовая палитра</h2>
        <div className="flex space-x-4">
          <ColorBlock color="#4680FF" name="Primary" />
          <ColorBlock color="#F2E205" name="Warning" />
          <ColorBlock color="#10B981" name="Success" />
          <ColorBlock color="#FF5555" name="Danger" />
          <ColorBlock color="#6B7280" name="Secondary / Text" />
        </div>
      </section>

      {/* Типографика */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Типографика</h2>
        <div className="space-y-2">
          <p className="text-4xl font-bold">Заголовок H1 (text-4xl, font-bold)</p>
          <p className="text-2xl font-semibold">Заголовок H2 (text-2xl, font-semibold)</p>
          <p className="text-xl font-semibold">Заголовок H3 (text-xl, font-semibold)</p>
          <p className="text-base">Обычный текст (text-base)</p>
          <p className="text-sm">Подсказка или служебный текст (text-sm)</p>
          <a className="text-blue-500 hover:underline" href="#">
            Ссылка (text-blue-500)
          </a>
        </div>
      </section>

      {/* Кнопки */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Кнопки</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
            Primary
          </button>
          <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700">
            Secondary
          </button>
          <button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600">
            Success
          </button>
          <button className="px-4 py-2 rounded bg-yellow-500 text-dark-900 hover:bg-yellow-600">
            Warning
          </button>
          <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
            Danger
          </button>
          <button className="px-4 py-2 rounded bg-gray-300 text-gray-600 cursor-not-allowed">
            Disabled
          </button>
        </div>
      </section>

      {/* Поля ввода */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Поля ввода</h2>
        <div className="space-y-4 max-w-sm">
          <div>
            <label className="block mb-1 font-bold text-sm">E-mail</label>
            <input
              type="email"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="example@mail.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-sm">Пароль</label>
            <input
              type="password"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="******"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-sm">Телефон (маска)</label>
            <input
              type="tel"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block mb-1 font-bold text-sm">Сообщение (textarea)</label>
            <textarea
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Введите ваше сообщение..."
              rows={3}
            />
          </div>
        </div>
      </section>

      {/* Тумблеры / Переключатели */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Переключатели (Toggle)</h2>
        <div className="flex items-center space-x-8">
          <Toggle label="Светлая тема" />
          <Toggle label="Уведомления" defaultChecked />
        </div>
      </section>

      {/* Списки / Элементы интерфейса */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Список элементов</h2>
        <ul className="border rounded-md divide-y divide-gray-200 max-w-sm">
          <li className="p-4 flex items-center justify-between">
            <span>Профиль</span>
            <img src="/images/ui/icon_edit.png" alt="edit" className="w-4 h-4 cursor-pointer" />
          </li>
          <li className="p-4 flex items-center justify-between">
            <span>Настройки</span>
            <img src="/images/ui/icon_delete.png" alt="delete" className="w-4 h-4 cursor-pointer" />
          </li>
          <li className="p-4 flex items-center justify-between">
            <span>Поиск</span>
            <img src="/images/ui/icon_search.png" alt="search" className="w-4 h-4 cursor-pointer" />
          </li>
        </ul>
      </section>

      {/* Пример использования иконки */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Пример иконки в кнопке</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded inline-flex items-center space-x-2 hover:bg-blue-600">
          <img src="/images/ui/icon_search.png" alt="search" className="w-4 h-4" />
          <span>Найти</span>
        </button>
      </section>
    </div>
  );
};

export default Practice2;

/** Вспомогательные компоненты */
interface ColorBlockProps {
  color: string;
  name: string;
}
const ColorBlock: React.FC<ColorBlockProps> = ({ color, name }) => (
  <div className="flex flex-col items-center text-sm">
    <div
      className="w-16 h-16 rounded border border-gray-200 mb-2"
      style={{ backgroundColor: color }}
    />
    <p>{name}</p>
    <p className="text-gray-500">{color}</p>
  </div>
);

interface ToggleProps {
  label: string;
  defaultChecked?: boolean;
}
const Toggle: React.FC<ToggleProps> = ({ label, defaultChecked }) => {
  const [checked, setChecked] = React.useState<boolean>(!!defaultChecked);

  return (
    <label className="inline-flex items-center cursor-pointer space-x-2">
      <span className="text-sm font-semibold">{label}</span>
      <div
        className={`relative w-10 h-5 rounded-full transition ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        onClick={() => setChecked(!checked)}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition ${
            checked ? 'left-5' : 'left-1'
          }`}
        />
      </div>
    </label>
  );
};
