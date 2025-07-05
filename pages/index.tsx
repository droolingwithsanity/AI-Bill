import React, { useEffect, useState } from 'react';
import BillViewers from '../components/BillViewers';
import BillVisualization from '../components/BillVisualization';
import Biometrics from '../components/Biometrics';
import SideAuth from '../components/SideAuth';
import WebAuthnButton from '../components/WebAuthnButton';
import { generateFakeUsers, generateFakeBills } from '../lib/fakeData';

type Bill = { id: string; userId: string; description: string; amount: number; dueDate: string; insights?: string };

export default function Home() {
  const [users] = useState(generateFakeUsers(5));
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    setBills(users.flatMap(u => generateFakeBills(u.id, 3)));
  }, [users]);

  const analyzeBill = async (bill: Bill) => {
    const res = await fetch('/api/analyze-bill', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: bill.description, amount: bill.amount })
    });
    const data = await res.json();
    setBills(bills.map(b => b.id === bill.id ? { ...b, insights: data.insights } : b));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <SideAuth />
      <WebAuthnButton />
      <Biometrics />
      <BillViewers users={users} />
      <BillVisualization bills={bills} />
      <div>
        <h2>Bill Analysis</h2>
        {bills.map(b => (
          <div key={b.id}>
            <strong>{b.description}</strong> – ${b.amount.toFixed(2)}
            <button onClick={() => analyzeBill(b)}>Analyze</button>
            {b.insights && <p><em>{b.insights}</em></p>}
          </div>
        ))}
      </div>
    </div>
  );
}
