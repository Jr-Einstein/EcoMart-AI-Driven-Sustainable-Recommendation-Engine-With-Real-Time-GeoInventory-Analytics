'use client';

import React from 'react';
import { StateProvider } from './lib/StateProvider';
import { initialState } from './lib/reducer';
import reducer from './lib/reducer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  );
}
