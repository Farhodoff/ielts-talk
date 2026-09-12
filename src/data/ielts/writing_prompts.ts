export interface WritingPromptItem {
  id: string;
  category: string;
  title: string;
  prompt: string;
  keyVocabulary: string[];
  sampleOutline: {
    intro: string;
    body1: string;
    body2: string;
    conclusion: string;
  };
  band9Snippet?: string;
}

export interface WritingPromptsBank {
  task1: WritingPromptItem[];
  task2: WritingPromptItem[];
}

export const IELTS_WRITING_PROMPTS: WritingPromptsBank = {
  task1: [
    {
      id: "t1_line_meat_consumption",
      category: "Line Graph",
      title: "Global Meat Consumption Trends (1980–2020)",
      prompt: "The line graph below illustrates the per capita consumption of four distinct types of meat (beef, chicken, pork, and lamb) in a European nation between 1980 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      keyVocabulary: ["witnessed an upward trajectory", "plummeted dramatically", "overtook", "plateaued around", "marginal fluctuation"],
      sampleOutline: {
        intro: "Paraphrase the prompt specifying time frame (1980–2020) and dietary variables.",
        body1: "Describe the sharp ascent of chicken consumption and its overtaking of beef in the early 2000s.",
        body2: "Detail the continuous downward decline in beef and lamb consumption, contrasting with relatively stable pork figures.",
        conclusion: "Overview: Chicken emerged as the dominant meat by the end of the period, while beef experienced the steepest decline."
      },
      band9Snippet: "Overall, while chicken consumption experienced a pronounced upward trajectory, replacing beef as the most prevalent dietary choice, lamb and beef both underwent substantial long-term contractions."
    },
    {
      id: "t1_bar_energy_sources",
      category: "Bar Chart",
      title: "Electricity Generation by Energy Source (2010 vs 2022)",
      prompt: "The bar chart compares the percentage of electricity generated from five energy sources (coal, natural gas, nuclear, solar, and wind) across six developed nations in 2010 and 2022. Summarise the main features and make relevant comparisons.",
      keyVocabulary: ["accounted for the lion's share", "exponential surge", "dwarfed by", "marked transition toward renewables", "negligible proportion"],
      sampleOutline: {
        intro: "Paraphrase the chart comparing 2010 and 2022 power generation across five sources.",
        body1: "Analyze the reduction in fossil fuels (coal and gas), highlighting nations with the steepest drop.",
        body2: "Examine the dramatic rise in solar and wind generation.",
        conclusion: "Overview: Fossil fuels shrank across almost all surveyed nations, while solar and wind energy demonstrated unprecedented growth."
      },
      band9Snippet: "A closer inspection reveals that solar and wind power, which were virtually negligible in 2010 at under 4%, surged fourfold by 2022, systematically displacing conventional coal-fired baseload generation."
    },
    {
      id: "t1_pie_household_expenditure",
      category: "Pie Chart",
      title: "Household Spending Proportions in Japan (1970 vs 2020)",
      prompt: "The two pie charts illustrate the proportion of household expenditure allocated to five sectors (food, housing, transport, leisure, and healthcare) in Japan in 1970 and 2020. Summarise the data by selecting key trends.",
      keyVocabulary: ["absorbed the largest share", "halved over the period", "a fourfold increase", "reallocation of disposable income"],
      sampleOutline: {
        intro: "Paraphrase pie charts showing shifts in Japanese household spending over 50 years.",
        body1: "Contrast food spending (which dropped from over 40% to under 20%) with housing.",
        body2: "Describe the expansion in leisure and healthcare expenditures.",
        conclusion: "Overview: Basic necessities like food occupied a much smaller share by 2020, while discretionary spending on healthcare and transport expanded noticeably."
      },
      band9Snippet: "In 1970, food expenditure constituted the predominant fiscal commitment of Japanese families at 42%, whereas by 2020 this figure had shrunk to 18%, being superseded by housing."
    },
    {
      id: "t1_table_academic_enrolment",
      category: "Table",
      title: "International Student Enrolments across University Faculties",
      prompt: "The table provides data on the number of overseas students enrolled in five university faculties (Engineering, Medicine, Business, Humanities, and Law) across four major English-speaking destinations in 2023.",
      keyVocabulary: ["constituted the majority", "closely trailing behind", "least preferred academic field", "outnumbered domestic cohorts"],
      sampleOutline: {
        intro: "Paraphrase the table parameters and faculty breakdowns.",
        body1: "Highlight Business and Engineering as the top magnets for international applicants across all four destinations.",
        body2: "Analyze the comparatively modest enrolments in Humanities and Law.",
        conclusion: "Overview: STEM and commerce subjects attracted the bulk of overseas admissions, with Business consistently claiming the top spot."
      },
      band9Snippet: "Business faculties consistently commanded the highest enrolments, attracting upwards of 85,000 international students, eclipsing humanities by a factor of nearly three to one."
    },
    {
      id: "t1_process_plastic_recycling",
      category: "Process Diagram",
      title: "Mechanical Recycling of Post-Consumer Plastics",
      prompt: "The flowchart illustrates the sequential industrial stages involved in recycling discarded polyethylene terephthalate (PET) bottles into synthetic textile fibers. Summarise the steps.",
      keyVocabulary: ["initial sorting and cleansing", "mechanical shredding into flakes", "thermal extrusion", "spinning into spools of yarn"],
      sampleOutline: {
        intro: "Paraphrase the diagram outlining the multi-stage linear recycling workflow.",
        body1: "Detail the preliminary sorting, washing, chemical decontamination, and shredding stages.",
        body2: "Explain the thermal melting, microscopic extrusion into filaments, and final spooling.",
        conclusion: "Overview: The cyclical process transforms post-consumer waste into high-grade synthetic yarn across six discrete physical and thermal phases."
      },
      band9Snippet: "The recycling cycle initiates with optical and manual sorting, following which discarded bottles undergo intensive alkaline washing to remove adhesive labels prior to mechanical granulation."
    },
    {
      id: "t1_map_coastal_town_redevelopment",
      category: "Map / Plan",
      title: "Urban Redevelopment of Portville Harbor (2000 vs Present)",
      prompt: "The two maps depict the architectural and infrastructural transformations that have occurred in the coastal district of Portville between 2000 and the present day. Summarise the alterations.",
      keyVocabulary: ["industrial wharves were converted into", "demolished to make way for", "pedestrianisation of the waterfront", "erection of modern high-rises"],
      sampleOutline: {
        intro: "Paraphrase the maps illustrating modernization of Portville harbor over two decades.",
        body1: "Describe the demolition of abandoned maritime warehouses and the introduction of residential apartments.",
        body2: "Detail transport infrastructural additions: tramway expansion, public parklands, and new pedestrian promenade.",
        conclusion: "Overview: Portville transitioned from a derelict industrial shipyard into a modern, pedestrianized leisure and residential waterfront."
      },
      band9Snippet: "Where commercial cargo docks formerly lined the eastern basin in 2000, the waterfront has undergone comprehensive gentrification, boasting a sequence of multi-storey residential complexes and a marina."
    }
  ],

  task2: [
    {
      id: "t2_opinion_ai_workplace",
      category: "Opinion (Agree/Disagree)",
      title: "Artificial Intelligence and the Future of Human Labor",
      prompt: "Some economists argue that the rapid integration of artificial intelligence and automation into the workplace will ultimately create more employment opportunities than it destroys. To what extent do you agree or disagree?",
      keyVocabulary: ["technological obsolescence", "creative destruction", "paradigm shift in human capital", "reskilling imperative", "unprecedented cognitive augmentation"],
      sampleOutline: {
        intro: "Introduce the debate surrounding AI disruption; state clear nuanced agreement (AI will create higher-value roles though requiring rigorous transitional support).",
        body1: "Acknowledge routine jobs displaced (clerical, data entry, basic diagnostics).",
        body2: "Argue that historical tech revolutions (steam, computing) consistently sparked novel industries (AI ethics, prompt engineering, robotics maintenance).",
        conclusion: "Restate thesis: while short-term friction is inevitable, long-term employment will expand into creative and supervisory domains."
      },
      band9Snippet: "While the apprehension surrounding widespread technological unemployment is historically understandable, empirical evidence suggests that automation primarily alters the nature of work rather than its absolute volume."
    },
    {
      id: "t2_discussion_free_higher_education",
      category: "Discussion (Both Views)",
      title: "Universal Free Tertiary Education vs Student Tuition",
      prompt: "Some people believe that university education should be completely free for all citizens, funded entirely through national taxation. Others contend that students should pay their own tuition fees since higher education primarily confers personal financial benefits. Discuss both views and give your opinion.",
      keyVocabulary: ["social mobility", "meritocratic access", "fiscal strain on public exchequers", "private rate of return", "redistributive justice"],
      sampleOutline: {
        intro: "Introduce the societal dilemma of funding higher education; state thesis favoring subsidized progressive loans.",
        body1: "Discuss the view for free tuition: removes socioeconomic barriers, prevents brain drain, treats education as a public good.",
        body2: "Discuss the view for fees: high personal earning premiums for graduates; free systems may overtax non-graduate workers.",
        conclusion: "Synthesize: Income-contingent loans backed by government subsidies strikes the fairest balance."
      },
      band9Snippet: "Proponents of state-funded higher education assert that intellectual capital constitutes a fundamental public good, the benefits of which ripple across the entire socioeconomic spectrum through innovation and civic stability."
    },
    {
      id: "t2_problem_solution_urban_congestion",
      category: "Problem & Solution",
      title: "Metropolitan Traffic Gridlock & Air Pollution",
      prompt: "In many contemporary megacities, expanding vehicular congestion and deteriorating ambient air quality pose severe threats to public health. What are the primary causes of this phenomenon, and what measures should municipal authorities implement to resolve it?",
      keyVocabulary: ["uncontrolled urban sprawl", "inadequate mass transit infrastructure", "congestion pricing schemes", "electrification of bus fleets", "emission abatement"],
      sampleOutline: {
        intro: "Paraphrase the problem of traffic gridlock and urban smog in megacities.",
        body1: "Causes: deficient rail infrastructure, suburban sprawl forcing private vehicle reliance, affordable personal cars.",
        body2: "Solutions: urban congestion charges (like London), major investments in electrified subterranean metro systems, active cycling lanes.",
        conclusion: "Summarize: comprehensive multimodal public transit combined with disincentives for private driving will alleviate urban gridlock."
      },
      band9Snippet: "The chief catalyst behind chronic urban paralysis is the historical prioritization of private automotive infrastructure over comprehensive, integrated public transit networks."
    },
    {
      id: "t2_advantages_disadvantages_remote_work",
      category: "Advantages & Disadvantages",
      title: "The Proliferation of Remote and Telecommuting Workplaces",
      prompt: "An increasing proportion of organizations are permitting employees to work remotely from home on a permanent basis. Do the advantages of this trend outweigh the disadvantages?",
      keyVocabulary: ["geographical flexibility", "work-life balance", "erosion of corporate culture", "isolation and psychological disconnection", "elimination of commuting fatigue"],
      sampleOutline: {
        intro: "Introduce the post-pandemic telecommuting paradigm; state that advantages (productivity, family time, lower overheads) outweigh drawbacks.",
        body1: "Disadvantages: diminished team cohesion, blurred boundaries between domestic and professional life.",
        body2: "Advantages: elimination of stressful daily commutes, access to global talent pools, decreased corporate real estate footprints.",
        conclusion: "Conclude that hybrid remote models offer superior long-term human and commercial benefits."
      },
      band9Snippet: "Foremost among the virtues of telecommuting is the eradication of the daily commute, which liberates countless hours weekly and dramatically alleviates commuter-induced psychological exhaustion."
    },
    {
      id: "t2_opinion_traditional_culture",
      category: "Opinion (Agree/Disagree)",
      title: "Global Homogenization vs Preservation of Traditional Culture",
      prompt: "In the modern era of globalization, traditional customs, indigenous languages, and distinctive cultural heritage are rapidly disappearing. Some argue that this is an inevitable and positive sign of global unity. To what extent do you agree or disagree?",
      keyVocabulary: ["cultural homogenization", "linguistic diversity", "ancestral heritage", "monolithic global consumerism", "cultural preservation"],
      sampleOutline: {
        intro: "Introduce the homogenization of cultures; strongly disagree that losing traditions is positive.",
        body1: "Explain how language and rituals embody unique ecological and philosophical wisdom.",
        body2: "Argue that genuine global unity stems from multicultural appreciation, not bland commercial uniformity.",
        conclusion: "Restate that cultural extinction impoverishes the collective heritage of humanity."
      },
      band9Snippet: "Far from fostering genuine international fraternity, the erosion of cultural idiosyncrasies threatens to replace centuries of profound philosophical heritage with a superficial, monolithic consumer culture."
    },
    {
      id: "t2_two_part_crime_punishment",
      category: "Two-Part Question",
      title: "Prison Sentences vs Community Rehabilitation",
      prompt: "Many criminologists argue that custodial prison sentences are ineffective in deterring crime. Why are conventional prisons failing to rehabilitate offenders, and what alternative punitive methods could be more effective?",
      keyVocabulary: ["penal incarceration", "high rates of recidivism", "restorative justice", "vocational training programs", "reintegration into civil society"],
      sampleOutline: {
        intro: "Acknowledge the shortcomings of conventional incarceration; state essay will analyze causes and alternative models.",
        body1: "Why prisons fail: criminal networking, lack of psychological therapy, social stigma preventing post-release employment.",
        body2: "Alternatives: community restorative justice, compulsory educational and vocational qualification schemes.",
        conclusion: "Recap: Shift from punitive retribution to constructive rehabilitation radically curtails recidivism."
      },
      band9Snippet: "Conventional correctional facilities frequently function as incubators for criminality rather than institutions of reform, as the punitive environment severs familial bonds and deepens socioeconomic disenfranchisement."
    }
  ]
};
