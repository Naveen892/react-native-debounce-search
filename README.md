# react-native-debounce-search

Debouncing in search optimizes the search experience by delaying search requests until the user pauses typing. It reduces unnecessary network requests, improves performance, and provides a smoother user experience by minimizing server load and enhancing responsiveness.

## Installation

```sh
npm install react-native-debounce-search
```

## Usage

```js
import useDebounce from "react-native-debounce-search";

// ...

const [search, setSearch] = useState("");

const handleDebounce = () => {
  //. add your search function here
};

useEffect(() => {
  // ...

  useDebounce.add(handleDebounce, delay);

  // add your delay time according to your usecase.

  return () => {
    // ...
    useDebounce.remove();
  };
}, [search]);
```

## How it works

It is a class that has two functions add and remove. Add function will take your search function as an argument and delay time that you want to wait your function to wait till next itration.
After that wait time your function will run. If your changed your search element withen that time, the listner will be removed and your time will start again and it will wait again till delay time for next change if change will not happen than it will run your search function.
