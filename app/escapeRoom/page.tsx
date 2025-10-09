'use client';

import React from 'react';

export default function EscapeRoomPage() {
  return (
    <section className="container">
      <h1 className="page-title">Escape Room</h1>
      <p>
        Welcome to the <strong>Escape Room</strong> page! This section will host challenges where users must solve logic
        puzzles or timed problems to "escape" the room.
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
          Interactive puzzles and tasks will be added here. Stay tuned for updates!
        </p>
      </div>
    </section>
  );
}
