document.addEventListener('DOMContentLoaded', function() {
    const wordDiv = document.getElementById('word')
    const heartsDiv = document.getElementById('hearts')
    const xpDiv = document.getElementById('xp')
    const correctWord = 'ANIMAL'

    let hearts = 5
    let xp = 100

    document.querySelectorAll('.bottom button').forEach(button => {
        button.addEventListener('click', function() {
            const action = button.getAttribute('data-action')
            if(action === 'delete') {
                wordDiv.textContent = wordDiv.textContent.slice(0, -1);
            }
            else if(action === 'enter') {
                if(wordDiv.textContent === correctWord) {
                    xp += 100
                    xpDiv.textContent = `${xp}XP`
                }
                else {
                    messageDiv.textContent = 'Incorrect, try again!';
                    hearts -= 1;
                    heartsDiv.textContent = hearts;
                    if (hearts <= 0) {
                        
                    }
                }
            } 
            else if(action === 'space') {
                wordDiv.textContent += ' '
            }
            else {
                wordDiv.textContent += button.textContent
            }
        })
    })
})