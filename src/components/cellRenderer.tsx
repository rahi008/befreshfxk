import React from 'react';
import { Currency_rate } from '@/models/semex';

interface CurrencyCellRendererProps {
  value:any;
}

const CurrencyCellRenderer: React.FC<CurrencyCellRendererProps> = ({ value }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`text-2xl avatar fi fi-${value.CountryCode}`} />
      <div>
        <div className="text-start font-bold">{value.CurrencyCode}</div>
        <div className="text-sm opacity-50">{value.CurrencyTagLine}</div>
      </div>
    </div>
  );
};

export default CurrencyCellRenderer;
