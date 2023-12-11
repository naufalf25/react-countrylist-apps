import { useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return <div>ErrorBoundary</div>;
}

export default ErrorBoundary;
