import React from 'react';

const ListViewElem = ({ elem }) => {
  console.log(elem.logo);
  return (
    <div className="p-4 bg-white shadow-lg shadow-black-500 m-8 flex flex-row ">
      <div className="flex flex-row basis-1/2">
        <img
          src={elem.logo}
          alt={elem.company}
          className="basis-1/4 p-6 object-contain max-w-4 "
        />
        <div className="basis-3/4 ml-2 pl-2 flex flex-col justify-center">
          <div className="flex flex-row  items-center ">
            <h4 className="pr-1 mr-1 text-teal-800">{elem.company}</h4>
            {elem.new ? (
              <h3 className="px-2 py-1 mx-1 bg-teal-800 text-white rounded-2xl text-xs">
                NEW!
              </h3>
            ) : (
              ''
            )}
            {elem.featured ? (
              <h3 className="px-2 py-1 mx-1 bg-neutral-800 text-white rounded-2xl text-xs">
                FEATURED
              </h3>
            ) : (
              ''
            )}
          </div>

          <h2 className="text-xl my-2 font-bold">{elem.position}</h2>
          <div className="text-sm text-neutral-500  ">
            {elem.postedAt}
            <span className="p-2 inline-block align-middle">•</span>
            {elem.contract}
            <span className="p-2 inline-block align-middle">•</span>{' '}
            {elem.location}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end  items-center ml-0 basis-1/2 text-teal-800 text-sm tracking-wider font-semibold">
        <span className="bg-teal-50 p-1 m-1">{elem.role}</span>
        <span className="bg-teal-50 p-1 m-1">{elem.level}</span>
        <ul className="flex flex-row p-1 m-1 ">
          {elem.languages.map((item) => (
            <li className="bg-teal-50 p-1 m-1 ">{item}</li>
          ))}
        </ul>
        <ul className="flex flex-row">
          {elem.tools.map((item) => (
            <li className="bg-teal-50 p-1 m-1 ">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListViewElem;
