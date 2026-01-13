import React from 'react';
import Header from '../components/ui/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/ui/Footer/Footer';
import LeftAside from '../components/LeftAside/LeftAside';

const RootLayout = () => {
    return (
        <div>
              <Header ></Header>
     

               
            <main className='w-11/12 mx-auto my-3 grid-cols-12 grid'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
            <section className="col-span-9">
                  <Outlet></Outlet>
      </section>
            </main>
              <Footer></Footer>
        </div>
    );
};

export default RootLayout;