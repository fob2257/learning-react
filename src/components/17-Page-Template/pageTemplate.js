import React from 'react';

import { Menu } from './menu';

export const PageTemplate = ({ children }) =>
  (
    <div className='page'>
      <Menu />
      {children}
    </div>
  );
