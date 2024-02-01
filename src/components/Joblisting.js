import React, { useState, useEffect } from 'react';
import JobCard from './Jobcard';

const JobListingPage = ({ userSkills, allJobs }) => {
  const [matchingJobs, setMatchingJobs] = useState([]);

  useEffect(() => {
    // Filter the jobs based on the user's skills
    const filteredJobs = allJobs.filter(job => {
      return job.requiredSkills.some(skill => userSkills.includes(skill));
    });
    setMatchingJobs(filteredJobs);
  }, [userSkills, allJobs]);

  return (
    <div>
      <h1>Matching Jobs</h1>
      {matchingJobs.length === 0 ? <p>No matching jobs found</p> :
        matchingJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
    </div>
  );
}

export default JobListingPage;