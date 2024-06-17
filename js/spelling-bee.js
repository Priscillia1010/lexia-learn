document.addEventListener('DOMContentLoaded', function() {
    const wordDiv = document.getElementById('word');
    const heartsDiv = document.getElementById('hearts');
    const xpDiv = document.getElementById('xp');
    const correctWord = 'ANIMAL';

    let hearts = 5;
    let xp = 100;

    document.querySelectorAll('.bottom button').forEach(button => {
        button.addEventListener('click', function() {
            const action = button.getAttribute('data-action');
            if(action === 'delete') {
                wordDiv.textContent = wordDiv.textContent.slice(0, -1);
            }
            else if(action === 'enter') {
                if(wordDiv.textContent === correctWord) {
                    xp += 100;
                    xpDiv.textContent = `${xp} XP`;
                    showModal('modal-correct');
                }
                else {
                    hearts -= 1;
                    heartsDiv.textContent = hearts;
                    if (hearts <= 0) {
                        showModal('modal-game-over');
                    } else {
                        showModal('modal-incorrect');
                    }
                }
                wordDiv.textContent = '';
            } 
            else if(action === 'space') {
                wordDiv.textContent += ' ';
            }
            else {
                wordDiv.textContent += button.textContent;
            }
        });
    });

    function showModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    };

    window.redirectToNextLevel = function() {
        window.location.href = 'ready-words-to-win.html';
    };

    window.redirectToMainPage = function() {
        window.location.href = 'main-course-unlock.html';
    };
});
