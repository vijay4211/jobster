// components-JobsContainer.jsx:================

import { useEffect } from 'react'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { getAllJobs } from '../features/allJobs/allJobsSlice'

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs)
  // console.log("jobs====",jobs[0].company);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

  if (isLoading) {
    return <Loading center="center" />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  //don't write code of useEffect here. because it is show an error

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          // console.log("job====",jobs)
          return <Job key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}

export default JobsContainer
