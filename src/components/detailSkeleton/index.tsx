import React from 'react';
import Skeleton from 'react-loading-skeleton';

const DetailSkeleton: React.FC = () => {
  return (
    <div>
        <div style={{ display: 'flex', marginTop: '4rem' }}>
        <Skeleton height={500} width={400} />
        <div style={{ marginLeft: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
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
      <div>
        <Skeleton height={50} width={100} style={{ marginTop: '1rem' }} />
      </div>
    </div>
  );
};

export default DetailSkeleton;
