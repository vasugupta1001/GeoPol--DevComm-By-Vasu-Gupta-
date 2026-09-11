const totalQuestions = 20;

function updateProgress() {
    let answeredCount = 0;
    for (let i = 1; i <= totalQuestions; i++) {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            answeredCount++;
        }
    }
    
    let percentage = (answeredCount / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = `${answeredCount} of ${totalQuestions} Answered`;
}

function checkAnswers() {
    const answers = {
        q1: 'B',
        q2: 'C',
        q3: 'B',
        q4: 'C',
        q5: 'C',
        q6: 'D',
        q7: 'A',
        q8: 'B',
        q9: 'C',
        q10: 'B',
        q11: 'C',
        q12: 'B',
        q13: 'A',
        q14: 'B',
        q15: 'B',
        q16: 'A',
        q17: 'B',
        q18: 'C',
        q19: 'B',
        q20: 'B'
    };

    let score = 0;

    for (let key in answers) {
        let selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        let questionBlock = document.getElementById(`block-${key}`);
        
        questionBlock.classList.remove('correct', 'incorrect');

        if (selectedOption) {
            if (selectedOption.value === answers[key]) {
                questionBlock.classList.add('correct');
                score++;
            } else {
                questionBlock.classList.add('incorrect');
            }
        } else {
            questionBlock.classList.add('incorrect');
        }
    }

    let percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('final-percentage').textContent = percentage + '%';
    document.getElementById('result-score-text').textContent = `You scored ${score} out of ${totalQuestions}`;
    
    let feedback = "";
    if (score >= 18) {
        feedback = "Outstanding global intelligence score! You are fully qualified for diplomatic affairs.";
    } else if (score >= 12) {
        feedback = "Solid knowledge of global current affairs and international organizations.";
    } else {
        feedback = "Good attempt! Review the highlighted responses to improve your global affairs knowledge.";
    }
    document.getElementById('result-feedback').textContent = feedback;

    document.getElementById('result-modal').style.display = 'flex';
}

function resetQuiz() {
    document.getElementById('result-modal').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}