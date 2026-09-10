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
        id: "cambridge_reading_energy_ai",
        title: "The Future of Renewable Energy & Artificial Intelligence",
        academicLevel: "Academic 1",
        text: `As global energy demands continue to surge, traditional power grids are facing unprecedented challenges. Renewable energy sources, such as solar photovoltaic systems and wind turbines, have emerged as vital components of modern sustainable development. However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles for continuous power supply.

To mitigate these fluctuations, energy engineers have turned to Artificial Intelligence (AI) and machine learning algorithms. Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance. Consequently, power plant operators can adjust battery storage reserves and balance grid load with extreme precision, reducing operational overhead by up to 35%.

Furthermore, decentralized smart microgrids empowered by deep learning can autonomously redirect surplus energy from residential solar panels to commercial industrial zones during peak consumption hours. This symbiotic integration of green technology and predictive analytics marks a revolutionary milestone in humanity's transition toward global carbon neutrality.`,
        questions: [
            {
                id: 1,
                text: "What is highlighted as a primary challenge for solar and wind energy?",
                options: [
                    "Exorbitant installation expenses",
                    "Intermittent nature and dependence on weather patterns",
                    "A shortage of trained electrical engineers",
                    "High greenhouse gas emissions"
                ],
                correctAnswer: "1",
                type: "choice",
                explanation: "The passage notes: 'However, their intermittent nature—dependent on weather patterns and diurnal cycles—poses significant hurdles.'"
            },
            {
                id: 2,
                text: "How far in advance can predictive AI models forecast solar irradiance?",
                options: [
                    "Up to 12 hours",
                    "Up to 24 hours",
                    "Up to 48 hours",
                    "Up to one week"
                ],
                correctAnswer: "2",
                type: "choice",
                explanation: "The text states: 'Predictive AI models analyze satellite meteorological data to forecast solar irradiance and wind speeds up to 48 hours in advance.'"
            },
            {
                id: 3,
                text: "By what proportion can predictive analytics reduce power plant operational overhead?",
                options: [
                    "Up to 15%",
                    "Up to 25%",
                    "Up to 35%",
                    "Up to 50%"
                ],
                correctAnswer: "2",
                type: "choice",
                explanation: "The text confirms: 'reducing operational overhead by up to 35%.'"
            },
            {
                id: 4,
                text: "Decentralized microgrids can autonomously redirect surplus energy during _______ hours.",
                correctAnswer: "peak consumption",
                type: "fill",
                explanation: "Paragraph 3 explicitly mentions: 'redirect surplus energy... during peak consumption hours.'"
            }
        ]
    },
    {
        id: "cambridge_reading_urban_architecture",
        title: "Biophilic Urbanism: Designing Nature-Centric Cities",
        academicLevel: "Academic 2",
        text: `In the twenty-first century, rapid urban migration has concentrated over half of the global population in concrete metropolises. While urban density enhances economic productivity and logistical efficiency, it has simultaneously contributed to sensory deprivation, elevated cortisol levels, and escalating mental fatigue among inhabitants. In response to this psychological and ecological crisis, contemporary architects and urban planners have spearheaded a paradigm shift known as biophilic urbanism.

Biophilic design posits that human beings possess an innate biological affinity for the natural world—an evolutionary legacy termed the 'biophilia hypothesis' by biologist Edward O. Wilson in 1984. Rather than treating nature as an ornamental afterthought, biophilic architecture systematically integrates living vegetation, natural light, acoustic water features, and organic fractal geometries into the core fabric of buildings and public spaces.

Empirical investigations across hospital recovery wards, university campuses, and corporate headquarters have demonstrated dramatic benefits. Patients situated in rooms overlooking natural foliage experience 20% shorter post-operative recovery periods. Similarly, office employees in biophilically enhanced environments display a 15% increase in cognitive stamina and a measurable decline in absenteeism. As urban centers confront escalating temperatures from the urban heat island effect, vegetated facades and vertical forests also serve as vital thermal buffers, decreasing building cooling demands by up to 30%.`,
        questions: [
            {
                id: 1,
                text: "What evolutionary concept did Edward O. Wilson introduce in 1984?",
                options: [
                    "The biophilia hypothesis",
                    "Urban sensory deprivation",
                    "The thermal buffer theory",
                    "Fractal architecture"
                ],
                correctAnswer: "0",
                type: "choice",
                explanation: "Paragraph 2 states: 'an evolutionary legacy termed the biophilia hypothesis by biologist Edward O. Wilson in 1984.'"
            },
            {
                id: 2,
                text: "According to empirical studies, hospital patients with views of nature experienced _______ shorter recovery times.",
                options: [
                    "10%",
                    "15%",
                    "20%",
                    "30%"
                ],
                correctAnswer: "2",
                type: "choice",
                explanation: "Paragraph 3 states: 'Patients situated in rooms overlooking natural foliage experience 20% shorter post-operative recovery periods.'"
            },
            {
                id: 3,
                text: "Vertical forests and vegetated facades reduce building cooling requirements by up to _______.",
                options: [
                    "15%",
                    "20%",
                    "25%",
                    "30%"
                ],
                correctAnswer: "3",
                type: "choice",
                explanation: "Paragraph 3 states: 'decreasing building cooling demands by up to 30%.'"
            }
        ]
    },
    {
        id: "cambridge_reading_microbiome",
        title: "The Human Microbiome: The Unseen Ecosystem Within Us",
        academicLevel: "Academic 3",
        text: `For centuries, human anatomy viewed bacteria and microorganisms predominantly as infectious pathogens to be eradicated. However, genomic breakthroughs over the past two decades have dismantled this adversarial perspective. The human body is now recognized as a complex, bustling holobiont—a meta-organism hosting trillions of microbes collectively termed the human microbiome. Comprising bacteria, fungi, viruses, and archaea, these microscopic tenants inhabit our skin, oral cavity, and predominantly the gastrointestinal tract, outnumbering human somatic cells by approximately 1.3 to 1.

The metabolic footprint of the gut microbiome is staggering. These microbes possess an aggregate genetic repertoire exceeding human DNA by more than a hundredfold. They perform essential physiological functions that human biology cannot accomplish unaided: synthesizing critical micronutrients such as vitamins B12 and K, breaking down indigestible complex dietary polysaccharides into short-chain fatty acids (SCFAs), and neutralizing environmental carcinogens. SCFAs, particularly butyrate, serve as the primary energetic currency for epithelial cells lining the colon, reinforcing gut barrier integrity and preventing systemic endotoxemia.

Perhaps most revolutionary is the revelation of the bidirectional gut-brain axis. Communicating via the vagus nerve, systemic hormonal signaling, and microbial neuroactive metabolites (including GABA, dopamine, and serotonin precursors), the microbiome exerts profound influence over mood, neurodevelopment, and stress resilience. Perturbations in microbial diversity—termed dysbiosis—have been strongly correlated with inflammatory bowel diseases, metabolic syndrome, and autoimmune disorders. As personalized medicine advances, targeted prebiotic dietary interventions and fecal microbiota transplants are rapidly transitioning from experimental science into standard clinical therapies.`,
        questions: [
            {
                id: 1,
                text: "Modern genomic science views the human body not merely as an isolated organism, but as a _______.",
                options: [
                    "pathogenic reservoir",
                    "holobiont hosting trillions of microbes",
                    "sterile biological system",
                    "synthetic organism"
                ],
                correctAnswer: "1",
                type: "choice",
                explanation: "Paragraph 1 states: 'The human body is now recognized as a complex, bustling holobiont—a meta-organism hosting trillions of microbes.'"
            },
            {
                id: 2,
                text: "Short-chain fatty acids (SCFAs) like butyrate are crucial because they _______.",
                options: [
                    "act as harmful endotoxins",
                    "serve as primary fuel for colon epithelial cells",
                    "increase systemic inflammation",
                    "block neurotransmitter production"
                ],
                correctAnswer: "1",
                type: "choice",
                explanation: "Paragraph 2 explains: 'SCFAs, particularly butyrate, serve as the primary energetic currency for epithelial cells lining the colon.'"
            },
            {
                id: 3,
                text: "True / False / Not Given: The vagus nerve is one of the communication channels of the gut-brain axis.",
                options: [
                    "TRUE",
                    "FALSE",
                    "NOT GIVEN"
                ],
                correctAnswer: "0",
                type: "choice",
                explanation: "Paragraph 3 explicitly confirms: 'Communicating via the vagus nerve, systemic hormonal signaling, and microbial neuroactive metabolites...'"
            },
            {
                id: 4,
                text: "A disruption or loss of microbial balance in the human gut is scientifically termed _______.",
                correctAnswer: "dysbiosis",
                type: "fill",
                explanation: "Paragraph 3 states: 'Perturbations in microbial diversity—termed dysbiosis—have been strongly correlated with...'"
            }
        ]
    },
    {
        id: "cambridge_reading_vertical_farming",
        title: "Autonomous Vertical Farming: The Future of Global Agriculture",
        academicLevel: "Academic 2",
        text: `With the global human population projected to reach nearly 10 billion by mid-century, conventional open-field agriculture is nearing ecological breaking points. Traditional agrarian practices consume 70% of freshwater withdrawals, occupy nearly 40% of arable land, and generate one-third of anthropogenic greenhouse gas emissions. Compounded by soil salinization and climate-induced droughts, the necessity for a radical agricultural paradigm has catalyzed the rise of Controlled Environment Agriculture (CEA), most notably indoor vertical farming.

Vertical farms cultivate crops in vertically stacked layers inside retrofitted urban warehouses or purpose-built modular skyscrapers. Utilizing closed-loop aeroponic or hydroponic delivery systems, roots are continuously misted with nutrient-dense aqueous solutions. This method slashes water consumption by up to 95% compared to open-field farming. Because the environment is entirely isolated from external weather and pests, cultivation requires zero synthetic pesticides or herbicides. Moreover, dynamic LED spectrum tailoring provides photosynthetic photon flux optimized for each botanical growth phase, accelerating harvests from months to days.

While vertical farming presents compelling ecological virtues, critics frequently highlight its immense energy demands. Powering thousands of high-intensity LED fixtures and HVAC climate regulation systems incurs steep electricity expenditures. However, the co-location of vertical farms with municipal renewable microgrids, coupled with next-generation quantum-dot LEDs, is dramatically compressing the levelized cost of indoor production. As transportation food miles are eradicated by growing fresh produce directly within dense urban cores, vertical farming is poised to become a bedrock of resilient 21st-century food security.`,
        questions: [
            {
                id: 1,
                text: "Closed-loop aeroponic systems in vertical farms reduce water consumption by up to _______ compared to open fields.",
                options: [
                    "50%",
                    "75%",
                    "85%",
                    "95%"
                ],
                correctAnswer: "3",
                type: "choice",
                explanation: "Paragraph 2 states: 'This method slashes water consumption by up to 95% compared to open-field farming.'"
            },
            {
                id: 2,
                text: "Which of the following is cited as a major critique or obstacle for indoor vertical farming?",
                options: [
                    "Excessive pesticide dependence",
                    "High electricity and energy demands for lighting and HVAC",
                    "Poor crop taste and lack of nutrients",
                    "Longer growth cycles compared to traditional farming"
                ],
                correctAnswer: "1",
                type: "choice",
                explanation: "Paragraph 3 notes: 'critics frequently highlight its immense energy demands. Powering thousands of high-intensity LED fixtures and HVAC climate regulation systems...'"
            },
            {
                id: 3,
                text: "Vertical farming eradicates 'food miles' because produce is grown directly within _______ cores.",
                correctAnswer: "urban",
                type: "fill",
                explanation: "Paragraph 3 concludes: 'transportation food miles are eradicated by growing fresh produce directly within dense urban cores.'"
            }
        ]
    }
];
