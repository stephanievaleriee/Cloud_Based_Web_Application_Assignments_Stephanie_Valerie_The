'use client';

import React from 'react';

export default function CourtRoomPage() {
  return (
    <section className="container">
      <h1 className="page-title">Court Room</h1>
      <p>
        Welcome to the <strong>Court Room</strong> page! This area will allow users to debate, justify code decisions,
        and evaluate reasoning against different solutions.
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
          Future plans include mock trial-style discussions, peer reviews, and code justification rounds.
        </p>
      </div>
    </section>
  );
}
