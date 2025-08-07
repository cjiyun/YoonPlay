import { useEffect, useState } from 'react';

const withDeferred = WrappedComponent => {
  const DeferredComponent = props => {
    const [isDeffered, setIsDeffered] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsDeffered(true);
      }, 200);
      return () => clearTimeout(timer);
    }, []);
    if (!isDeffered) return null;
    return <WrappedComponent {...props} />;
  };
  DeferredComponent.displayName = `WithDeferred(${WrappedComponent.displayName || WrappedComponent.name})`;

  return DeferredComponent;
};

export default withDeferred;
