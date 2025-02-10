# React Native: Accessing State Before Initialization

This repository demonstrates a common error in React Native: accessing a state variable before it has been initialized.  The error is shown and then a solution is provided.

## Bug
The bug occurs in `UninitializedStateBug.js`. It shows how attempting to access a state variable within the component before the first render leads to undefined values and potential crashes.

## Solution
The `UninitializedStateSolution.js` file shows the corrected code that initializes the state variable properly, preventing the error.

## Steps to Reproduce
1. Clone this repository.
2. Navigate to the `UninitializedStateBug.js` file and run the code.
3. Observe the error. 
4. Navigate to the `UninitializedStateSolution.js` file and run the corrected code.
5. Observe the resolved error.