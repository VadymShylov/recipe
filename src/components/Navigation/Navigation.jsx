import React, { useState } from 'react';

import { Navbar } from './Navbar';
import { Input } from 'components/Input/Input';
import { DrawerMenu } from 'components/DrawerMenu/DrawerMenu';
import { MobMenu } from 'components/MobMenu/MobMenu';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggle = e => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1640px]mx-auto flex justify-between items-center p-4 gap-9 ">
      {/* Left Side */}
      <div className="flex  items-center">
        <Navbar onClickChange={toggle} />
      </div>

      {/* Search Input */}
      <Input />

      {/* Cart button */}
      <h1 className="text-1xl sm:text-2xl lg:text-3xl px-2">
        <Link to="/" className="font-bold ">
          Best<span className="font-bold text-orange-600">Eats</span>
        </Link>
      </h1>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <MobMenu onClick={toggle} /> : ''}

      {/* Side drawer menu */}
      <div
        onClick={toggle}
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen  bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen  bg-white z-10 duration-300'
        }
      >
        <DrawerMenu onClickChange={toggle} />
      </div>
    </div>
  );
};
export default Navigation;
