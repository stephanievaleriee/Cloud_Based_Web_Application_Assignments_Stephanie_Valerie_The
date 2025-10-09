'use client';

import React from 'react';

export default function CodingRacesPage() {
  return (
    <section className="container">
      <h1 className="page-title">Coding Races</h1>
      <p>
        Welcome to the <strong>Coding Races</strong> page! Here, users will compete in fast-paced coding challenges to
        test their skills under time pressure.
      </p>

      <div
        style={{
          marginTop: '20px',
          border: '1px solid #ccc',
          padding: '16px',
          borderRadius: '8px',
          background: 'var(--background)',
        }}
      >
        <h3>Coming Soon</h3>
        <p>
          Features for head-to-head challenges, leaderboards, and real-time timers will be implemented here.
        </p>
      </div>
    </section>
  );
}
