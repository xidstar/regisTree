import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HorizontalScroll from './components/HorizontalScroll';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!loading && (
        <>
          <HorizontalScroll />
        </>
        
      )}
    </div>
  );
};

export default App;
