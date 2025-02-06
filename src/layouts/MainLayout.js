import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import useRouteChange from '../hooks/useRouteChange';

const MainLayout = ({ children }) => {
  const isLoading = useRouteChange();

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 