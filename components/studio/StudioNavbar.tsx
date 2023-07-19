import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between ">
        <Link
          href="/"
          className="flex items-center text-tertiary hover:bg-hoverMedium p-5"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-tertiary" />
          Go Back To Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;
