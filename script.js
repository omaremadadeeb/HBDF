function checkAnswer() {
    const answer = document.getElementById('answer').value;
    if (answer === '22') {
        document.getElementById('initialMessage').style.display = 'none';
        document.querySelector('.puzzle').style.display = 'none';
        document.getElementById('finalMessage').style.display = 'block';
        document.getElementById('flowers').style.display = 'block';
    } else {
        alert('Try again!');
    }
}
