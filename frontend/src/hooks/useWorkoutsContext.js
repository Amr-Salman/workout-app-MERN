import { WorkoutsContext } from '../context/WorkoutContext';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
  // return the value passed in the provider component
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error('useWorkoutContext must be used inside an WorkoutProvider');
  }

  return context;
};
