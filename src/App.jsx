import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HorizontalScroll from './components/HorizontalScroll';
import Mission from './components/Mission';
import { useSnapshot } from 'valtio';
import state from './store';

const App = () => {
  const snap = useSnapshot(state)
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!loading && (
        <div className='relative'>
          <HorizontalScroll />
          {state.isMission && (
            <Mission />
          )}
        </div>
        
      )}
    </div>
  );
};

export default App;
