import { Disclosure, DisclosureButton, /*DisclosureButtonProps,*/ DisclosurePanel,  } from '@headlessui/react'
import { useContext, useEffect, forwardRef, /*ForwardedRef,*/ /*HTMLProps*/} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import { NavContext } from '../../contexts/nav-context/nav-context.contexts';
import { NavContextType } from '../../types/nav/types.nav';

type Props = object; // same as Props = {} empty object

// Hamburger menu button needs to be forwarded like so using forwardRef
const HamburgerButton = forwardRef<HTMLButtonElement, Props>((props, ref) => (
    <button type="button" ref={ref} {...props}>
        <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    </button>
));


/*const HamburgerMenu = forwardRef(function (props, ref: null | null = null) {

    return (
        <>
            <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            ref={ref} {...props}
            >
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 12L20 12" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                    <path d="M4 6L20 6" stroke="#b0bec5" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </>
    );

});*/





function Navigation() {

    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    //const [currentRoute, setCurrentRoute] = useState(current_route);

    useEffect(() => {

      window.scrollTo(0, 0); // Link does not scroll to top of screen when rerendering. So do so manually when the rouch changes.
      
    },[current_route, updateRoute]);
    

    
    // Navigation: array of json objects.
    const navigation = [
        { name: 'Home', href: '/', current: checkRoute('Home') },
        { name: 'Dev Blog', href: '/dev-blogs', current: checkRoute('Dev Blog') },
        { name: 'Writing Blog', href: '/writing-blogs', current: checkRoute('Writing Blog') },
        { name: 'Coding Projects', href: '/coding-projects', current: checkRoute('Coding Projects') },
    ]
    
    function checkRoute(name: string) {
        if (current_route === name) {
            return true;
        } else {
            return false;
        }
    }


    function handleClick(route:string) {
      updateRoute(route);
    }
    
    function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
    }


{/* className="group relative inline-flex items-center justify-center rounded-md p-3 bg-slate-400 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" */}

  return (
    <>
    <Disclosure as="nav" className="dark:bg-gray-800 bg-gray-100 fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden ">
            {/* Mobile menu button*/}
            <DisclosureButton as={HamburgerButton}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Xavier E."
                  src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/monitor-512"
                  className="h-8 w-auto"
                />
                <h4 className='ml-1 font-bold text-2xl dark:text-blue-300'>Xavier's Blog</h4>
              </div>
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link onClick={() => handleClick(item.name)}
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-500  hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*Disclosure only rendered in mobile view even if triggered in Disclosure button */}

      <DisclosurePanel transition className="md:hidden origin-top transition duration-100 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-500 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div className="bg-white dark:bg-gray-900 h-full">
        <div className='mx-6 mt-14'>
            <Outlet />
        </div>
        <div className='fixed bottom-0 w-screen'>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Navigation;