//Task-5: use switch case to assign a grade based on the score...

let score = 690

switch (true) {
    case (score > 90 && score <= 100):
        console.log(`The grade for a score of ${score} is A.`);
        break;
    case (score > 75 && score <= 90):
        console.log(`The grade for a score of ${score} is B.`);
        break;
    case (score > 60 && score <= 75):
        console.log(`The grade for a score of ${score} is C.`);
        break;
    case (score > 45 && score <= 60):
        console.log(`The grade for a score of ${score} is D.`);
        break;
    case (score > 30 && score <= 45):
        console.log(`The grade for a score of ${score} is E.`);
        break;
    case (score >= 0 && score <= 30):
        console.log(`The grade for a score of ${score} is F.`);
        break;

    default:
        console.log(`Enter the valid score for your grade!!`);
        break;
}