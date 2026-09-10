export interface ListeningQuestion {
    id: number;
    text: string;
    options?: string[]; // for multiple choice
    correctAnswer: string; // string representation for both fill-in and multiple choice
    type: 'choice' | 'fill';
    explanation: string;
}

export interface ListeningSection {
    sectionNumber: number;
    title: string;
    audioUrl: string;
    script: string;
    instruction: string;
    questions: ListeningQuestion[];
}

export interface ListeningExam {
    id: string;
    title: string;
    sections: ListeningSection[];
}

export const IELTS_LISTENING_EXAMS: ListeningExam[] = [
    {
        id: "cambridge-18-test-1",
        title: "IELTS Listening Academic Practice Test 1",
        sections: [
            {
                sectionNumber: 1,
                title: "Section 1: Customer Order Inquiry",
                audioUrl: "",
                script: "Clerk: Good morning, Office Supplies Depot. How can I help you today?\nCustomer: Hello, I would like to place an urgent order for our design firm.\nClerk: Certainly, sir. May I have your full name please?\nCustomer: Yes, it is Harry Jackson. That is spelled J-A-C-K-S-O-N.\nClerk: Thank you Mr. Jackson. And what is your direct contact number?\nCustomer: My direct number is 07200 453911.\nClerk: Great. When would you like the delivery delivered?\nCustomer: Well, Monday 14th June is too early for our site, and Friday 18th is too late. So could we agree on Wednesday, 16th June?\nClerk: Wednesday the 16th is booked. Thank you!",
                instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                questions: [
                    {
                        id: 1,
                        text: "Name of the customer: Harry ________",
                        correctAnswer: "Jackson",
                        type: "fill",
                        explanation: "The speaker spells out the name: J-A-C-K-S-O-N."
                    },
                    {
                        id: 2,
                        text: "Contact phone number: 07200 ________",
                        correctAnswer: "453911",
                        type: "fill",
                        explanation: "The customer states: 'My direct number is 07200 453911.'"
                    },
                    {
                        id: 3,
                        text: "Item delivery date requested:",
                        options: [
                            "Monday, 14th June",
                            "Wednesday, 16th June",
                            "Friday, 18th June"
                        ],
                        correctAnswer: "1", // Wednesday, 16th June (Index 1)
                        type: "choice",
                        explanation: "He mentions Monday is too early and Friday is too late, so they agree on Wednesday, 16th June."
                    }
                ]
            },
            {
                sectionNumber: 2,
                title: "Section 2: Local Community Museum Guide",
                audioUrl: "",
                script: "Guide: Welcome everybody to the St. Jude Community Museum. Before we start our exhibition walk, let me give you some background. The museum structure was completed in 1885 after five years of planning. We are proud that while adult admission is five dollars, entry remains completely free for school kids under twelve.",
                instruction: "Choose the correct letter, A, B or C.",
                questions: [
                    {
                        id: 4,
                        text: "When was the museum building originally constructed?",
                        options: [
                            "1840",
                            "1885",
                            "1910"
                        ],
                        correctAnswer: "1", // 1885 (Index 1)
                        type: "choice",
                        explanation: "The guide says: 'The museum structure was completed in 1885 after five years of planning starting in 1840.'"
                    },
                    {
                        id: 5,
                        text: "What is the entry price for school children under 12?",
                        correctAnswer: "Free",
                        type: "fill",
                        explanation: "The guide mentions: 'While adults pay $5, entry remains completely free for school kids under twelve.'"
                    }
                ]
            },
            {
                sectionNumber: 3,
                title: "Section 3: Academic Tutor Consultation on Biology Project",
                audioUrl: "",
                script: "Tutor: Good afternoon Sarah. Let's discuss your coastal ecosystem project.\nStudent: Thanks Professor. I decided to focus our primary field research on sea turtles conservation along the southern reef.\nTutor: Excellent topic. How many distinct species did you observe in the sanctuary?\nStudent: We recorded data on exactly four different species over the three weeks.",
                instruction: "Complete the Biology project overview notes below.",
                questions: [
                    {
                        id: 6,
                        text: "Main research subject: Sea ________ conservation",
                        correctAnswer: "turtles",
                        type: "fill",
                        explanation: "The student says they chose to focus on sea turtles because of their endangered status."
                    },
                    {
                        id: 7,
                        text: "Number of species observed during field research: ________",
                        correctAnswer: "4",
                        type: "fill",
                        explanation: "Tutor asks: 'How many species did you observe?' and the student replies: 'Exactly four.'"
                    }
                ]
            },
            {
                sectionNumber: 4,
                title: "Section 4: Lecture on the History of Urban Architecture",
                audioUrl: "",
                script: "Lecturer: In today's lecture, we examine the evolution of modern metropolitan centers. In the late 19th century, structural steel revolutionized skyscraper construction, allowing builders to construct tall towers safely. Additionally, early urban planners implemented grid systems primarily to facilitate rapid traffic flow and pedestrian mobility.",
                instruction: "Choose the correct letter, A, B or C.",
                questions: [
                    {
                        id: 8,
                        text: "Which material revolutionized skyscraper construction in the late 19th century?",
                        options: [
                            "Timber frames",
                            "Structural steel",
                            "Reinforced concrete"
                        ],
                        correctAnswer: "1", // Structural steel (Index 1)
                        type: "choice",
                        explanation: "The lecturer explains that structural steel allowed buildings to exceed 10 stories safely."
                    },
                    {
                        id: 9,
                        text: "Urban grids were primarily designed to facilitate ________.",
                        options: [
                            "Traffic flow",
                            "Land speculation",
                            "Rainwater collection"
                        ],
                        correctAnswer: "0", // Traffic flow (Index 0)
                        type: "choice",
                        explanation: "The lecturer mentions: 'Grid systems were primarily optimized for clean traffic flow and cart navigation.'"
                    }
                ]
            }
        ]
    },
    {
        id: "cambridge-19-test-2",
        title: "IELTS Listening Academic Practice Test 2 (University & Ocean Ecology)",
        sections: [
            {
                sectionNumber: 1,
                title: "Section 1: Student Accommodation Booking Enquiry",
                audioUrl: "",
                script: "Officer: Good morning, Student Accommodation Office. How may I assist you today?\nStudent: Hello, I am arriving next month for the postgraduate engineering course, and I need to finalize my campus housing application.\nOfficer: Welcome! Could I please take down your family name and student ID?\nStudent: Yes, my surname is Henderson, that is H-E-N-D-E-R-S-O-N, and my student ID is EN-7492.\nOfficer: Thank you, Ms. Henderson. And what type of accommodation do you prefer? We have standard shared rooms and en-suite studios.\nStudent: I would definitely prefer a single en-suite studio with a private study desk.\nOfficer: Understood. The move-in date for international postgraduates will be Saturday, 25th September. Is that suitable?\nStudent: Yes, the 25th of September matches my flight arrival perfectly. Thank you!",
                instruction: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                questions: [
                    {
                        id: 1,
                        text: "Student surname: ________",
                        correctAnswer: "Henderson",
                        type: "fill",
                        explanation: "The student spells her surname: H-E-N-D-E-R-S-O-N."
                    },
                    {
                        id: 2,
                        text: "Student ID number: EN-________",
                        correctAnswer: "7492",
                        type: "fill",
                        explanation: "The student provides her ID: EN-7492."
                    },
                    {
                        id: 3,
                        text: "Requested move-in date:",
                        options: [
                            "Friday, 24th September",
                            "Saturday, 25th September",
                            "Monday, 27th September"
                        ],
                        correctAnswer: "1",
                        type: "choice",
                        explanation: "The housing officer specifies Saturday, 25th September, which the student confirms matches her flight."
                    }
                ]
            },
            {
                sectionNumber: 2,
                title: "Section 2: University Library Orientation Tour",
                audioUrl: "",
                script: "Librarian: Welcome new students to the Central University Library. Our library holds over 1.2 million volumes and subscribes to 500 academic digital journals. On the ground floor, you will find the collaborative study lounge where group discussion is permitted. However, the third floor is designated as a strict silent study zone. Additionally, scanning and digital borrowing are completely free of charge for all registered students.",
                instruction: "Choose the correct letter, A, B or C.",
                questions: [
                    {
                        id: 4,
                        text: "Which floor of the library is reserved for silent individual study?",
                        options: [
                            "Ground floor",
                            "Second floor",
                            "Third floor"
                        ],
                        correctAnswer: "2",
                        type: "choice",
                        explanation: "The librarian clarifies that the third floor is designated as a strict silent study zone."
                    },
                    {
                        id: 5,
                        text: "Digital borrowing and document scanning for registered students is _______.",
                        options: [
                            "charged at $2 per document",
                            "completely free of charge",
                            "limited to weekend hours"
                        ],
                        correctAnswer: "1",
                        type: "choice",
                        explanation: "The speaker highlights: 'scanning and digital borrowing are completely free of charge for all registered students.'"
                    }
                ]
            },
            {
                sectionNumber: 3,
                title: "Section 3: Academic Tutor Consultation on Renewable Grid Project",
                audioUrl: "",
                script: "Professor: Come in Mark and Elena. Let us review your draft proposal on urban renewable grids.\nElena: Thank you Professor Davis. We decided to compare solar rooftop deployment against small-scale municipal wind turbines in coastal cities.\nProfessor: A timely research angle. Have you collected enough empirical data on annual wind velocity fluctuations?\nMark: Yes, we analyzed meteorological datasets from 12 coastal cities spanning the last five years.\nProfessor: Excellent. Make sure you highlight battery storage degradation in Chapter 3.",
                instruction: "Complete the consultation summary below.",
                questions: [
                    {
                        id: 6,
                        text: "The student research compares solar rooftops with _______ turbines.",
                        correctAnswer: "wind",
                        type: "fill",
                        explanation: "Elena states they compare solar rooftops against municipal wind turbines."
                    },
                    {
                        id: 7,
                        text: "The data examined covered coastal cities over a period of _______ years.",
                        correctAnswer: "5",
                        type: "fill",
                        explanation: "Mark notes they analyzed datasets spanning the last five years."
                    }
                ]
            },
            {
                sectionNumber: 4,
                title: "Section 4: Scientific Lecture on Marine Bioluminescence",
                audioUrl: "",
                script: "Lecturer: In deep-sea ecosystems below 200 meters, sunlight is entirely absent. In this perpetual darkness, over 75% of oceanic organisms have evolved bioluminescence—the biochemical production of light through the enzyme luciferase catalyzing the oxidation of luciferin. Contrary to early theories suggesting bioluminescence was solely for illuminating food, modern marine biology identifies two primary survival functions: counter-illumination camouflage to avoid predators from below, and intraspecific communication for mating signals.",
                instruction: "Choose the correct letter, A, B or C.",
                questions: [
                    {
                        id: 8,
                        text: "Approximately what proportion of deep-sea creatures produce bioluminescence?",
                        options: [
                            "Over 25%",
                            "Over 50%",
                            "Over 75%"
                        ],
                        correctAnswer: "2",
                        type: "choice",
                        explanation: "The lecturer states: 'over 75% of oceanic organisms have evolved bioluminescence.'"
                    },
                    {
                        id: 9,
                        text: "The chemical reaction creating biological light requires the enzyme _______.",
                        correctAnswer: "luciferase",
                        type: "fill",
                        explanation: "The lecture explicitly names the enzyme: 'through the enzyme luciferase catalyzing the oxidation of luciferin.'"
                    }
                ]
            }
        ]
    }
];
