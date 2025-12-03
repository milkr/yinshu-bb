
import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Management from './components/management/Management';
import OverviewDashboard from './components/overview/OverviewDashboard';
import GrowthDashboard from './components/growth/GrowthDashboard';
import GenerationDashboard from './components/generation/GenerationDashboard';
import FinanceDashboard from './components/finance/FinanceDashboard';

export type View = 'overview' | 'growth' | 'generation' | 'finance' | 'management';

function App() {
  const [activeView, setActiveView] = useState<View>('overview');

  const renderView = () => {
    switch (activeView) {
      case 'overview':
        return <OverviewDashboard />;
      case 'growth':
        return <GrowthDashboard />;
      case 'generation':
        return <GenerationDashboard />;
      case 'finance':
        return <FinanceDashboard />;
      case 'management':
        return <Management />;
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 p-6 lg:p-10 overflow-hidden">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
