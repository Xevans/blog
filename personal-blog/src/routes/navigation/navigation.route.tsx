import { Disclosure, DisclosureButton, DisclosurePanel,  } from '@headlessui/react'
import { useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import { NavContext } from '../../contexts/nav-context/nav-context.contexts';
import { NavContextType } from '../../types/nav/types.nav';




function Navigation() {

    const {current_route, updateRoute} = useContext(NavContext) as NavContextType;

    //const [currentRoute, setCurrentRoute] = useState(current_route);

    /*useEffect(() => {

      
    },[current_route, updateRoute]);
    */

    

    const navigation = [
        { name: 'Home', href: '/', current: checkRoute('Home') },
        { name: 'Coding Projects', href: '/coding-projects', current: checkRoute('Coding Projects') },
        { name: 'Writing Projects', href: '/writing-projects', current: checkRoute('Writing Projects') },
        { name: 'Hobby Blog', href: '/hobbies', current: checkRoute('Hobby Blog') },
    ]
    
    function checkRoute(name: string) {
        if (current_route === name) {
            return true;
        } else {
            return false;
        }
    }


    function handleClick(route:string) {
      console.log("here");
      updateRoute(route);
    }
    
    function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
    }




  return (
    <>
    <Disclosure as="nav" className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Xavier E."
                  src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/monitor-512"
                  className="h-8 w-auto"
                />
                <h4 className='ml-1 font-bold text-2xl text-slate-300'>Xavier's Blog</h4>
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link onClick={() => handleClick(item.name)}
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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


      {/*Mobile ver? */}

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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