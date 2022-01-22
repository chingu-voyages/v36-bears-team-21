import React from 'react';
import data from '../data.json';
import ListViewElem from './ListViewElem';

const ListView = () => {
  console.log(data);
  return (
    <main>
      <ul>
        {data.map((elem) => (
          <ListViewElem elem={elem} key={elem.id} />
        ))}
      </ul>
    </main>
  );
};

export default ListView;
