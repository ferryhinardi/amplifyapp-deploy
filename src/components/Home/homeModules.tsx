import React from 'react';

const homeModules = {
  element: () => import('./Homepage').then((module) => <module.default />),
};

export default homeModules;
