'use client'

import GetTransactions from "@/app/feature/transactions/get.transactions";

export default function Home() {
  return (
    <main className="main-content">
      <h1>Historial de Transacciones</h1>
      <GetTransactions/>
    </main>
  );
};