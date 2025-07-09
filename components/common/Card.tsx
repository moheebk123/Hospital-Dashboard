import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => (
  <div className="rounded-lg shadow p-5 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-teal-50 transition">
    <div className="text-3xl text-teal-500 border border-teal-500 p-5 bg-white rounded-full shadow-md">
      {icon}
    </div>
    <p className="text-lg font-bold italic text-gray-700 text-center mt-3">
      {title}
    </p>
  </div>
);

export default Card;
