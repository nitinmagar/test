const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function() {
    // Check if the clicked box is already expanded
    const isExpanded = this.classList.contains('expanded');
    
    // Remove 'expanded' class from all boxes
    boxes.forEach(box => {
      box.classList.remove('expanded');
    });

    // Hide options in all boxes
    const allOptions = document.querySelectorAll('.options');
    allOptions.forEach(option => {
      option.style.display = 'none';
    });
    
    // If the clicked box was not already expanded, expand it and show its options
    if (!isExpanded) {
      this.classList.add('expanded');
      const options = this.querySelector('.options');
      options.style.display = 'block';
    }
  });
});
