import { useState } from 'react';

const FinanceList = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, patient: 'John Doe', amount: 150, date: '2025-06-01', services: ['Consultation', 'Lab Test'] },
    // Add more sample data
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Finance Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Create Invoice</button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Patient</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Date</th>
            <th className="p-2">Services</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="p-2">{invoice.id}</td>
              <td className="p-2">{invoice.patient}</td>
              <td className="p-2">${invoice.amount}</td>
              <td className="p-2">{invoice.date}</td>
              <td className="p-2">{invoice.services.join(', ')}</td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceList;