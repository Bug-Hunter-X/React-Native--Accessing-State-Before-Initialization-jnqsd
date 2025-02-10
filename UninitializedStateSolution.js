import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0); // Initialize state

  useEffect(() => {
    // Simulate an asynchronous operation that updates the state
    setTimeout(() => {
      setCount(10);
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text> {/* Access the state safely after initialization*/}
    </View>
  );
};
export default MyComponent;