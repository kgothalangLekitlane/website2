import React from 'react';
import './AsSeenIn.css';

const AsSeenIn = () => {
  const magazines = [
    'Vogue',
    'Elle',
    'Cosmopolitan',
    'Glamour',
    'Harper\'s Bazaar',
    'Marie Claire',
    'InStyle',
    'Allure',
    'Vanity Fair',
    'Women\'s Health',
    'Shape',
    'Redbook',
    'Good Housekeeping',
    'O, The Oprah Magazine',
    'People',
    'Time',
    'Forbes',
    'Fortune'
  ];

  return (
    <section className="as-seen-in">
      <h2>As Seen In</h2>
      <ul className="magazine-list">
        {magazines.map((magazine, index) => (
          <li key={index}>{magazine}</li>
        ))}
      </ul>
    </section>
  );
};

export default AsSeenIn;
