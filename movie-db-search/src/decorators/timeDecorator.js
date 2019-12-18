export default function throttle(func, ms) {
    let isThrottle = false, savedArgs, savedThis;
    
    return function wrapper() {
      if(isThrottle) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      func.apply(this, arguments);
  
      isThrottle = true;
  
      setInterval(() => {
        isThrottle = false;
        if(savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
        
      }, ms)
    }
  }