import { ReactElement, useEffect, useState } from 'react';
import Navbar from './Navbar';

export type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

const Layout = ({ children }: ChildrenType) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('darkMode');
    if (value !== null) {
      setDarkMode(JSON.parse(value));
    }
  }, []);
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="font-nunito bg-white z-10 dark:bg-slate-900 h-full">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
