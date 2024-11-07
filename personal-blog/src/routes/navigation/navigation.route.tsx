import { Disclosure, DisclosureButton, DisclosurePanel,  } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';




function Navigation() {

    const [currentRoute, setCurrentRoute] = useState('home');

    const navigation = [
        { name: 'Home', href: '/home', current: checkRoute('home') },
        { name: 'Coding Projects', href: '/coding-projects', current: checkRoute('coding') },
        { name: 'Writing Projects', href: '/writing-projects', current: checkRoute('writing') },
        { name: 'Hobby Blog', href: '/hobbies', current: checkRoute('hobbies') },
    ]
    
    function checkRoute(name: string) {
        if (currentRoute === name) {
            return true;
        } else {
            return false;
        }
    }
    
    function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
    }

    useEffect(() => {
    }, [currentRoute])

    function handleClick(name: string) {
        switch (name) {
            case 'Home':
                setCurrentRoute('home')
                break;
            
            case 'Coding Projects':
                setCurrentRoute('coding')
                break;

            case 'Writing Projects':
                setCurrentRoute('writing')
                break;

            case 'Hobby Blog':
                setCurrentRoute('hobbies')
                break;
        
            default:
                break;
        }
    }

    

  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
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
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
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

    <div className="bg-white dark:bg-gray-900">
        <div className='mx-6'>
            <Outlet />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    </>
  )
}

export default Navigation;