import React from 'react';
import type { FoodItem } from '../types';

interface AnnexTableProps {
  title: string;
  headers: string[];
  items: FoodItem[];
}

const AnnexTable: React.FC<AnnexTableProps> = ({ title, headers, items }) => {
  return (
    <div className="my-8">
      <h4 className="text-2xl font-bold text-stone-700 mb-4">{title}</h4>
      <div className="overflow-x-auto bg-white/50 rounded-xl shadow-lg border border-orange-200">
        <table className="w-full min-w-[600px] text-left text-stone-700">
          <thead className="bg-orange-200">
            <tr>
              {headers.map((header) => (
                <th key={header} className="p-4 font-black text-stone-800 uppercase tracking-wider text-sm">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-orange-200">
            {items.map((item) => (
              <tr key={item.name} className="hover:bg-orange-100/50 transition-colors">
                <td className="p-4 font-semibold">{item.name}</td>
                <td className="p-4">{item.examples}</td>
                <td className="p-4">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnexTable;
