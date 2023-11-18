import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader: React.FC = () => {

  return (
    <div style={{marginTop:'4rem'}}>
      <Skeleton  height={500} width={800} style={{color: 'gray'}} />

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <Skeleton height={150} width={100} style={{ marginRight: '1rem' }} />
          <div style={{ flex: 1 }}>
            <Skeleton height={30} width={150} style={{ marginBottom: '0.5rem' }} />
            <Skeleton height={20} width={100} />
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <Skeleton height={150} width={100} style={{ marginRight: '1rem' }} />
          <div style={{ flex: 1 }}>
            <Skeleton height={30} width={150} style={{ marginBottom: '0.5rem' }} />
            <Skeleton height={20} width={100} />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <Skeleton height={150} width={100} style={{ marginRight: '1rem' }} />
          <div style={{ flex: 1 }}>
            <Skeleton height={30} width={150} style={{ marginBottom: '0.5rem' }} />
            <Skeleton height={20} width={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;