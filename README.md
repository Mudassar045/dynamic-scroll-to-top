# Dynamically Scroll to Top

Dynamically scroll to top in React JS components. Handling the scroll position in a react app on route change

## Usage

Just import the component, use like other components

```js

import DynamicScrollToTop from `DynamicScrollToTop.js`

```

```jsx

return(<DynamicScrollTop scrollType="smooth" />);

```

### One liner solution of Above Solution

```js
// react's hook
useEffect(() => {
    window.scroll(0, 0)
})

```

For more details Visit [Dynamically Scrol to Top - Original](https://medium.com/@vks18765/dynamic-scroll-to-top-in-react-js-with-react-router-dom-and-react-hooks-72f1937a6a86)

Note: Below are the links for more details on `location` and `scroll`

- [window.location - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [window.scroll - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll)
