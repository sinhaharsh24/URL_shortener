import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className='bg-blue-600 text-base text-center py-5'>
        URLshortner by Harsh Sinha
    </div>
  );
};

export default Footer;

