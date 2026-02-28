import React from "react";

interface TotalBalanceBoxProps {
  accounts: number[];
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-5 border border-gray-100">
    
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Bank Accounts
          </h2>
          <p className="text-sm text-gray-500">
            {totalBanks} Total Banks
          </p>
        </div>

        <div className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium">
          {accounts.length} Accounts
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-6"></div>

      {/* Balance Section */}
      <div>
        <p className="text-sm text-gray-500 mb-1">
          Total Current Balance
        </p>
        <p className="text-2xl font-bold text-gray-900">
          ₹ {totalCurrentBalance.toFixed(2)}
        </p>
      </div>

    </div>
  );
};

export default TotalBalanceBox;
