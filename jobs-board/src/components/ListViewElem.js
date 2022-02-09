import React from 'react';
import { Link } from 'react-router-dom';

const ListViewElem = ({ elem }) => {
  return (
<<<<<<< HEAD
    <Link to="/job">
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

=======
    <>
      <div
        className={
          elem.featured
            ? 'border-l-4 border-teal-500 px-4 py-4 md:py-8 bg-white shadow-lg shadow-black-500 mr-8 ml-8 mt-8 mb-20 md:mb-8 flex  flex-col md:flex-row rounded-md'
            : 'p-4 bg-white shadow-lg shadow-black-500 mr-8 ml-8 mt-8 mb-20 md:mb-8 flex  flex-col md:flex-row rounded-md'
        }
        key={elem.id}
      >
        <div className="flex flex-col md:flex-row md:basis-1/2 relative md:align-center">
          <div className="max-w-4 absolute -top-20 md:basis-1/4 md:top-0 md:relative md:align-center">
            <img
              src={elem.logo}
              alt={elem.company}
              className="p-6 md:p-2 object-contain"
            />
          </div>

          <div className="md:basis-3/4 ml-2  pl-2 flex flex-col justify-center mt-14 md:mt-auto">
            <div className="flex flex-row  items-center flex-wrap">
              <h4 className="pr-1 mr-2 mb-1 text-teal-800">{elem.company}</h4>
              {elem.new ? (
                <h3 className="px-4 py-1 mb-1 mx-1 bg-teal-800 text-white rounded-2xl text-xs">
                  NEW!
                </h3>
              ) : (
                ''
              )}
              {elem.featured ? (
                <h3 className="px-4 py-1 mx-1 mb-1 bg-neutral-800 text-white rounded-2xl text-xs">
                  FEATURED
                </h3>
              ) : (
                ''
              )}
            </div>

>>>>>>> ba995891f9048f7a1f2b827939d22d818c799635
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
<<<<<<< HEAD

        <div className="flex flex-row justify-end  items-center ml-0 basis-1/2 text-teal-800 text-sm tracking-wider font-semibold">
          <span className="bg-teal-50 p-1 m-1">{elem.role}</span>
          <span className="bg-teal-50 p-1 m-1">{elem.level}</span>
          <ul className="flex flex-row p-1 m-1 ">
            {elem.languages.map((item) => (
              <li className="bg-teal-50 p-1 m-1 ">{item}</li>
=======
        <div className="line bg-neutral-200 my-4 mx-6"></div>

        <div className="flex flex-row flex-wrap justify-start items-center mx-6 md:mx-2 text-teal-800 text-sm tracking-wider font-semibold md:justify-end md:lin md:basis-1/2">
          <span className="bg-teal-50 p-1 m-1 pl-0 ml-0">{elem.role}</span>
          <span className="bg-teal-50 p-1 m-1 pl-0 ml-0">{elem.level}</span>
          <ul className="flex flex-row p-1 m-1 pl-0 ml-0 ">
            {elem.languages.map((item) => (
              <li className="bg-teal-50 p-1 m-1 pl-0 ml-0" key={item}>
                {item}
              </li>
>>>>>>> ba995891f9048f7a1f2b827939d22d818c799635
            ))}
          </ul>
          <ul className="flex flex-row">
            {elem.tools.map((item) => (
<<<<<<< HEAD
              <li className="bg-teal-50 p-1 m-1 ">{item}</li>
=======
              <li className="bg-teal-50 p-1 m-1 pl-0 ml-0" key={item}>
                {item}
              </li>
>>>>>>> ba995891f9048f7a1f2b827939d22d818c799635
            ))}
          </ul>
        </div>
      </div>
<<<<<<< HEAD
    </Link>
=======
    </>
>>>>>>> ba995891f9048f7a1f2b827939d22d818c799635
  );
};

export default ListViewElem;
