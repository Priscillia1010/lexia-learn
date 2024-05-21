document.addEventListener('DOMContentLoaded', (event) => {
    let draggedElement;

    // Function to handle the drag start event
    function handleDragStart(e) {
        draggedElement = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    }

    // Function to handle the drag over event
    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary to allow dropping
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    // Function to handle the drop event
    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops the browser from redirecting.
        }
        
        // Don't do anything if dropping the same element
        if (draggedElement != this) {
            draggedElement.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    // Function to handle the drag end event
    function handleDragEnd(e) {
        // Remove any styles or classes added during the drag
        [].forEach.call(cols, function (col) {
            col.classList.remove('over');
        });
    }

    let cols = document.querySelectorAll('.huruf');
    [].forEach.call(cols, function(col) {
        col.setAttribute('draggable', 'true');
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });

    let dropZones = document.querySelectorAll('.isian-huruf');
    [].forEach.call(dropZones, function(dropZone) {
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleDrop, false);
    });
});
