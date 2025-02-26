const typeRightWrong = 0;
const typeProgress = 1;

const testСommunicationAnalysis = {
    title: "Communication Analysis with People",
    image: 'sad.jpg',
    shortDescription: "This test evaluates your communication patterns with others and helps you understand your interaction style.",
    description: `
                <p>The Communication Analysis Test includes 8 questions designed to help you evaluate your interaction strategies and emotional responses when dealing with people. Take this test to gain insights into your communication habits and discover areas for potential improvement. It only takes a few minutes!</p>
                    `,
    type: typeRightWrong,
    questions: [
        {
            name: "What would you do if someone ignores your messages?",
            answers: [
                "Stop messaging them completely",
                "Ask if everything is okay",
                "Keep waiting for a response",
                "Block them everywhere"
            ],
            correctAnswer: 0
        },
        {
            name: "What would you do if someone doesn’t text you back?",
            answers: [
                "Text them again",
                "Wait patiently",
                "Move on and focus on someone else",
                "Try to find out what’s happening through mutual friends"
            ],
            correctAnswer: 2
        },
        {
            name: "How would you react if someone suggested splitting the bill 50/50?",
            answers: [
                "Pay my part and stop talking to them",
                "Try to convince them to pay for me",
                "Offer to pay for both of us",
                "Pay my part and continue the conversation"
            ],
            correctAnswer: 0
        },
        {
            name: "What would you do if someone you’re interested in starts talking to someone else?",
            answers: [
                "Message the other person to confront them",
                "Get upset and make a scene",
                "Start stalking their social media",
                "Decide it’s not worth it and let it go"
            ],
            correctAnswer: 3
        },
        {
            name: "What would you do if someone doesn’t invite you out for a meeting or date?",
            answers: [
                "Invite them myself",
                "Plan a fun day out for myself",
                "Start an argument and express my frustration",
                "Ask friends for endless advice"
            ],
            correctAnswer: 1
        },
        {
            name: "What would you do if someone shared an opinion you strongly disagree with?",
            answers: [
                "Calmly try to persuade them to see your perspective",
                "Stay quiet and laugh it off later",
                "Challenge them directly with logical arguments",
                "Agree with them to avoid conflict"
            ],
            correctAnswer: 2
        },
        {
            name: "How would you respond if someone messaged you late at night with 'Are you awake?'?",
            answers: [
                "Ignore the message and continue sleeping",
                "Reply excitedly right away",
                "Start a conversation that lasts all night",
                "Overthink the message and discuss it with friends"
            ],
            correctAnswer: 0
        },
        {
            name: "What would you do if someone made a negative comment about your appearance?",
            answers: [
                "Try to change what they criticized",
                "Tell them off firmly",
                "Stay silent and internalize the hurt",
                "Express how hurtful their comment is"
            ],
            correctAnswer: 1
        }
    ]
};
const testStressBar = {
    title: "Stress Scale (PSS)",
    image: 'stress.jpg',
    shortDescription: "Helps evaluate the level of stress you may experience during communication with others.",
    description: `
                <p>This test consists of 5 questions designed to help assess your comfort and confidence levels during interactions with people. Take this test to understand how easily you manage communication and how it impacts your emotional state. All questions focus on how you typically feel and behave in various social situations.</p>
                    `,
    type: typeProgress,
    questions: [
        {
            name: "Have you felt like you don’t enjoy communicating with others?",
            answers: [
                { name: "Never", point: 1 },
                { name: "Rarely", point: 2 },
                { name: "Sometimes", point: 3 },
                { name: "Often", point: 4 },
                { name: "Always", point: 5 },
            ],
        },
        {
            name: "Have you felt nervous or stressed?",
            answers: [
                { name: "Never", point: 1 },
                { name: "Rarely", point: 2 },
                { name: "Sometimes", point: 3 },
                { name: "Often", point: 4 },
                { name: "Always", point: 5 },
            ],
        },
        {
            name: "Have you felt irritated because of someone else?",
            answers: [
                { name: "Never", point: 1 },
                { name: "Rarely", point: 2 },
                { name: "Sometimes", point: 3 },
                { name: "Often", point: 4 },
                { name: "Always", point: 5 },
            ],
        },
        {
            name: "Have you felt unsure about your ability to handle personal problems?",
            answers: [
                { name: "Never", point: 1 },
                { name: "Rarely", point: 2 },
                { name: "Sometimes", point: 3 },
                { name: "Often", point: 4 },
                { name: "Always", point: 5 },
            ],
        },
        {
            name: "Have you felt like things aren’t going the way you’d like them to?",
            answers: [
                { name: "Never", point: 1 },
                { name: "Rarely", point: 2 },
                { name: "Sometimes", point: 3 },
                { name: "Often", point: 4 },
                { name: "Always", point: 5 },
            ],
        }
    ]
};
const tests = [testСommunicationAnalysis, testStressBar];