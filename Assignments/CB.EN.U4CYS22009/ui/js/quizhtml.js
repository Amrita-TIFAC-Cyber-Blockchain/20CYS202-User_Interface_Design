document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var score = 0;
    var userAnswers = []; // Array to store user's selected options
    var correctAnswers = ['a', 'a', 'b']; // Correct answers for each question

    // Calculate score and store user's selected options
    for (var i = 1; i <= correctAnswers.length; i++) {
      var questionName = 'q' + i;
      var selectedOption = document.querySelector('input[name="' + questionName + '"]:checked');

      if (selectedOption) {
        userAnswers.push(selectedOption.value);
        if (selectedOption.value === correctAnswers[i - 1]) {
          score++;
        }
      }
    }

    // Display score
    alert('Your score: ' + score + '/' + correctAnswers.length);
  });