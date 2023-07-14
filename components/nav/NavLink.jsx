import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavLink({ children, href, exact, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += ' active';
  }

  return <Link href={href} {...props}>{children}</Link>;
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

NavLink.defaultProps = {
  exact: false
};



    // <Link href={href} {...props}>
    //   <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-40">
    //     <span className="pr-1 font-semibold flex-1">{buttonText}</span>
    //     <span>
    //       <svg
    //         className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 20 20"
    //       >
    //         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    //       </svg>
    //     </span>
    //   </button>
    // </Link>