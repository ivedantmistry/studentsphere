import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-3xl font-bold'>Oops!!</h1>
            <p className='text-xl'>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className='btn btn-warning'>Go Home</Link>
        </div>
    );
};

export default Error;