import React, { lazy, Suspense } from 'react';

const LazyEducation = lazy(() => import('./Education'));

const Education = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEducation {...props} />
  </Suspense>
);

export default Education;
