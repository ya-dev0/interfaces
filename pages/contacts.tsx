// pages/contacts.tsx
import React from 'react';
import Layout from '../components/Layout';

export default function Contacts() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Контакты</h1>
        <p className="mb-4">Свяжитесь с нами удобным для вас способом:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Email: <a href="mailto:info@greystone.ru" className="text-blue-600 hover:underline">info@greystone.ru</a></li>
          <li>Телефон: <a href="tel:+70000000000" className="text-blue-600 hover:underline">+7 (000) 000-00-00</a></li>
          <li>Адрес: г. Москва, ул. Примерная, д. 1</li>
        </ul>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Форма обратной связи</h2>
          <form className="space-y-4 max-w-sm">
            <div>
              <label className="block font-semibold mb-1">Имя</label>
              <input type="text" className="border w-full p-2 rounded" placeholder="Ваше имя" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Сообщение</label>
              <textarea className="border w-full p-2 rounded" placeholder="Ваш вопрос..." rows={3}/>
            </div>
            <button className="px-4 py-2 bg-black text-white rounded hover:opacity-90">Отправить</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
