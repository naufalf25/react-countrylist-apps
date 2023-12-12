import { Link, useRouteError } from 'react-router-dom';
import Layout from './Layout';

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return (
    <Layout>
      <div className="w-full h-[90vh] p-4 flex justify-center items-center dark:text-white">
        <div>
          <div className="text-center">
            <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
              Something went wrong!
            </h2>
            <p className="mt-2 text-sm text-slate-300 italic">
              Error:{' '}
              {'status' in error
                ? `${error.status} - ${error.data}`
                : error.message}
            </p>
          </div>
          <div className="mt-6 flex justify-center items-center">
            <img
              src="/images/error.png"
              alt="error"
              className="w-80 md:w-96 lg:w-[28rem]"
            />
          </div>
          <div className="mt-10 text-sm md:text-base text-center">
            <p>
              There was a problem processing the request. Please try again later
            </p>
            <p className="mt-2">
              To report an issue,{' '}
              <a
                href="https://github.com/naufalf25/react-countrylist-apps/issues/new"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-600 hover:text-black"
              >
                Click Here
              </a>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to={'/'}
              className="mt-10 w-36 p-2 rounded-lg shadow-lg text-center font-semibold border hover:shadow-xl dark:bg-dark-element dark:border-dark-element"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ErrorBoundary;
