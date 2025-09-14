import { useState } from 'react';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const questions = [
    {
      question: "What's the first step in Scan & Go?",
      options: [
        "Download the app",
        "Scan the QR code at entrance", 
        "Create an account",
        "Add payment method"
      ],
      correct: 1,
      explanation: "Customers start by scanning the QR code at the store entrance to access trends.store"
    },
    {
      question: "When should you NOT detag an item?",
      options: [
        "When customer shows digital invoice",
        "When payment is successful", 
        "When you can't verify the invoice",
        "When customer seems happy"
      ],
      correct: 2,
      explanation: "Never detag without verifying the invoice matches the store, amount, and items"
    },
    {
      question: "What should you ask after detagging?",
      options: [
        "Would you like a printed receipt?",
        "How would you rate this experience?",
        "Do you need help carrying bags?",
        "Would you like to join our newsletter?"
      ],
      correct: 1,
      explanation: "Always ask for NPS feedback to help improve the Scan & Go experience"
    },
    {
      question: "If a customer's payment is pending, what should you do?",
      options: [
        "Ask them to retry immediately",
        "Direct them to POS counter",
        "Wait 2-3 minutes for processing",
        "Cancel their transaction"
      ],
      correct: 2,
      explanation: "Payment processing can take 2-3 minutes. If money was deducted, they can proceed to detag"
    },
    {
      question: "What makes a good Scan & Go pitch?",
      options: [
        "Explaining all technical features",
        "Skip the line—scan & pay on your phone",
        "It's faster than regular checkout",
        "You'll love this new technology"
      ],
      correct: 1,
      explanation: "Keep it simple and benefit-focused: emphasize skipping the queue"
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => answer === questions[index].correct).length;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setShowCertificate(false);
  };

  const generateCertificate = () => {
    setShowCertificate(true);
    // Add confetti animation
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'animate-confetti';
      confetti.innerHTML = '🎉';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 1000);
    }, 100);
  };

  const score = calculateScore();
  const passed = score >= 4;

  if (showCertificate) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-success/5">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-xl p-8 card-elevated text-center print-card">
            <div className="mb-6">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Scan & Go Certification
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">This certifies that</p>
              <div className="border-b-2 border-dashed border-primary/30 pb-2 mb-2">
                <span className="text-xl font-semibold text-foreground">Store Team Member</span>
              </div>
              <p className="text-muted-foreground">has successfully completed</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                TRENDS Scan & Go Training
              </h3>
              <p className="text-sm text-muted-foreground">
                Score: {score}/5 • {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center print-hidden">
              <Button onClick={() => window.print()} variant="outline">
                Print Certificate
              </Button>
              <Button onClick={resetQuiz}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Take Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (showResult) {
    return (
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-xl p-8 card-elevated text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${passed ? 'bg-success/10' : 'bg-destructive/10'}`}>
              {passed ? (
                <CheckCircle className="h-8 w-8 text-success" />
              ) : (
                <XCircle className="h-8 w-8 text-destructive" />
              )}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              {passed ? 'Congratulations!' : 'Almost There!'}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              You scored {score} out of {questions.length}
            </p>

            {passed ? (
              <div>
                <p className="text-success mb-6">
                  You've mastered Scan & Go! Ready to help customers on the floor.
                </p>
                <Button onClick={generateCertificate} className="btn-hero">
                  <Award className="h-4 w-4 mr-2" />
                  Get Certificate
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-destructive mb-6">
                  Review the training materials and try again to earn your certificate.
                </p>
                <Button onClick={resetQuiz} variant="outline">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Retake Quiz
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-8 card-elevated animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answers[currentQuestion] !== undefined}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion] === index
                    ? answers[currentQuestion] === questions[currentQuestion].correct
                      ? 'border-success bg-success/10 text-success'
                      : 'border-destructive bg-destructive/10 text-destructive'
                    : answers[currentQuestion] !== undefined && index === questions[currentQuestion].correct
                    ? 'border-success bg-success/10 text-success'
                    : 'border-border hover:border-primary hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">{String.fromCharCode(65 + index)}</span>
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {answers[currentQuestion] !== undefined && (
            <div className="mt-6 p-4 bg-secondary/30 rounded-lg animate-fade-in-up">
              <p className="text-sm text-muted-foreground">
                <strong>Explanation:</strong> {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;