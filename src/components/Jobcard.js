import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Required Skills: {job.requiredSkills.join(', ')}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;