//tsrsc is used to create app component

import * as React from 'react';
// import './Header.css';  "this is not used as we are just using tailwind css to use the css in the tag itself"

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='bg-gradient-to-r from-purple-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <div className='container p-2 mx-auto'>
            <nav className='py-5'>
                <div className='text-base text-white'>URLshortner </div>
            </nav>
        </div>
    </div>

  );
};

export default Header;
