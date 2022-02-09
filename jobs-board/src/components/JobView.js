import React from 'react';
import { useParams } from 'react-router-dom';
import { getJob } from '../data';

const JobView = () => {
  let params = useParams();
  console.log(params);
  let job = getJob(parseInt(params.jobId));
  console.log(job);

  return (
    <div>
      Job {params.jobId}
      {job.company}
    </div>
  );
};

export default JobView;
