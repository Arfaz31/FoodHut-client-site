import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaRegMeh} from 'react-icons/fa';
const Error = () => {
    const { error, status } = useRouteError()
    return (
      <section className='w-50 mx-auto mt-5 d-flex align-items-center justify-content-center  py-5 bg-light text-danger'>
        <div className='container d-flex flex-column align-items-center justify-content-center px-3 mx-auto mt-3 mb-3'>
          <FaRegMeh className='fs-1 fw-bold'/>
          <div className=' text-center mt-3'>
            <h2 className='mb-3 fw-bolder fs-1 text-danger'>
              <span className=''>Error</span> {status || 404}
            </h2>
            <p className='fs-4 fw-bold  mb-5'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-3 py-3 fw-bold rounded bg-info text-white text-decoration-none'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    )
};

export default Error;