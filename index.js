    function clickHandler() {
      alert('Button clicked!');
    }
  
    function addingEventListener() {
      const button = document.getElementById('button');
  
      if (button) {
        button.addEventListener('click', clickHandler);
      }
    }
  

    addingEventListener();

  