import React from 'react';
import { Outlet } from 'react-router-dom';
import { getJobs } from '../data';
import ListViewElem from './ListViewElem';

const ListView = () => {
  let jobs = getJobs();
  // console.log(jobs);

  return (
    <main className="max-w-screen-2xl  mx-auto my-24">
      <ul>
        {jobs.map((elem) => (
          <ListViewElem elem={elem} key={elem.id} />
        ))}
      </ul>
      <Outlet />
    </main>
  );
};

export default ListView;
