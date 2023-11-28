// @Page.js
import React, { useState } from 'react';
import dtcCodigos from './dtcCodigos';

const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const Apps = () => {
  const [search, setSearch] = useState('');

  const filteredItems = dtcCodigos.filter(item =>
    normalize(item.title.toLowerCase()).includes(normalize(search.toLowerCase()))
  );

  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </header>
      <main>
        {filteredItems.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.correction}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Apps;