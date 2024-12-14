import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wakeUpServerAction } from '../../actions/wakeUpActions';
import { ServerStatusIsland } from '../serverStatusIsland/ServerStatusIsland';

export const WakeUp = () => {
  const dispatch = useDispatch();
  const { isAwake, loading, error } = useSelector((state) => state.wakeUp);

  useEffect(() => {
    if (!isAwake) {
    dispatch(wakeUpServerAction());
    }
  }, [dispatch, isAwake]);

  return (
    <div>
      <ServerStatusIsland loading={loading} error={error} isAwake={isAwake} />
    </div>
  );
};
