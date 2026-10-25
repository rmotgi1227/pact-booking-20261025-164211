import type { ReactNode } from 'react';

// Extracted from app/results/page.tsx so column behavior lives in one place.
export function ResultsGrid({ dense, children }: { dense: boolean; children: ReactNode }) {
  return (
    <div
      className="results-grid"
      data-testid="results-grid"
      data-tablet-dense={dense}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', width: '100%' }}
    >
      {children}
    </div>
  );
}
