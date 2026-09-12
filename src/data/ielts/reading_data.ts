export interface ReadingQuestion {
    id: number;
    text: string;
    options?: string[];
    correctAnswer: string;
    type: 'choice' | 'fill';
    explanation: string;
}

export interface ReadingPassage {
    id: string;
    title: string;
    academicLevel: 'Academic 1' | 'Academic 2' | 'Academic 3';
    text: string;
    questions: ReadingQuestion[];
}

export const IELTS_READING_EXAMS: ReadingPassage[] = [
    {
        "id": "cambridge_reading_energy_ai",
        "title": "The Future of Renewable Energy & Artificial Intelligence",
        "academicLevel": "Academic 1",
        "text": "As global energy demands continue to surge, traditional power grids are facing unprecedented challenges. Renewable energy sources, such as solar photovoltaic systems and wind turbines, have emerged as vital components of modern sustainable development. However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles for continuous power supply.\n\nTo mitigate these fluctuations, energy engineers have turned to Artificial Intelligence (AI) and machine learning algorithms. Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance. Consequently, power plant operators can adjust battery storage reserves and balance grid load with extreme precision, reducing operational overhead by up to 35%.\n\nFurthermore, decentralized smart microgrids empowered by deep learning can autonomously redirect surplus energy from residential solar panels to commercial industrial zones during peak consumption hours. This symbiotic integration of green technology and predictive analytics marks a revolutionary milestone in humanity's transition toward global carbon neutrality.",
        "questions": [
            {
                "id": 1,
                "text": "What is highlighted as a primary challenge for solar and wind energy?",
                "options": [
                    "Exorbitant installation expenses",
                    "Intermittent nature and dependence on weather patterns",
                    "A shortage of trained electrical engineers",
                    "High greenhouse gas emissions"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "The passage notes: 'However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles.'"
            },
            {
                "id": 2,
                "text": "How far in advance can predictive AI models forecast solar irradiance?",
                "options": [
                    "Up to 12 hours",
                    "Up to 24 hours",
                    "Up to 48 hours",
                    "Up to one week"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "The text states: 'Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance.'"
            },
            {
                "id": 3,
                "text": "By what proportion can predictive analytics reduce power plant operational overhead?",
                "options": [
                    "Up to 15%",
                    "Up to 25%",
                    "Up to 35%",
                    "Up to 50%"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "The text confirms: 'reducing operational overhead by up to 35%.'"
            },
            {
                "id": 4,
                "text": "Decentralized microgrids can autonomously redirect surplus energy during _______ hours.",
                "correctAnswer": "peak consumption",
                "type": "fill",
                "explanation": "Paragraph 3 explicitly mentions: 'redirect surplus energy... during peak consumption hours.'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: Traditional power grids were originally designed to easily store excess solar power.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "The text states traditional power grids face unprecedented challenges with renewable intermittency, implying they were not designed for easy storage."
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Deep learning algorithms require manual approval from human engineers before redirecting surplus power.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 3 states they can 'autonomously redirect surplus energy', which contradicts manual approval."
            },
            {
                "id": 7,
                "text": "Predictive AI models utilize _______ meteorological data for solar and wind forecasting.",
                "correctAnswer": "satellite",
                "type": "fill",
                "explanation": "Paragraph 2 states: 'analyze satellite meteorological data'."
            },
            {
                "id": 8,
                "text": "What overarching global environmental goal is mentioned at the end of the text?",
                "options": [
                    "Ocean desalination",
                    "Carbon neutrality",
                    "Elimination of nuclear energy",
                    "Total ban on industrial manufacturing"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 3 explicitly concludes with: 'humanity\\'s transition toward global carbon neutrality.'"
            }
        ]
    },
    {
        "id": "cambridge_reading_urban_architecture",
        "title": "Biophilic Urbanism: Designing Nature-Centric Cities",
        "academicLevel": "Academic 2",
        "text": "In the twenty-first century, rapid urban migration has concentrated over half of the global population in concrete metropolises. While urban density enhances economic productivity and logistical efficiency, it has simultaneously contributed to sensory deprivation, elevated cortisol levels, and escalating mental fatigue among inhabitants. In response to this psychological and ecological crisis, contemporary architects and urban planners have spearheaded a paradigm shift known as biophilic urbanism.\n\nBiophilic design posits that human beings possess an innate biological affinity for the natural world—an evolutionary legacy termed the 'biophilia hypothesis' by biologist Edward O. Wilson in 1984. Rather than treating nature as an ornamental afterthought, biophilic architecture systematically integrates living vegetation, natural light, acoustic water features, and organic fractal geometries into the core fabric of buildings and public spaces.\n\nEmpirical investigations across hospital recovery wards, university campuses, and corporate headquarters have demonstrated dramatic benefits. Patients situated in rooms overlooking natural foliage experience 20% shorter post-operative recovery periods. Similarly, office employees in biophilically enhanced environments display a 15% increase in cognitive stamina and a measurable decline in absenteeism. As urban centers confront escalating temperatures from the urban heat island effect, vegetated facades and vertical forests also serve as vital thermal buffers, decreasing building cooling demands by up to 30%.",
        "questions": [
            {
                "id": 1,
                "text": "What evolutionary concept did Edward O. Wilson introduce in 1984?",
                "options": [
                    "The biophilia hypothesis",
                    "Urban sensory deprivation",
                    "The thermal buffer theory",
                    "Fractal architecture"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 2 states: 'an evolutionary legacy termed the biophilia hypothesis by biologist Edward O. Wilson in 1984.'"
            },
            {
                "id": 2,
                "text": "According to empirical studies, hospital patients with views of nature experienced _______ shorter recovery times.",
                "options": [
                    "10%",
                    "15%",
                    "20%",
                    "30%"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "Paragraph 3 states: 'Patients situated in rooms overlooking natural foliage experience 20% shorter post-operative recovery periods.'"
            },
            {
                "id": 3,
                "text": "Vertical forests and vegetated facades reduce building cooling requirements by up to _______.",
                "options": [
                    "15%",
                    "20%",
                    "25%",
                    "30%"
                ],
                "correctAnswer": "3",
                "type": "choice",
                "explanation": "Paragraph 3 states: 'decreasing building cooling demands by up to 30%.'"
            },
            {
                "id": 4,
                "text": "Office employees in biophilic environments demonstrated a 15% rise in cognitive _______.",
                "correctAnswer": "stamina",
                "type": "fill",
                "explanation": "Paragraph 3 mentions: 'display a 15% increase in cognitive stamina.'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: Over 50% of the world's population currently resides in urban centers.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 1 explicitly confirms: 'rapid urban migration has concentrated over half of the global population in concrete metropolises.'"
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Installing vegetated facades is cheaper than traditional glass cladding.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "The text does not mention the financial comparison between vegetated facades and glass cladding."
            },
            {
                "id": 7,
                "text": "Biophilic architecture incorporates acoustic _______ features alongside living vegetation.",
                "correctAnswer": "water",
                "type": "fill",
                "explanation": "Paragraph 2 states: 'acoustic water features, and organic fractal geometries'."
            },
            {
                "id": 8,
                "text": "The psychological stress experienced by urban residents is physically indicated by elevated _______ levels.",
                "correctAnswer": "cortisol",
                "type": "fill",
                "explanation": "Paragraph 1 mentions: 'elevated cortisol levels, and escalating mental fatigue.'"
            }
        ]
    },
    {
        "id": "cambridge_reading_microbiome",
        "title": "The Human Microbiome: The Unseen Ecosystem Within Us",
        "academicLevel": "Academic 3",
        "text": "For centuries, human anatomy viewed bacteria and microorganisms predominantly as infectious pathogens to be eradicated. However, genomic breakthroughs over the past two decades have dismantled this adversarial perspective. The human body is now recognized as a complex, bustling holobiont—a meta-organism hosting trillions of microbes collectively termed the human microbiome. Comprising bacteria, fungi, viruses, and archaea, these microscopic tenants inhabit our skin, oral cavity, and predominantly the gastrointestinal tract, outnumbering human somatic cells by approximately 1.3 to 1.\n\nThe metabolic footprint of the gut microbiome is staggering. These microbes possess an aggregate genetic repertoire exceeding human DNA by more than a hundredfold. They perform essential physiological functions that human biology cannot accomplish unaided: synthesizing critical micronutrients such as vitamins B12 and K, breaking down indigestible complex dietary polysaccharides into short-chain fatty acids (SCFAs), and neutralizing environmental carcinogens. SCFAs, particularly butyrate, serve as the primary energetic currency for epithelial cells lining the colon, reinforcing gut barrier integrity and preventing systemic endotoxemia.\n\nPerhaps most revolutionary is the revelation of the bidirectional gut-brain axis. Communicating via the vagus nerve, systemic hormonal signaling, and microbial neuroactive metabolites (including GABA, dopamine, and serotonin precursors), the microbiome exerts profound influence over mood, neurodevelopment, and stress resilience. Perturbations in microbial diversity—termed dysbiosis—have been strongly correlated with inflammatory bowel diseases, metabolic syndrome, and autoimmune disorders. As personalized medicine advances, targeted prebiotic dietary interventions and fecal microbiota transplants are rapidly transitioning from experimental science into standard clinical therapies.",
        "questions": [
            {
                "id": 1,
                "text": "Modern genomic science views the human body not merely as an isolated organism, but as a _______.",
                "options": [
                    "pathogenic reservoir",
                    "holobiont hosting trillions of microbes",
                    "sterile biological system",
                    "synthetic organism"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 1 states: 'The human body is now recognized as a complex, bustling holobiont—a meta-organism hosting trillions of microbes.'"
            },
            {
                "id": 2,
                "text": "Short-chain fatty acids (SCFAs) like butyrate are crucial because they _______.",
                "options": [
                    "act as harmful endotoxins",
                    "serve as primary fuel for colon epithelial cells",
                    "increase systemic inflammation",
                    "block neurotransmitter production"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 2 explains: 'SCFAs, particularly butyrate, serve as the primary energetic currency for epithelial cells lining the colon.'"
            },
            {
                "id": 3,
                "text": "True / False / Not Given: The vagus nerve is one of the communication channels of the gut-brain axis.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 3 explicitly confirms: 'Communicating via the vagus nerve, systemic hormonal signaling, and microbial neuroactive metabolites...'"
            },
            {
                "id": 4,
                "text": "A disruption or loss of microbial balance in the human gut is scientifically termed _______.",
                "correctAnswer": "dysbiosis",
                "type": "fill",
                "explanation": "Paragraph 3 states: 'Perturbations in microbial diversity—termed dysbiosis—have been strongly correlated with...'"
            },
            {
                "id": 5,
                "text": "Microbial cells in the human body outnumber human somatic cells by roughly _______.",
                "options": [
                    "1.1 to 1",
                    "1.3 to 1",
                    "3.0 to 1",
                    "10 to 1"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 1 states: 'outnumbering human somatic cells by approximately 1.3 to 1.'"
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Human gut bacteria are capable of synthesizing vitamin B12.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 2 explicitly confirms: 'synthesizing critical micronutrients such as vitamins B12 and K'."
            },
            {
                "id": 7,
                "text": "The aggregate genetic repertoire of gut microbes exceeds human DNA by more than a _______.",
                "correctAnswer": "hundredfold",
                "type": "fill",
                "explanation": "Paragraph 2 states: 'exceeding human DNA by more than a hundredfold.'"
            },
            {
                "id": 8,
                "text": "True / False / Not Given: All autoimmune disorders can be fully cured by fecal microbiota transplants.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 3 states transplants are transitioning into therapies, but nowhere does it claim they 'fully cure all autoimmune disorders'."
            }
        ]
    },
    {
        "id": "cambridge_reading_vertical_farming",
        "title": "Autonomous Vertical Farming: The Future of Global Agriculture",
        "academicLevel": "Academic 2",
        "text": "With the global human population projected to reach nearly 10 billion by mid-century, conventional open-field agriculture is nearing ecological breaking points. Traditional agrarian practices consume 70% of freshwater withdrawals, occupy nearly 40% of arable land, and generate one-third of anthropogenic greenhouse gas emissions. Compounded by soil salinization and climate-induced droughts, the necessity for a radical agricultural paradigm has catalyzed the rise of Controlled Environment Agriculture (CEA), most notably indoor vertical farming.\n\nVertical farms cultivate crops in vertically stacked layers inside retrofitted urban warehouses or purpose-built modular skyscrapers. Utilizing closed-loop aeroponic or hydroponic delivery systems, roots are continuously misted with nutrient-dense aqueous solutions. This method slashes water consumption by up to 95% compared to open-field farming. Because the environment is entirely isolated from external weather and pests, cultivation requires zero synthetic pesticides or herbicides. Moreover, dynamic LED spectrum tailoring provides photosynthetic photon flux optimized for each botanical growth phase, accelerating harvests from months to days.\n\nWhile vertical farming presents compelling ecological virtues, critics frequently highlight its immense energy demands. Powering thousands of high-intensity LED fixtures and HVAC climate regulation systems incurs steep electricity expenditures. However, the co-location of vertical farms with municipal renewable microgrids, coupled with next-generation quantum-dot LEDs, is dramatically compressing the levelized cost of indoor production. As transportation food miles are eradicated by growing fresh produce directly within dense urban cores, vertical farming is poised to become a bedrock of resilient 21st-century food security.",
        "questions": [
            {
                "id": 1,
                "text": "Closed-loop aeroponic systems in vertical farms reduce water consumption by up to _______ compared to open fields.",
                "options": [
                    "50%",
                    "75%",
                    "85%",
                    "95%"
                ],
                "correctAnswer": "3",
                "type": "choice",
                "explanation": "Paragraph 2 states: 'This method slashes water consumption by up to 95% compared to open-field farming.'"
            },
            {
                "id": 2,
                "text": "Which of the following is cited as a major critique or obstacle for indoor vertical farming?",
                "options": [
                    "Excessive pesticide dependence",
                    "High electricity and energy demands for lighting and HVAC",
                    "Poor crop taste and lack of nutrients",
                    "Longer growth cycles compared to traditional farming"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 3 notes: 'critics frequently highlight its immense energy demands. Powering thousands of high-intensity LED fixtures and HVAC climate regulation systems...'"
            },
            {
                "id": 3,
                "text": "Vertical farming eradicates 'food miles' because produce is grown directly within _______ cores.",
                "correctAnswer": "urban",
                "type": "fill",
                "explanation": "Paragraph 3 concludes: 'transportation food miles are eradicated by growing fresh produce directly within dense urban cores.'"
            },
            {
                "id": 4,
                "text": "Traditional agriculture currently accounts for what fraction of global freshwater withdrawals?",
                "options": [
                    "30%",
                    "50%",
                    "70%",
                    "90%"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "Paragraph 1 states: 'Traditional agrarian practices consume 70% of freshwater withdrawals.'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: Vertical farming completely eliminates the need for synthetic chemical pesticides.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 2 states: 'Because the environment is entirely isolated... cultivation requires zero synthetic pesticides or herbicides.'"
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Most vertical farms currently produce staple grains like wheat and maize profitably.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "The text discusses fresh produce and botanical growth in general, but does not state whether wheat or maize are produced profitably."
            },
            {
                "id": 7,
                "text": "Controlled Environment Agriculture (CEA) frequently uses next-generation _______ LEDs to lower electricity costs.",
                "correctAnswer": "quantum-dot",
                "type": "fill",
                "explanation": "Paragraph 3 mentions: 'coupled with next-generation quantum-dot LEDs'."
            },
            {
                "id": 8,
                "text": "Traditional farming occupies nearly _______ percent of global arable land.",
                "correctAnswer": "40",
                "type": "fill",
                "explanation": "Paragraph 1 specifies: 'occupy nearly 40% of arable land'."
            }
        ]
    },
    {
        "id": "cambridge_reading_ancient_scripts",
        "title": "Deciphering Lost Scripts: The Enigma of the Indus Valley and Linear A",
        "academicLevel": "Academic 3",
        "text": "Throughout archaeological history, few intellectual endeavors evoke greater fascination than the decipherment of lost ancient scripts. The triumph of Jean-François Champollion in unravelling Egyptian hieroglyphs via the trilingual Rosetta Stone in 1822 provided a triumphant blueprint. Yet, across Eurasia, several sophisticated writing systems continue to resist linguistic consensus, most prominently the Indus script of South Asia and the Minoan Linear A of ancient Crete.\n\nThe Indus Valley Civilization, flourishing along the floodplains of modern Pakistan and northwest India between 2600 and 1900 BCE, left behind thousands of miniature soapstone seals, copper tablets, and ceramic shards inscribed with enigmatic glyphs. Despite over a century of excavation at Harappa and Mohenjo-daro, the script remains unread. The obstacle is threefold: the average inscription length is remarkably terse—rarely exceeding five signs; no bilingual 'Rosetta' artifact has ever been unearthed; and scholars remain divided over the underlying language family, debating between an ancestral Dravidian tongue, an early Indo-Aryan dialect, or an unclassified language isolate.\n\nSimilarly perplexing is Linear A, the administrative writing system developed by the Minoan maritime civilization on Crete between 1800 and 1450 BCE. When British archaeologist Arthur Evans excavated the Palace of Knossos in 1900, he unearthed clay tablets bearing two distinct linear scripts. In 1952, Michael Ventris successfully deciphered Linear B, proving it recorded an archaic dialect of Mycenaean Greek. However, applying the phonetic values of Linear B to Linear A yields a non-Greek, non-Indo-European vocabulary that remains stubbornly undeciphered. Epigraphers now employ artificial intelligence and statistical Markov chain algorithms to analyze character frequency matrices, hoping computational cryptography can penetrate where classical philology has faltered.",
        "questions": [
            {
                "id": 1,
                "text": "What crucial artifact allowed Jean-François Champollion to decipher Egyptian hieroglyphs in 1822?",
                "options": [
                    "The Knossos tablets",
                    "The Rosetta Stone",
                    "The Harappan soapstone seals",
                    "The Mohenjo-daro tablets"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 1 mentions: 'unravelling Egyptian hieroglyphs via the trilingual Rosetta Stone in 1822.'"
            },
            {
                "id": 2,
                "text": "Which of the following is cited as a major obstacle in deciphering the Indus script?",
                "options": [
                    "The complete lack of any inscribed artifacts",
                    "The inscriptions are unusually brief, rarely exceeding five symbols",
                    "The writing was painted on perishable wood that rotted away",
                    "Modern archaeologists are banned from excavating Harappa"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 2 explains: 'the average inscription length is remarkably terse—rarely exceeding five signs.'"
            },
            {
                "id": 3,
                "text": "Michael Ventris proved that Linear B represented an archaic dialect of _______.",
                "options": [
                    "Dravidian",
                    "Mycenaean Greek",
                    "Ancient Egyptian",
                    "Latin"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 3 states: 'Michael Ventris successfully deciphered Linear B, proving it recorded an archaic dialect of Mycenaean Greek.'"
            },
            {
                "id": 4,
                "text": "True / False / Not Given: Applying Linear B phonetic values to Linear A immediately translated the Minoan texts into Greek.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 3 states applying phonetic values yields 'a non-Greek, non-Indo-European vocabulary that remains stubbornly undeciphered.'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: Computational algorithms have already fully decoded the meaning of all Indus seals.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "The text explains epigraphers are only 'hoping computational cryptography can penetrate where classical philology has faltered'—it has not yet succeeded."
            },
            {
                "id": 6,
                "text": "The British archaeologist who excavated the Palace of Knossos in 1900 was Arthur _______.",
                "correctAnswer": "Evans",
                "type": "fill",
                "explanation": "Paragraph 3 explicitly mentions: 'British archaeologist Arthur Evans excavated the Palace of Knossos in 1900'."
            },
            {
                "id": 7,
                "text": "The Indus Valley Civilization flourished primarily between 2600 and _______ BCE.",
                "correctAnswer": "1900",
                "type": "fill",
                "explanation": "Paragraph 2 states: 'between 2600 and 1900 BCE'."
            },
            {
                "id": 8,
                "text": "Modern epigraphers are using AI and statistical _______ chain algorithms to analyze character frequencies.",
                "correctAnswer": "Markov",
                "type": "fill",
                "explanation": "Paragraph 3 mentions: 'employ artificial intelligence and statistical Markov chain algorithms'."
            }
        ]
    },
    {
        "id": "cambridge_reading_circadian_rhythms",
        "title": "Circadian Rhythms: The Master Biological Clock of Human Cognition",
        "academicLevel": "Academic 2",
        "text": "Nearly all living organisms, from single-celled cyanobacteria to complex mammals, coordinate their biological processes according to an endogenous 24-hour cycle known as the circadian rhythm. Derived from the Latin 'circa diem' (approximately a day), these internal pacemakers synchronize sleep-wake architecture, hormonal cascades, core body temperature, and metabolic expenditure with Earth's planetary rotation. The master mammalian pacemaker resides within the suprachiasmatic nucleus (SCN), a minuscule bilateral cluster of roughly 20,000 neurons situated inside the anterior hypothalamus.\n\nThe SCN receives direct photic input via specialized intrinsically photosensitive retinal ganglion cells (ipRGCs) that detect ambient blue-spectrum light (wavelengths around 480 nm). Upon sensing morning illumination, the SCN suppresses the pineal gland's secretion of melatonin while triggering cortisol synthesis, elevating alertness and cardiovascular tonus. Conversely, as darkness falls, melatonin concentrations escalate, initiating cellular repair pathways and precipitating deep non-REM sleep.\n\nIn recent decades, the ubiquity of light-emitting digital screens and irregular shift work has caused widespread circadian desynchrony, colloquially termed 'social jetlag'. Neurobiological research demonstrates that desynchronized clocks impair prefrontal cortex executive functioning, curtailing working memory capacity and emotional regulation by up to 28%. Furthermore, chronic nocturnal light exposure blunts the nocturnal blood pressure dip and disrupts insulin sensitivity, predisposing individuals to cardiovascular disorders and type 2 diabetes. Chronobiologists argue that architecture and workplace policy must evolve to embrace 'circadian lighting'—dynamic illumination systems that mimic natural solar shifts to safeguard biological homeostasis.",
        "questions": [
            {
                "id": 1,
                "text": "Where is the master circadian pacemaker (SCN) located in the human body?",
                "options": [
                    "Within the anterior hypothalamus",
                    "Inside the pineal gland",
                    "In the optic nerve retina",
                    "Within the prefrontal cortex"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 1 states: 'situated inside the anterior hypothalamus.'"
            },
            {
                "id": 2,
                "text": "Morning ambient blue light causes the pineal gland to _______ melatonin secretion.",
                "options": [
                    "trigger",
                    "accelerate",
                    "suppress",
                    "double"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "Paragraph 2 states: 'Upon sensing morning illumination, the SCN suppresses the pineal gland\\'s secretion of melatonin.'"
            },
            {
                "id": 3,
                "text": "Circadian desynchrony caused by screen use and shift work is colloquially known as 'social _______'.",
                "correctAnswer": "jetlag",
                "type": "fill",
                "explanation": "Paragraph 3 mentions: 'colloquially termed social jetlag.'"
            },
            {
                "id": 4,
                "text": "According to research, circadian desynchrony can impair working memory and executive functions by up to _______.",
                "options": [
                    "10%",
                    "18%",
                    "28%",
                    "45%"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "Paragraph 3 notes: 'curtailing working memory capacity and emotional regulation by up to 28%.'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: The suprachiasmatic nucleus (SCN) contains approximately 20,000 neurons.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 1 states: 'a minuscule bilateral cluster of roughly 20,000 neurons'."
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Melatonin production increases during bright daylight hours.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "The text states daylight suppresses melatonin, while darkness causes melatonin concentrations to escalate."
            },
            {
                "id": 7,
                "text": "Retinal ganglion cells (ipRGCs) are particularly sensitive to ambient light in the _______ spectrum.",
                "correctAnswer": "blue",
                "type": "fill",
                "explanation": "Paragraph 2 states: 'detect ambient blue-spectrum light (wavelengths around 480 nm)'."
            },
            {
                "id": 8,
                "text": "Dynamic lighting systems designed to mimic natural solar transitions are termed _______ lighting.",
                "correctAnswer": "circadian",
                "type": "fill",
                "explanation": "Paragraph 3 mentions: 'embrace circadian lighting—dynamic illumination systems that mimic natural solar shifts'."
            }
        ]
    },
    {
        "id": "cambridge_reading_bioluminescence",
        "title": "Deep-Sea Bioluminescence and Ocean Chemosynthesis",
        "academicLevel": "Academic 1",
        "text": "Covering over 70% of the Earth's surface, the oceans represent our planet's largest habitat. Yet below a depth of 200 meters—the twilight mesopelagic zone—solar photons cease to penetrate, plunging the aphotic abyss into perpetual midnight. To navigate, hunt, and communicate in this lightless realm, marine organisms have evolved bioluminescence: the biochemical generation of cold visible light through enzymatic reactions.\n\nThe fundamental reaction involves a light-emitting substrate pigment called luciferin and an enzyme catalyst termed luciferase. In the presence of molecular oxygen, luciferase catalyzes the oxidation of luciferin, converting chemical energy into photons with astonishing thermodynamic efficiency—nearly 98% of the input energy is radiated as visible luminescence, with negligible thermal loss. In pelagic waters, the vast majority of bioluminescent output manifests in the blue-green spectral window (470–490 nm), precisely the wavelengths that transmit farthest through clear seawater.\n\nBioluminescence fulfills multifaceted survival imperatives. For apex abyssal predators like the anglerfish, a photogenic lure (the esca) suspended above gaping jaws attracts disoriented prey. Conversely, prey organisms employ counter-illumination: ventral photophores emit faint downward glow matching the intensity of downwelling ambient downlight, rendering the creature effectively invisible to upward-looking predators beneath. Simultaneously, around benthic hydrothermal vents spewing superheated mineral solutions, chemotrophic sulfur-oxidizing bacteria form the base of an alien food web completely disconnected from terrestrial sunlight.",
        "questions": [
            {
                "id": 1,
                "text": "At what ocean depth do solar photons virtually cease to penetrate?",
                "options": [
                    "50 meters",
                    "100 meters",
                    "200 meters",
                    "1000 meters"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "Paragraph 1 states: 'Yet below a depth of 200 meters—the twilight mesopelagic zone—solar photons cease to penetrate.'"
            },
            {
                "id": 2,
                "text": "What is the primary enzyme that catalyzes the oxidation of luciferin?",
                "options": [
                    "Luciferase",
                    "Amylase",
                    "Photophore",
                    "Hydrolyte"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 2 states: 'and an enzyme catalyst termed luciferase.'"
            },
            {
                "id": 3,
                "text": "Bioluminescence converts chemical energy into light with an energy efficiency of nearly _______ percent.",
                "options": [
                    "50%",
                    "75%",
                    "85%",
                    "98%"
                ],
                "correctAnswer": "3",
                "type": "choice",
                "explanation": "Paragraph 2 notes: 'with astonishing thermodynamic efficiency—nearly 98% of the input energy is radiated as visible luminescence.'"
            },
            {
                "id": 4,
                "text": "Prey animals utilize ventral photophores for camouflage in a defensive technique known as _______.",
                "correctAnswer": "counter-illumination",
                "type": "fill",
                "explanation": "Paragraph 3 explains: 'prey organisms employ counter-illumination: ventral photophores emit faint downward glow...'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: Most marine bioluminescent organisms produce red light rather than blue-green light.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 2 confirms the vast majority manifests in the blue-green spectral window (470–490 nm)."
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Deep-sea anglerfish use a glowing lure known as the esca.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 3 explicitly states: 'For apex abyssal predators like the anglerfish, a photogenic lure (the esca) suspended above gaping jaws...'"
            },
            {
                "id": 7,
                "text": "Around hydrothermal vents, chemotrophic _______-oxidizing bacteria sustain the local food chain.",
                "correctAnswer": "sulfur",
                "type": "fill",
                "explanation": "Paragraph 3 states: 'chemotrophic sulfur-oxidizing bacteria form the base of an alien food web'."
            },
            {
                "id": 8,
                "text": "True / False / Not Given: Bioluminescent reactions generate dangerous amounts of heat in deep sea waters.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 2 notes it produces 'cold visible light' with 'negligible thermal loss'."
            }
        ]
    },
    {
        "id": "cambridge_reading_decision_fatigue",
        "title": "The Psychology of Decision Fatigue and Choice Overload",
        "academicLevel": "Academic 2",
        "text": "In contemporary post-industrial society, consumer autonomy is universally heralded as the hallmark of personal liberty. From thousands of grocery supermarket brands to infinite digital media streaming catalogs, individuals are inundated with perpetual choices. However, seminal behavioral economics and cognitive psychology research suggests that the proliferation of options imposes a hidden psychological toll—a phenomenon known as the 'paradox of choice' and its neurocognitive byproduct, decision fatigue.\n\nFirst popularized by social psychologist Roy Baumeister, decision fatigue refers to the deteriorating quality of decisions made by an individual after a prolonged period of decision-making. Unlike physical muscles, which show clear somatic markers of strain, the brain's executive control center in the prefrontal cortex depletes its glucose reserves and self-regulatory willpower without conscious discomfort. As mental resources dwindle, the brain intuitively resorts to cognitive shortcuts: either reckless impulsivity or chronic inertia and procrastination.\n\nA famous landmark 2011 legal study led by Shai Danziger examined over 1,100 judicial parole rulings in Israel. The researchers uncovered a striking pattern: prisoners appearing before judges early in the morning had a favorable parole rate of roughly 65%. However, as judges labored through hours of mentally taxing decisions without nutrition breaks, the favorable ruling rate steadily deteriorated to near zero. Following lunch recess, favorable rulings surged back to 65%. In our hyper-connected information economy, recognizing decision fatigue has propelled executives and educators to deliberately minimize trivial choices—such as uniform wardrobes and structured morning routines—to preserve mental bandwidth for critical strategic judgments.",
        "questions": [
            {
                "id": 1,
                "text": "What term describes the mental deterioration caused by making too many decisions?",
                "options": [
                    "Somatic inertia",
                    "Decision fatigue",
                    "Choice liberation",
                    "Prefrontal expansion"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 2 explains: 'decision fatigue refers to the deteriorating quality of decisions made by an individual after a prolonged period of decision-making.'"
            },
            {
                "id": 2,
                "text": "In the 2011 judicial study by Danziger, morning parole approval rates were approximately _______.",
                "options": [
                    "25%",
                    "40%",
                    "65%",
                    "85%"
                ],
                "correctAnswer": "2",
                "type": "choice",
                "explanation": "Paragraph 3 explicitly states: 'prisoners appearing before judges early in the morning had a favorable parole rate of roughly 65%.'"
            },
            {
                "id": 3,
                "text": "When executive cognitive resources deplete, the brain frequently defaults to _______ or inertia.",
                "options": [
                    "reckless impulsivity",
                    "intense creativity",
                    "enhanced empathy",
                    "photographic memory"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 2 notes: 'the brain intuitively resorts to cognitive shortcuts: either reckless impulsivity or chronic inertia and procrastination.'"
            },
            {
                "id": 4,
                "text": "After a food and rest break, the judges' favorable parole rates returned to roughly _______ percent.",
                "correctAnswer": "65",
                "type": "fill",
                "explanation": "Paragraph 3 notes: 'Following lunch recess, favorable rulings surged back to 65%.'"
            },
            {
                "id": 5,
                "text": "True / False / Not Given: The concept of decision fatigue was popularized by social psychologist Roy Baumeister.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "0",
                "type": "choice",
                "explanation": "Paragraph 2 states: 'First popularized by social psychologist Roy Baumeister, decision fatigue refers to...'"
            },
            {
                "id": 6,
                "text": "True / False / Not Given: Physical muscles and the prefrontal cortex show the exact same physical feeling of soreness during fatigue.",
                "options": [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                "correctAnswer": "1",
                "type": "choice",
                "explanation": "Paragraph 2 clarifies: 'Unlike physical muscles, which show clear somatic markers of strain, the brain\\'s executive control center... depletes its reserves without conscious discomfort.'"
            },
            {
                "id": 7,
                "text": "Many executives wear uniform wardrobes in order to preserve mental _______ for important matters.",
                "correctAnswer": "bandwidth",
                "type": "fill",
                "explanation": "Paragraph 3 concludes: 'to preserve mental bandwidth for critical strategic judgments.'"
            },
            {
                "id": 8,
                "text": "The landmark 2011 judicial study analyzed over _______ parole rulings in Israel.",
                "correctAnswer": "1,100",
                "type": "fill",
                "explanation": "Paragraph 3 specifies: 'examined over 1,100 judicial parole rulings in Israel.'"
            }
        ]
    }
];
