import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <div className="mt-4">
      <Link
        to={'/'}
        className="w-36 py-1 px-6 md:px-8 flex items-center gap-2 shadow-lg rounded-md group transition-shadow duration-300 dark:bg-dark-element dark:text-white hover:shadow-xl"
      >
        <IoIosArrowRoundBack className="text-3xl font-bold transition-transform duration-300 dark:text-white group-hover:-translate-x-2" />
        Back
      </Link>
    </div>
  );
}

export default BackButton;
