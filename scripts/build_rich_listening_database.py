# -*- coding: utf-8 -*-
"""Generate rich authentic Cambridge IELTS Listening dataset with 4 complete exams, 16 sections, and 96 questions."""

import json

LISTENING_EXAMS = [
    {
        "id": "cambridge-18-test-1",
        "title": "IELTS Listening Academic Practice Test 1",
        "sections": [
            {
                "sectionNumber": 1,
                "title": "Section 1: Customer Order & Delivery Inquiry",
                "audioUrl": "",
                "script": """Clerk: Good morning, Office Supplies Depot. How can I help you today?
Customer: Hello, I would like to place an urgent order for our architectural design studio.
Clerk: Certainly, sir. May I take your full name first?
Customer: Yes, it is Harry Jackson. That is spelled J-A-C-K-S-O-N.
Clerk: Thank you Mr. Jackson. And what is the best contact telephone number for delivery confirmation?
Customer: My direct mobile number is 07200 453911.
Clerk: Excellent. And which department are the supplies for?
Customer: Please mark them for the Landscape Architecture division on the fourth floor.
Clerk: Noted. What specific furniture pieces are required?
Customer: We need six adjustable ergonomic drafting chairs, and two large birch drawing tables.
Clerk: Perfect. Now regarding the delivery timeframe—when would you prefer delivery?
Customer: Well, Monday 14th June is too early because the flooring won't be dry, and Friday 18th is too late for our project deadline. So could we schedule it for Wednesday, 16th June?
Clerk: Wednesday the 16th in the morning between 9 and 12 is confirmed. Thank you!""",
                "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                "questions": [
                    {
                        "id": 1,
                        "text": "Customer full surname: Harry ________",
                        "correctAnswer": "Jackson",
                        "type": "fill",
                        "explanation": "The speaker spells out the surname: J-A-C-K-S-O-N."
                    },
                    {
                        "id": 2,
                        "text": "Direct mobile contact number: 07200 ________",
                        "correctAnswer": "453911",
                        "type": "fill",
                        "explanation": "The customer states: 'My direct mobile number is 07200 453911.'"
                    },
                    {
                        "id": 3,
                        "text": "Target department: _______ Architecture division",
                        "correctAnswer": "Landscape",
                        "type": "fill",
                        "explanation": "The customer specifies: 'the Landscape Architecture division on the fourth floor.'"
                    },
                    {
                        "id": 4,
                        "text": "Number of ergonomic drafting chairs ordered:",
                        "options": ["two", "four", "six", "eight"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The customer says: 'We need six adjustable ergonomic drafting chairs.'"
                    },
                    {
                        "id": 5,
                        "text": "Wood material requested for the drawing tables:",
                        "options": ["oak", "birch", "pine", "mahogany"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The customer explicitly asks for: 'two large birch drawing tables.'"
                    },
                    {
                        "id": 6,
                        "text": "Confirmed delivery date:",
                        "options": [
                            "Monday, 14th June",
                            "Wednesday, 16th June",
                            "Friday, 18th June",
                            "Saturday, 19th June"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "He states Monday is too early and Friday is too late, agreeing on Wednesday, 16th June."
                    }
                ]
            },
            {
                "sectionNumber": 2,
                "title": "Section 2: St. Jude Heritage Museum Visitor Orientation",
                "audioUrl": "",
                "script": """Guide: Welcome ladies and gentlemen to the St. Jude Community Heritage Museum. Before we embark on our guided gallery walk, allow me to share a few historical details about our institution.
The grand Victorian building you are standing in was commissioned in 1880 and finally opened its doors in 1885 following five years of meticulous masonry work.
Our trustees are deeply committed to public accessibility. While regular adult admission is seven pounds, entry remains completely free for school students under age sixteen.
Looking at your visitor map, the main foyer leads directly to our permanent maritime trade exhibition. On your left is the newly renovated textile room, which displays mechanical spinning looms from the Industrial Revolution.
Please note that flash photography is strictly prohibited inside the manuscript archives to prevent UV pigment degradation. If you need refreshments, the courtyard café operates until 4:30 PM, serving local organic pastries. Enjoy your visit!""",
                "instruction": "Choose the correct letter, A, B, C or complete the missing details.",
                "questions": [
                    {
                        "id": 7,
                        "text": "In which year did the museum building officially open to the public?",
                        "options": ["1880", "1885", "1890", "1905"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The guide explains it was commissioned in 1880 and opened in 1885."
                    },
                    {
                        "id": 8,
                        "text": "Free admission is granted to school children under the age of _______.",
                        "correctAnswer": "16",
                        "type": "fill",
                        "explanation": "The guide states: 'entry remains completely free for school students under age sixteen.'"
                    },
                    {
                        "id": 9,
                        "text": "What historical machinery is exhibited in the textile room?",
                        "options": [
                            "Steam locomotives",
                            "Mechanical spinning looms",
                            "Early printing presses",
                            "Clockwork engines"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The guide highlights: 'displays mechanical spinning looms from the Industrial Revolution.'"
                    },
                    {
                        "id": 10,
                        "text": "Why is flash photography prohibited in the manuscript archives?",
                        "options": [
                            "To protect copyright",
                            "To avoid disturbing other visitors",
                            "To prevent pigment degradation",
                            "Due to security sensor triggers"
                        ],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The guide explains: 'to prevent UV pigment degradation.'"
                    },
                    {
                        "id": 11,
                        "text": "Closing time of the courtyard café: _______ PM",
                        "correctAnswer": "4:30",
                        "type": "fill",
                        "explanation": "The guide states: 'the courtyard café operates until 4:30 PM'."
                    },
                    {
                        "id": 12,
                        "text": "The main foyer leads directly into the _______ trade exhibition.",
                        "correctAnswer": "maritime",
                        "type": "fill",
                        "explanation": "The guide mentions: 'leads directly to our permanent maritime trade exhibition'."
                    }
                ]
            },
            {
                "sectionNumber": 3,
                "title": "Section 3: Academic Tutor Consultation on Marine Biology Fieldwork",
                "audioUrl": "",
                "script": """Tutor: Good afternoon Sarah, David. Please take a seat. Let's evaluate your preliminary field proposal for the coastal reef survey.
Sarah: Thank you Professor Adams. We have finalized our focal organism: we want to track nesting patterns of green sea turtles along the southern coral atolls.
Tutor: A commendable choice. How many survey sites have you mapped out across the lagoon?
David: We initially designated six sites, but logistical constraints with tidal currents forced us to narrow it down to four distinct monitoring stations.
Tutor: That is far more manageable for a team of two. Now, what methodology will you employ to estimate population density?
Sarah: Rather than invasive tagging, we are utilizing high-resolution drone photogrammetry and algorithmic shell pattern recognition software.
Tutor: Splendid! That minimizes environmental disruption. What about the statistical margin of error?
David: By cross-referencing aerial images with nighttime infrared observations, our supervisor calculates our confidence interval will reach 95%.
Tutor: Outstanding. Ensure your formal safety risk assessment is submitted to the department secretariat by Thursday noon.""",
                "instruction": "Answer the questions below based on the conversation.",
                "questions": [
                    {
                        "id": 13,
                        "text": "What specific marine species is the focus of the students' research?",
                        "options": [
                            "Humpback whales",
                            "Green sea turtles",
                            "Tiger sharks",
                            "Bottlenose dolphins"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Sarah states: 'we want to track nesting patterns of green sea turtles.'"
                    },
                    {
                        "id": 14,
                        "text": "The number of monitoring stations was reduced from six to _______.",
                        "correctAnswer": "four",
                        "type": "fill",
                        "explanation": "David explains: 'forced us to narrow it down to four distinct monitoring stations.'"
                    },
                    {
                        "id": 15,
                        "text": "Which non-invasive technique are the students using instead of physical tagging?",
                        "options": [
                            "Acoustic hydrophone tracking",
                            "Drone photogrammetry with shell pattern recognition",
                            "Submarine sonar surveying",
                            "Satellite radio collars"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Sarah mentions: 'utilizing high-resolution drone photogrammetry and algorithmic shell pattern recognition.'"
                    },
                    {
                        "id": 16,
                        "text": "Target statistical confidence interval for the survey data: _______ %",
                        "correctAnswer": "95",
                        "type": "fill",
                        "explanation": "David states: 'our supervisor calculates our confidence interval will reach 95%.'"
                    },
                    {
                        "id": 17,
                        "text": "The risk assessment must be submitted to the secretariat no later than _______ noon.",
                        "correctAnswer": "Thursday",
                        "type": "fill",
                        "explanation": "The tutor instructs: 'submitted to the department secretariat by Thursday noon.'"
                    },
                    {
                        "id": 18,
                        "text": "The primary cause for reducing the survey sites was unexpected _______ currents.",
                        "correctAnswer": "tidal",
                        "type": "fill",
                        "explanation": "David explains: 'logistical constraints with tidal currents forced us to narrow it down'."
                    }
                ]
            },
            {
                "sectionNumber": 4,
                "title": "Section 4: Academic Lecture on Renewable Tidal Stream Energy",
                "audioUrl": "",
                "script": """Lecturer: Good morning class. In today's ocean engineering lecture, we turn our attention from offshore wind to an extraordinarily reliable yet underutilized resource: tidal stream energy.
Unlike meteorological wind or solar irradiance, tidal currents are dictated by the gravitational orbital mechanics of the Earth, Moon, and Sun. As a consequence, tidal flows are 100% predictable decades into the future, eliminating the grid intermittency penalties that plague solar farms.
Water is roughly 830 times denser than ambient air. Therefore, an ocean current moving at a modest velocity of just 2.5 meters per second exerts kinetic torque comparable to an air hurricane exceeding 150 kilometers per hour. Consequently, underwater tidal turbines can feature substantially smaller rotor diameters—typically around 16 meters—while generating megawatts of baseline electricity.
However, two formidable engineering hurdles persist: extreme biofouling from barnacles and seaweed, and accelerated galvanic corrosion caused by hypersaline seawater. Engineers are now coating turbine blades with biomimetic hydrophobic polymers inspired by shark skin, which reduces drag and prevents marine organism adherence. Pilot arrays deployed in northern Scotland have operated for three consecutive years with negligible degradation.""",
                "instruction": "Complete the lecture notes below using NO MORE THAN TWO WORDS OR A NUMBER.",
                "questions": [
                    {
                        "id": 19,
                        "text": "Tidal currents are described as 100% _______ due to planetary gravitational mechanics.",
                        "correctAnswer": "predictable",
                        "type": "fill",
                        "explanation": "The lecturer states: 'tidal flows are 100% predictable decades into the future.'"
                    },
                    {
                        "id": 20,
                        "text": "Seawater is approximately _______ times denser than ambient atmospheric air.",
                        "options": ["200", "500", "830", "1000"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The lecturer states: 'Water is roughly 830 times denser than ambient air.'"
                    },
                    {
                        "id": 21,
                        "text": "Typical rotor diameter of the tidal turbines described: _______ meters",
                        "correctAnswer": "16",
                        "type": "fill",
                        "explanation": "The lecture specifies: 'typically around 16 meters'."
                    },
                    {
                        "id": 22,
                        "text": "Which animal provided the biomimetic inspiration for turbine blade coatings?",
                        "options": ["Dolphin", "Shark", "Penguin", "Whale"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The lecturer notes: 'polymers inspired by shark skin, which reduces drag'."
                    },
                    {
                        "id": 23,
                        "text": "The two primary obstacles cited are marine biofouling and galvanic _______.",
                        "correctAnswer": "corrosion",
                        "type": "fill",
                        "explanation": "The lecture highlights: 'and accelerated galvanic corrosion caused by hypersaline seawater.'"
                    },
                    {
                        "id": 24,
                        "text": "Location of the successful pilot arrays mentioned: northern _______",
                        "correctAnswer": "Scotland",
                        "type": "fill",
                        "explanation": "The lecturer concludes: 'Pilot arrays deployed in northern Scotland have operated for three consecutive years.'"
                    }
                ]
            }
        ]
    },
    {
        "id": "cambridge-19-test-2",
        "title": "IELTS Listening Academic Practice Test 2",
        "sections": [
            {
                "sectionNumber": 1,
                "title": "Section 1: Academic Conference Hall Reservation",
                "audioUrl": "",
                "script": """Officer: University Events and Hospitality, this is Rachel speaking.
Client: Hello Rachel, I am calling from the International Cognitive Neuroscience Society. We wish to book a venue on campus for our annual symposium.
Officer: Wonderful. May I have your full name and organization email?
Client: Yes, my name is Dr. Julian Henderson, and my email is j.henderson@neuro-global.org.
Officer: Thank you Dr. Henderson. What is the expected delegate headcount?
Client: We anticipate between 220 and 250 registered attendees.
Officer: In that case, our Grand Oak Hall would be ideal; it comfortably seats up to 300 delegates with full multimedia projection.
Client: That sounds suitable. What dates are we looking at?
Officer: We currently have availability for the weekend of September 22nd to 24th.
Client: September 22nd to 24th matches our keynote speakers' itinerary perfectly. Now regarding catering, can you accommodate gluten-free and vegan dietary requirements?
Officer: Absolutely. Our culinary team provides customized dietary menus with prior notice. We require a 20% deposit to finalize the reservation.""",
                "instruction": "Complete the booking form. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                "questions": [
                    {
                        "id": 1,
                        "text": "Caller's full name: Dr. Julian _______",
                        "correctAnswer": "Henderson",
                        "type": "fill",
                        "explanation": "The speaker states: 'my name is Dr. Julian Henderson'."
                    },
                    {
                        "id": 2,
                        "text": "Recommended venue on campus:",
                        "options": ["Westbrook Suite", "Grand Oak Hall", "Victorian Pavilion", "Riverside Theater"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The officer states: 'our Grand Oak Hall would be ideal'."
                    },
                    {
                        "id": 3,
                        "text": "Maximum delegate seating capacity of the hall: _______ people",
                        "correctAnswer": "300",
                        "type": "fill",
                        "explanation": "The officer explains: 'it comfortably seats up to 300 delegates'."
                    },
                    {
                        "id": 4,
                        "text": "Confirmed conference start date: September _______",
                        "correctAnswer": "22nd",
                        "type": "fill",
                        "explanation": "The officer confirms: 'weekend of September 22nd to 24th'."
                    },
                    {
                        "id": 5,
                        "text": "Required deposit percentage to secure the venue:",
                        "options": ["10%", "15%", "20%", "25%"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The officer concludes: 'We require a 20% deposit to finalize the reservation.'"
                    },
                    {
                        "id": 6,
                        "text": "Special dietary requests accepted include vegan and _______ options.",
                        "correctAnswer": "gluten-free",
                        "type": "fill",
                        "explanation": "The client asks about: 'accommodate gluten-free and vegan dietary requirements'."
                    }
                ]
            },
            {
                "sectionNumber": 2,
                "title": "Section 2: Campus Bicycle Scheme & Commuter Safety Briefing",
                "audioUrl": "",
                "script": """Officer: Good morning new students! I am Sergeant Miller from Campus Security, and today I want to introduce our green commuter cycling scheme.
Cycling is by far the fastest and most eco-friendly way to navigate our 120-acre university campus.
All students are eligible for a free smart bike pass. You simply tap your student ID card at any of the fifteen automated docking stations.
However, safety is paramount. University statutes mandate that all cyclists must wear a strapped protective helmet while riding on campus roadways. Failing to do so incurs an automatic twenty-pound fine.
Furthermore, if you cycle after dusk, your bicycle must be fitted with a functioning white front headlight and red rear reflector.
In terms of route navigation, the blue painted lane is designated exclusively for bicycles, while the green path is a shared pedestrian concourse where the speed limit is restricted to ten miles per hour. Let's make campus travel safe for everyone!""",
                "instruction": "Choose the correct options or complete the missing safety requirements.",
                "questions": [
                    {
                        "id": 7,
                        "text": "How many automated bicycle docking stations are situated across campus?",
                        "options": ["10", "15", "20", "25"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Sergeant Miller mentions: 'any of the fifteen automated docking stations.'"
                    },
                    {
                        "id": 8,
                        "text": "Fine for cycling on campus without a strapped helmet: £ _______",
                        "correctAnswer": "20",
                        "type": "fill",
                        "explanation": "The officer warns: 'incurs an automatic twenty-pound fine.'"
                    },
                    {
                        "id": 9,
                        "text": "Nighttime cycling regulations require a _______ front light.",
                        "correctAnswer": "white",
                        "type": "fill",
                        "explanation": "The officer specifies: 'fitted with a functioning white front headlight'."
                    },
                    {
                        "id": 10,
                        "text": "What color indicates bicycle-only dedicated lanes on campus?",
                        "options": ["Red", "Yellow", "Blue", "Green"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The speaker confirms: 'the blue painted lane is designated exclusively for bicycles.'"
                    },
                    {
                        "id": 11,
                        "text": "Speed limit on the shared green pedestrian concourse: _______ mph",
                        "correctAnswer": "10",
                        "type": "fill",
                        "explanation": "The officer states: 'speed limit is restricted to ten miles per hour.'"
                    },
                    {
                        "id": 12,
                        "text": "Bicycle docks are unlocked using the student _______ card.",
                        "correctAnswer": "ID",
                        "type": "fill",
                        "explanation": "The officer explains: 'You simply tap your student ID card'."
                    }
                ]
            },
            {
                "sectionNumber": 3,
                "title": "Section 3: Student Seminar on Sustainable Urban Architecture",
                "audioUrl": "",
                "script": """Elena: Marcus, let's review the visual slides for tomorrow's architecture tutorial.
Marcus: Sure Elena. Our case study evaluates the Bosco Verticale—the residential twin towers in Milan, Italy.
Elena: Right. What impressed me most in Professor Rossi's critique was the vegetative biomass: the two towers host over eight hundred mature trees and fifteen thousand perennial plants.
Marcus: Exactly. That vegetation filters urban smog, absorbs carbon dioxide, and moderates microclimate humidity. But we also need to address the structural engineering challenges.
Elena: Yes, the cantilevered reinforced concrete balconies had to be specifically reinforced to support 28,000 kilograms of saturated soil weight during winter storms.
Marcus: And what about irrigation? The maintenance team uses recycled greywater from the building's domestic plumbing, which reduces municipal water reliance by nearly 60%.
Elena: Let's make sure our comparative slide highlights the difference in thermal insulation between traditional curtain-wall glass and vegetated facade systems.""",
                "instruction": "Answer the questions based on the students' seminar preparation.",
                "questions": [
                    {
                        "id": 13,
                        "text": "Which architectural landmark in Milan are the students analyzing?",
                        "options": [
                            "Torre Velasca",
                            "Bosco Verticale",
                            "Palazzo Lombardia",
                            "Pirelli Tower"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Marcus states: 'Our case study evaluates the Bosco Verticale—the residential twin towers in Milan.'"
                    },
                    {
                        "id": 14,
                        "text": "The twin towers host more than _______ mature trees across their facades.",
                        "options": ["300", "500", "800", "1200"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "Elena points out: 'the two towers host over eight hundred mature trees.'"
                    },
                    {
                        "id": 15,
                        "text": "What type of water is recycled to irrigate the vegetation?",
                        "correctAnswer": "greywater",
                        "type": "fill",
                        "explanation": "Marcus states: 'uses recycled greywater from the building\\'s domestic plumbing'."
                    },
                    {
                        "id": 16,
                        "text": "By what percentage does the greywater irrigation reduce municipal water consumption?",
                        "options": ["30%", "45%", "60%", "75%"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "Marcus explicitly says: 'reduces municipal water reliance by nearly 60%.'"
                    },
                    {
                        "id": 17,
                        "text": "Balconies were engineered from reinforced _______ to hold the heavy saturated soil.",
                        "correctAnswer": "concrete",
                        "type": "fill",
                        "explanation": "Elena explains: 'the cantilevered reinforced concrete balconies had to be specifically reinforced'."
                    },
                    {
                        "id": 18,
                        "text": "The final presentation slide compares thermal insulation with traditional _______ glass walls.",
                        "correctAnswer": "curtain-wall",
                        "type": "fill",
                        "explanation": "Elena mentions: 'traditional curtain-wall glass and vegetated facade systems'."
                    }
                ]
            },
            {
                "sectionNumber": 4,
                "title": "Section 4: Paleontology Lecture on Canine Domestication",
                "audioUrl": "",
                "script": """Professor: Welcome back everyone. Today we examine one of evolutionary biology's most consequential symbioses: the domestication of the gray wolf into the modern domestic dog, Canis lupus familiaris.
For over a century, orthodox archaeology posited that dogs were domesticated during the agricultural Neolithic transition roughly 10,000 years ago. However, modern mitochondrial genomics and fossil discoveries in Goyet Cave, Belgium, have pushed this timeline back dramatically—to at least 32,000 years ago, deep in the Upper Paleolithic era.
Why did hunter-gatherers and wolves coalesce? The prevailing hypothesis is the 'commensal scavenger model'. Ice Age wolves with slightly lower flight-initiation distances lingered near nomadic human campfires to feed on discarded mammoth bones and viscera.
Over successive generations, positive selection for docility triggered 'domestication syndrome'—a neuroendocrine cascade reducing adrenaline and cortisol production. This altered morphology, producing drooping ears, shorter snouts, and juvenile behaviors.
Crucially, when humans transitioned to agriculture, dogs underwent a genetic duplication of the AMY2B gene, enabling them to digest starch—a metabolic adaptation absent in wild wolves. This biochemical synergy sealed our intertwined evolutionary destiny.""",
                "instruction": "Complete the academic lecture notes below using NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                "questions": [
                    {
                        "id": 19,
                        "text": "Recent genomic evidence dates dog domestication back to at least _______ years ago.",
                        "options": ["10,000", "18,000", "25,000", "32,000"],
                        "correctAnswer": "3",
                        "type": "choice",
                        "explanation": "The professor says: 'pushed this timeline back dramatically—to at least 32,000 years ago.'"
                    },
                    {
                        "id": 20,
                        "text": "Name of the Belgian cave where ancient Paleolithic canine fossils were excavated: _______ Cave",
                        "correctAnswer": "Goyet",
                        "type": "fill",
                        "explanation": "The lecture specifies: 'fossil discoveries in Goyet Cave, Belgium'."
                    },
                    {
                        "id": 21,
                        "text": "What evolutionary hypothesis explains why wolves initially approached human camps?",
                        "options": [
                            "Commensal scavenger model",
                            "Pack hunting coalition theory",
                            "Artificial breeding paradigm",
                            "Territorial defense hypothesis"
                        ],
                        "correctAnswer": "0",
                        "type": "choice",
                        "explanation": "The professor explicitly mentions: 'the commensal scavenger model'."
                    },
                    {
                        "id": 22,
                        "text": "Domestication syndrome caused a reduction in adrenaline and _______ production.",
                        "correctAnswer": "cortisol",
                        "type": "fill",
                        "explanation": "The lecture states: 'reducing adrenaline and cortisol production'."
                    },
                    {
                        "id": 23,
                        "text": "Duplication of the AMY2B gene granted domestic dogs the ability to digest _______.",
                        "correctAnswer": "starch",
                        "type": "fill",
                        "explanation": "The professor explains: 'enabling them to digest starch—a metabolic adaptation absent in wild wolves'."
                    },
                    {
                        "id": 24,
                        "text": "Physical changes produced by domestication syndrome included drooping _______ and shorter snouts.",
                        "correctAnswer": "ears",
                        "type": "fill",
                        "explanation": "The professor mentions: 'producing drooping ears, shorter snouts, and juvenile behaviors'."
                    }
                ]
            }
        ]
    },
    {
        "id": "cambridge-19-test-3",
        "title": "IELTS Listening Academic Practice Test 3",
        "sections": [
            {
                "sectionNumber": 1,
                "title": "Section 1: Sports & Wellness Center Membership Registration",
                "audioUrl": "",
                "script": """Receptionist: Good afternoon, Olympic Village Sports and Wellness Center. How may I assist you?
Member: Hello, I recently moved into the neighborhood and would like to register for a gym and swimming membership.
Receptionist: Excellent! What is your full legal name and date of birth?
Member: My name is Liam Gallagher, and my date of birth is the 18th of August 1994.
Receptionist: Thank you Liam. And your residential address?
Member: 42 Windmill Avenue, Flat 3B, post code W4 2PQ.
Receptionist: Great. We offer three tiers: Bronze, Silver, and Gold. Gold includes unlimited Olympic pool access, sauna facilities, and free personal trainer consultations.
Member: Gold sounds ideal. What is the monthly fee?
Receptionist: For students and university staff it is fifty-five pounds per month, with no joining surcharge.
Member: Perfect. Do I need to bring a padlock for the changing room lockers?
Receptionist: No, our lockers use electronic RFID wristbands provided at the reception desk.""",
                "instruction": "Complete the membership registration form.",
                "questions": [
                    {
                        "id": 1,
                        "text": "Member's full surname: Liam _______",
                        "correctAnswer": "Gallagher",
                        "type": "fill",
                        "explanation": "The member introduces himself as: 'My name is Liam Gallagher'."
                    },
                    {
                        "id": 2,
                        "text": "Residential road name: 42 _______ Avenue",
                        "correctAnswer": "Windmill",
                        "type": "fill",
                        "explanation": "He provides his address: '42 Windmill Avenue, Flat 3B'."
                    },
                    {
                        "id": 3,
                        "text": "Selected membership tier:",
                        "options": ["Bronze", "Silver", "Gold", "Platinum"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The member decides: 'Gold sounds ideal.'"
                    },
                    {
                        "id": 4,
                        "text": "Monthly membership fee for university members: £ _______",
                        "correctAnswer": "55",
                        "type": "fill",
                        "explanation": "The receptionist confirms: 'fifty-five pounds per month'."
                    },
                    {
                        "id": 5,
                        "text": "Lockers are secured using electronic _______ wristbands.",
                        "correctAnswer": "RFID",
                        "type": "fill",
                        "explanation": "The receptionist states: 'our lockers use electronic RFID wristbands'."
                    },
                    {
                        "id": 6,
                        "text": "Date of birth: 18th of _______ 1994",
                        "correctAnswer": "August",
                        "type": "fill",
                        "explanation": "The member states: '18th of August 1994'."
                    }
                ]
            },
            {
                "sectionNumber": 2,
                "title": "Section 2: Royal Botanic Glasshouse Audio Tour Guide",
                "audioUrl": "",
                "script": """Guide: Welcome visitors to the Great Palm Glasshouse at the Royal Botanic Gardens. Constructed in 1848 by renowned architect Decimus Burton, this towering iron-and-glass palace was the first large-scale structural application of wrought iron in Britain.
As you step through the southern vestibule, notice the climate transition: temperature is maintained at a tropical 26 degrees Celsius, with relative humidity sustained above eighty percent.
Directly ahead in the central nave stands the majestic African oil palm, reaching thirty meters into the vaulted glass dome.
To your right is our rare orchid collection, which features fifteen critically endangered species rescued from deforestation hotspots in Southeast Asia.
Visitors are reminded that touching the carnivorous pitcher plants is strictly forbidden, as digestive enzymes can irritate human skin.
The glasshouse closes at 5:00 PM, and guided botanical feeding demonstrations take place daily at 2:30 PM.""",
                "instruction": "Answer the questions based on the glasshouse audio tour.",
                "questions": [
                    {
                        "id": 7,
                        "text": "In what year was the Great Palm Glasshouse constructed?",
                        "options": ["1830", "1848", "1865", "1902"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The guide states: 'Constructed in 1848 by renowned architect Decimus Burton.'"
                    },
                    {
                        "id": 8,
                        "text": "Target internal temperature inside the tropical glasshouse: _______ °C",
                        "correctAnswer": "26",
                        "type": "fill",
                        "explanation": "The guide specifies: 'temperature is maintained at a tropical 26 degrees Celsius'."
                    },
                    {
                        "id": 9,
                        "text": "How many critically endangered orchid species are preserved in the collection?",
                        "options": ["10", "15", "25", "40"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The guide notes: 'features fifteen critically endangered species'."
                    },
                    {
                        "id": 10,
                        "text": "Why must visitors refrain from touching the pitcher plants?",
                        "options": [
                            "The leaves are poisonous",
                            "Digestive enzymes irritate human skin",
                            "The plants are too fragile",
                            "They trigger severe pollen allergies"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The guide clarifies: 'as digestive enzymes can irritate human skin.'"
                    },
                    {
                        "id": 11,
                        "text": "Time of daily botanical feeding demonstrations: _______ PM",
                        "correctAnswer": "2:30",
                        "type": "fill",
                        "explanation": "The guide states: 'feeding demonstrations take place daily at 2:30 PM'."
                    },
                    {
                        "id": 12,
                        "text": "The central nave features an African _______ palm standing 30 meters tall.",
                        "correctAnswer": "oil",
                        "type": "fill",
                        "explanation": "The guide points out: 'stands the majestic African oil palm'."
                    }
                ]
            },
            {
                "sectionNumber": 3,
                "title": "Section 3: Research Evaluation on AI in Clinical Radiology",
                "audioUrl": "",
                "script": """Chloe: Sam, have you evaluated the comparative diagnostic data for our medical informatics dissertation?
Sam: Yes Chloe. I reviewed the multicenter study assessing deep learning convolutional networks against board-certified radiologists in detecting pulmonary nodules.
Chloe: The diagnostic sensitivity metrics were astonishing: the AI achieved 94.2% accuracy, whereas the human radiology panel averaged 88.5%.
Sam: True, but look at the false positive rate. The algorithm flagged benign calcified scar tissue in nearly 12% of scans, causing unnecessary patient anxiety.
Chloe: That is a critical limitation to highlight. Our conclusion should recommend an 'augmented intelligence' model where AI serves as a first-pass triage filter rather than an autonomous diagnostician.
Sam: Exactly. And we must also emphasize the legal liability problem: if an algorithmic system misdiagnoses an oncology patient, who bears legal accountability—the software developer or the supervising clinician?""",
                "instruction": "Answer the multiple choice and fill-in questions below.",
                "questions": [
                    {
                        "id": 13,
                        "text": "What medical condition was the AI algorithm trained to detect on chest scans?",
                        "options": [
                            "Pulmonary nodules",
                            "Coronary artery disease",
                            "Pneumonia consolidation",
                            "Rib fractures"
                        ],
                        "correctAnswer": "0",
                        "type": "choice",
                        "explanation": "Sam mentions: 'detecting pulmonary nodules.'"
                    },
                    {
                        "id": 14,
                        "text": "Diagnostic accuracy achieved by the AI algorithm: _______ %",
                        "correctAnswer": "94.2",
                        "type": "fill",
                        "explanation": "Chloe reports: 'the AI achieved 94.2% accuracy'."
                    },
                    {
                        "id": 15,
                        "text": "What major drawback of the algorithm did Sam identify?",
                        "options": [
                            "Slow processing time exceeding 24 hours",
                            "A high 12% false positive rate on benign scars",
                            "Frequent software crashes",
                            "Inability to read digital MRI files"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Sam explains: 'The algorithm flagged benign calcified scar tissue in nearly 12% of scans'."
                    },
                    {
                        "id": 16,
                        "text": "The students advocate an 'augmented _______' model rather than autonomous diagnosis.",
                        "correctAnswer": "intelligence",
                        "type": "fill",
                        "explanation": "Chloe suggests: 'an augmented intelligence model'."
                    },
                    {
                        "id": 17,
                        "text": "Average diagnostic accuracy of human radiologists in the study:",
                        "options": ["82.1%", "85.0%", "88.5%", "91.2%"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "Chloe states: 'whereas the human radiology panel averaged 88.5%.'"
                    },
                    {
                        "id": 18,
                        "text": "The students raise ethical concerns regarding legal _______ in cases of misdiagnosis.",
                        "correctAnswer": "liability",
                        "type": "fill",
                        "explanation": "Sam states: 'we must also emphasize the legal liability problem'."
                    }
                ]
            },
            {
                "sectionNumber": 4,
                "title": "Section 4: Earth Science Lecture on the Physics of Desert Dunes",
                "audioUrl": "",
                "script": """Lecturer: Good morning. Today we analyze aeolian geomorphology—specifically the physics governing the formation and migration of sand dunes across arid deserts.
Sand dunes are dynamic geological engines shaped by wind shear velocity, aerodynamic drag, and grain saltation. When wind speed surpasses the 'fluid threshold'—typically 4.5 meters per second for quartz sand—individual grains do not simply blow away; they saltate. That is, they bounce across the surface in parabolic trajectories, dislodging neighboring particles upon impact.
The most ubiquitous dune morphology is the crescent-shaped 'barchan' dune. Barchans form in environments with unidirectional winds and limited sand abundance. The horns or tips of the crescent point downwind, migrating forward up to twenty meters per year as sand avalanches down the steep slip face.
Perhaps most acoustically intriguing is the phenomenon of 'singing sands'. Under specific conditions of uniform grain spherical geometry, dry air, and shear avalanches, certain mega-dunes emit a low-frequency drone reaching up to 105 decibels, audible over a distance of ten kilometers.""",
                "instruction": "Complete the geomorphology notes below using NO MORE THAN TWO WORDS OR A NUMBER.",
                "questions": [
                    {
                        "id": 19,
                        "text": "The bouncing movement of sand grains across desert surfaces is termed _______.",
                        "correctAnswer": "saltation",
                        "type": "fill",
                        "explanation": "The lecturer explains: 'That is, they bounce across the surface in parabolic trajectories... they saltate.'"
                    },
                    {
                        "id": 20,
                        "text": "Minimum wind speed threshold required to initiate quartz sand movement: _______ m/s",
                        "correctAnswer": "4.5",
                        "type": "fill",
                        "explanation": "The lecture states: 'typically 4.5 meters per second for quartz sand'."
                    },
                    {
                        "id": 21,
                        "text": "What geometric shape characterizes barchan dunes?",
                        "options": ["Star-shaped", "Crescent-shaped", "Linear", "Dome-shaped"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The lecturer describes: 'the crescent-shaped barchan dune.'"
                    },
                    {
                        "id": 22,
                        "text": "The crescent horns of barchan dunes point in which direction?",
                        "options": ["Upwind", "Downwind", "Northward", "Toward the ocean"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The lecturer explicitly states: 'The horns or tips of the crescent point downwind'."
                    },
                    {
                        "id": 23,
                        "text": "The acoustic drone of 'singing sands' can register volumes up to _______ decibels.",
                        "options": ["65", "85", "105", "125"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The lecture specifies: 'emit a low-frequency drone reaching up to 105 decibels.'"
                    },
                    {
                        "id": 24,
                        "text": "The steep front face down which sand avalanches is known as the _______ face.",
                        "correctAnswer": "slip",
                        "type": "fill",
                        "explanation": "The lecturer notes: 'as sand avalanches down the steep slip face'."
                    }
                ]
            }
        ]
    },
    {
        "id": "cambridge-19-test-4",
        "title": "IELTS Listening Academic Practice Test 4",
        "sections": [
            {
                "sectionNumber": 1,
                "title": "Section 1: Community Language Tandem Exchange Registration",
                "audioUrl": "",
                "script": """Coordinator: Welcome to the City Council Language Exchange Network. I am Brenda. How can I help you?
Applicant: Hello Brenda, I would like to join the tandem speaking exchange program.
Coordinator: Marvelous! Could you provide your full legal name and native tongue?
Applicant: My name is Mateo Rossi, and Italian is my mother tongue.
Coordinator: Splendid Mateo. And which target language are you seeking to practice?
Applicant: I am currently preparing for academic university study, so I need to polish my English fluency.
Coordinator: Excellent. What is your current estimated English level?
Applicant: I recently completed an upper-intermediate course, roughly B2 level.
Coordinator: Perfect. We pair participants for one-hour weekly sessions—thirty minutes in Italian and thirty minutes in English. Where would you prefer to meet?
Applicant: The Central Library cafe on Victoria Square would be very convenient.
Coordinator: Central Library branch it is. Do you prefer weekday evenings or Saturday mornings?
Applicant: Tuesday evenings after 6 PM works best for me.""",
                "instruction": "Complete the tandem registration card.",
                "questions": [
                    {
                        "id": 1,
                        "text": "Applicant full surname: Mateo _______",
                        "correctAnswer": "Rossi",
                        "type": "fill",
                        "explanation": "The applicant introduces himself: 'My name is Mateo Rossi'."
                    },
                    {
                        "id": 2,
                        "text": "Applicant native mother tongue:",
                        "options": ["Spanish", "Italian", "Portuguese", "French"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "He states: 'Italian is my mother tongue.'"
                    },
                    {
                        "id": 3,
                        "text": "Current English language level: roughly _______ level",
                        "correctAnswer": "B2",
                        "type": "fill",
                        "explanation": "Mateo explains: 'roughly B2 level'."
                    },
                    {
                        "id": 4,
                        "text": "Agreed meeting location: Central Library café on _______ Square",
                        "correctAnswer": "Victoria",
                        "type": "fill",
                        "explanation": "He suggests: 'Central Library cafe on Victoria Square'."
                    },
                    {
                        "id": 5,
                        "text": "Preferred session day of the week:",
                        "options": ["Monday", "Tuesday", "Thursday", "Saturday"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Mateo confirms: 'Tuesday evenings after 6 PM works best for me.'"
                    },
                    {
                        "id": 6,
                        "text": "Duration spent speaking each respective language per session: _______ minutes",
                        "correctAnswer": "30",
                        "type": "fill",
                        "explanation": "The coordinator explains: 'thirty minutes in Italian and thirty minutes in English'."
                    }
                ]
            },
            {
                "sectionNumber": 2,
                "title": "Section 2: City Library Digital Media Hub Facilities Tour",
                "audioUrl": "",
                "script": """Manager: Good evening patrons! I am pleased to introduce the third-floor Digital Media Hub here at the Metropolitan Library.
Our newly renovated facility bridges traditional literature with 21st-century creative technology.
In room 301, we have installed eight industrial-grade 3D printers. Library cardholders can book three-hour printing slots for a nominal filament fee of three pence per gram.
Next door in studio 302, we offer an acoustic soundproof recording booth equipped with dynamic cardioid microphones—ideal for podcast creators and digital oral history projects.
For video editors, room 304 houses twelve high-performance workstations equipped with professional color-grading suites and 4K monitors.
Before utilizing any fabrication machinery, all patrons must attend a twenty-minute safety induction session, scheduled every Wednesday at 4:00 PM.
Finally, high-speed Wi-Fi network credentials are automatically printed on your borrowing receipt.""",
                "instruction": "Answer the questions about the digital media hub.",
                "questions": [
                    {
                        "id": 7,
                        "text": "How many 3D printers are accessible in room 301?",
                        "options": ["four", "six", "eight", "twelve"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The manager states: 'installed eight industrial-grade 3D printers.'"
                    },
                    {
                        "id": 8,
                        "text": "Filament fee for 3D printing: _______ pence per gram",
                        "correctAnswer": "3",
                        "type": "fill",
                        "explanation": "The manager specifies: 'fee of three pence per gram'."
                    },
                    {
                        "id": 9,
                        "text": "What specialized creative space is located in studio 302?",
                        "options": [
                            "Woodworking shop",
                            "Soundproof podcast recording booth",
                            "Darkroom for photography",
                            "Robotics testing arena"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The speaker confirms: 'an acoustic soundproof recording booth equipped with dynamic cardioid microphones'."
                    },
                    {
                        "id": 10,
                        "text": "Mandatory safety induction time: every Wednesday at _______ PM",
                        "correctAnswer": "4:00",
                        "type": "fill",
                        "explanation": "The manager announces: 'every Wednesday at 4:00 PM'."
                    },
                    {
                        "id": 11,
                        "text": "Maximum duration of a 3D printer reservation: _______ hours",
                        "correctAnswer": "3",
                        "type": "fill",
                        "explanation": "The manager mentions: 'book three-hour printing slots'."
                    },
                    {
                        "id": 12,
                        "text": "Video workstations in room 304 are equipped with _______ resolution monitors.",
                        "correctAnswer": "4K",
                        "type": "fill",
                        "explanation": "The manager mentions: 'color-grading suites and 4K monitors'."
                    }
                ]
            },
            {
                "sectionNumber": 3,
                "title": "Section 3: Psychology Students Debating Sleep Deprivation Trials",
                "audioUrl": "",
                "script": """Hannah: Toby, let's critically evaluate the methodology of the sleep deprivation trial before we draft our joint research critique.
Toby: Good idea Hannah. The study subjected twenty-four undergraduate volunteers to thirty-six hours of sustained wakefulness, measuring cognitive degradation every four hours.
Hannah: What stood out to me was the psychomotor vigilance test results: by hour twenty-eight, participants experienced sudden three-second neurological lapses known as 'microsleeps'.
Toby: Yes, and their visual reaction latency slowed down by over 40%, comparable to acute blood alcohol intoxication above the legal driving threshold.
Hannah: However, look at their demographic sample. All twenty-four subjects were male varsity rowing athletes aged 19 to 21. That introduces severe sampling bias!
Toby: Absolutely right. Athletic young men possess higher cardiovascular baseline reserves than the general population. We cannot generalize these findings to older shift workers or medical interns.""",
                "instruction": "Answer the multiple-choice and summary questions below.",
                "questions": [
                    {
                        "id": 13,
                        "text": "How many hours of sustained wakefulness were participants subjected to?",
                        "options": ["24 hours", "36 hours", "48 hours", "72 hours"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Toby states: 'subjected twenty-four undergraduate volunteers to thirty-six hours of sustained wakefulness.'"
                    },
                    {
                        "id": 14,
                        "text": "Brief three-second neurological lapses experienced by participants are called _______.",
                        "correctAnswer": "microsleeps",
                        "type": "fill",
                        "explanation": "Hannah mentions: 'three-second neurological lapses known as microsleeps.'"
                    },
                    {
                        "id": 15,
                        "text": "By hour 28, reaction latency slowed by more than _______ percent.",
                        "options": ["20%", "30%", "40%", "50%"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "Toby highlights: 'reaction latency slowed down by over 40%.'"
                    },
                    {
                        "id": 16,
                        "text": "What major methodological flaw do the students identify in the study?",
                        "options": [
                            "Faulty computer equipment",
                            "Severe sampling bias with all-male athlete participants",
                            "Too much caffeine administered to subjects",
                            "Incomplete statistical calculations"
                        ],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "Hannah notes: 'All twenty-four subjects were male varsity rowing athletes... That introduces severe sampling bias!'"
                    },
                    {
                        "id": 17,
                        "text": "Reaction times during sleep deprivation were comparable to intoxication above the legal _______ limit.",
                        "correctAnswer": "driving",
                        "type": "fill",
                        "explanation": "Toby compares it to: 'intoxication above the legal driving threshold'."
                    },
                    {
                        "id": 18,
                        "text": "Testing intervals occurred every _______ hours during the trial.",
                        "correctAnswer": "four",
                        "type": "fill",
                        "explanation": "Toby notes: 'measuring cognitive degradation every four hours'."
                    }
                ]
            },
            {
                "sectionNumber": 4,
                "title": "Section 4: Oceanography Lecture on Abyssal Hydrothermal Chemosynthesis",
                "audioUrl": "",
                "script": """Professor: In 1977, oceanographers piloting the research submersible Alvin along the Galapagos Rift made a discovery that revolutionized biology: hydrothermal vents.
Prior to this expedition, scientists presumed that all biological life on Earth was irrevocably dependent on solar photosynthesis. Yet here, at a depth of 2,500 meters under crushing hydrostatic pressure, they encountered thriving ecosystems of giant tube worms, blind shrimp, and ghost crabs clustered around 'black smoker' chimneys venting mineral-laden water exceeding 350 degrees Celsius.
The biological bedrock of these ecosystems is not chlorophyll, but chemolithoautotrophic bacteria. These extremophiles oxidize toxic hydrogen sulfide escaping from the Earth's oceanic crust, synthesizing organic sugars through chemosynthesis.
Most remarkable is the giant tube worm, Riftia pachyptila. These creatures possess neither mouth, digestive tract, nor gut. Instead, their visceral cavities are packed with a specialized vascularized organ termed the 'trophosome', housing billions of symbiotic sulfur-oxidizing bacteria that sustain the host.
This discovery fundamentally expanded our search for extraterrestrial life, suggesting that sub-surface oceans on icy Jovian moons like Europa could host geothermal biospheres.""",
                "instruction": "Complete the scientific lecture notes below using NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                "questions": [
                    {
                        "id": 19,
                        "text": "In what year were deep-sea hydrothermal vents first discovered by the Alvin submersible?",
                        "options": ["1965", "1977", "1982", "1991"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The professor begins: 'In 1977, oceanographers piloting the research submersible Alvin...'"
                    },
                    {
                        "id": 20,
                        "text": "Extremophile bacteria synthesize organic energy by oxidizing toxic _______ sulfide.",
                        "correctAnswer": "hydrogen",
                        "type": "fill",
                        "explanation": "The lecture explains: 'oxidize toxic hydrogen sulfide escaping from the Earth\\'s oceanic crust'."
                    },
                    {
                        "id": 21,
                        "text": "Temperature of mineral-rich water emitted by black smoker chimneys exceeds _______ °C.",
                        "options": ["100", "200", "350", "500"],
                        "correctAnswer": "2",
                        "type": "choice",
                        "explanation": "The professor states: 'venting mineral-laden water exceeding 350 degrees Celsius.'"
                    },
                    {
                        "id": 22,
                        "text": "The specialized internal organ housing symbiotic bacteria in tube worms is the _______.",
                        "correctAnswer": "trophosome",
                        "type": "fill",
                        "explanation": "The professor specifies: 'packed with a specialized vascularized organ termed the trophosome'."
                    },
                    {
                        "id": 23,
                        "text": "The discovery of hydrothermal chemosynthesis inspired the search for alien life on the Jovian moon _______.",
                        "correctAnswer": "Europa",
                        "type": "fill",
                        "explanation": "The lecture concludes: 'sub-surface oceans on icy Jovian moons like Europa could host geothermal biospheres.'"
                    },
                    {
                        "id": 24,
                        "text": "True / False / Not Given: Giant tube worms (Riftia pachyptila) possess a conventional mouth and digestive tract.",
                        "options": ["TRUE", "FALSE", "NOT GIVEN"],
                        "correctAnswer": "1",
                        "type": "choice",
                        "explanation": "The professor explicitly clarifies: 'These creatures possess neither mouth, digestive tract, nor gut.'"
                    }
                ]
            }
        ]
    }
]

# Validation
total_questions = 0
for exam in LISTENING_EXAMS:
    assert len(exam["sections"]) == 4, f"Exam {exam['id']} does not have 4 sections"
    for sec in exam["sections"]:
        assert len(sec["questions"]) >= 6, f"Section {sec['sectionNumber']} has fewer than 6 questions"
        for q in sec["questions"]:
            total_questions += 1
            if q["type"] == "choice":
                assert len(q["options"]) >= 3, f"Choice question lacks options: {q}"
                idx = int(q["correctAnswer"])
                assert 0 <= idx < len(q["options"]), f"Invalid choice answer index: {q}"
            elif q["type"] == "fill":
                assert len(q["correctAnswer"].strip()) > 0, f"Empty fill answer: {q}"

print(f"Listening dataset validation passed! {len(LISTENING_EXAMS)} exams, 16 sections, {total_questions} questions.")

# Generate TypeScript file
ts_content = '''export interface ListeningQuestion {
    id: number;
    text: string;
    options?: string[];
    correctAnswer: string;
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

export const IELTS_LISTENING_EXAMS: ListeningExam[] = '''

ts_content += json.dumps(LISTENING_EXAMS, ensure_ascii=False, indent=4) + ";\n"

with open("../src/data/ielts/listening_data.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written to src/data/ielts/listening_data.ts")
