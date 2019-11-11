import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

const DynamicScrollToTop = (props) => {

    // react's hook
    useEffect(() => {
    
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    
    if (props.history.action === 'POP') {
      return;
    }
    
    // In all other cases, check fragment/scroll to top
    const hash = props.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({block: 'start', behavior: 'smooth'});
      }
    } else {
    
      props.scrollType === "smooth" ? window.scroll({top: 0, left: 0, behavior: 'smooth'}) : window.scroll(0, 0)

    }});

  // return null also works fine
  return <></>

};

export default withRouter(DynamicScrollToTop);
