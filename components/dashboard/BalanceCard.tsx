import React from 'react';
import type { Balance } from '../../types';

interface BalanceCardProps {
  balance: Balance;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
  return (
    <div className="bg-gray-950 p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
      <div>
        <span className="font-bold text-lg text-gray-300">模型 {balance.model} 余额</span>
      </div>
      <div>
        <p className="text-3xl font-bold mt-2">
            {balance.currency}{balance.amount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default BalanceCard;
