function generateQuestion() {
    const n1 = Math.floor(Math.random() * 100) + 1;
    const n2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let ans;

    switch (operator) {
        case '+':
            ans = n1 + n2;
            break;
        case '-':
            ans = n1 - n2;
            break;
        case '*':
            ans = n1 * n2;
            break;
        case '/':
            ans = (n1 / n2).toFixed(2);
            break;
    }

    const question = `${n1} ${operator} ${n2}`;
    return { question, ans };
}

let { question, ans } = generateQuestion();
document.getElementById('quest').textContent = question;

document.getElementById('check_Button').addEventListener('click', function() {
    const usAns = parseFloat(document.getElementById('userAnswer').value);
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    if (usAns === parseFloat(ans)) {
        resultElement.textContent = 'คำตอบถูกต้อง!';
        scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
    } else {
        resultElement.textContent = `คำตอบผิด! คำตอบที่ถูกต้องคือ ${ans}`;
    }

    ({ question, ans } = generateQuestion());
    document.getElementById('quest').textContent = question;
    document.getElementById('userAnswer').value = '';
});