
import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Management from './components/management/Management';

export type View = 'dashboard' | 'management';

function App() {
  const [activeView, setActiveView] = useState<View>('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'management':
        return <Management />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 p-6 lg:p-10">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
