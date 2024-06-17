document.addEventListener('DOMContentLoaded', (event) => {
    let draggedElement;
    let hearts = 5;
    let xp = 100;

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

        checkWord();
        return false;
    }

    // Function to handle the drag end event
    function handleDragEnd(e) {
        // Remove any styles or classes added during the drag
        [].forEach.call(cols, function (col) {
            col.classList.remove('over');
        });
    }

    // Function to check the current word
    function checkWord() {
        let currentWord = '';
        document.querySelectorAll('.isian-huruf').forEach((el) => {
            currentWord += el.innerText;
        });

        if (currentWord === 'HOUSE') {
            xp += 50; // Increase XP by 50
            document.getElementById('xp').innerText = `${xp}XP`;
            showModal('correctModal');
        } else if (currentWord.length === 5) {
            hearts--;
            document.getElementById('hearts').innerText = hearts;
            if (hearts > 0) {
                showModal('incorrectModal');
            } else {
                showModal('noHeartsModal');
                setTimeout(() => {
                    window.location.href = '../html/main-course-unlock.html';
                }, 3000); // Redirect after 3 seconds
            }
        }
    }

    // Function to show modal
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';

        const closeModal = () => {
            modal.style.display = 'none';
        };

        modal.querySelector('.close').onclick = closeModal;
        if (modalId === 'correctModal') {
            document.getElementById('proceedButton').onclick = () => {
                window.location.href = '../html/ready-say-the-word.html';
            };
        }

        window.onclick = (event) => {
            if (event.target == modal) {
                closeModal();
            }
        };
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
