# -*- coding: utf-8 -*-
"""Assemble all 76 units of authentic grammar quizzes into src/data/ielts/ielts_grammar_quizzes.ts"""

import json
import quiz_part1
import quiz_part2
import quiz_part3
import quiz_part4

all_quizzes = {}
all_quizzes.update(quiz_part1.PART1_QUIZZES)
all_quizzes.update(quiz_part2.PART2_QUIZZES)
all_quizzes.update(quiz_part3.PART3_QUIZZES)
all_quizzes.update(quiz_part4.PART4_QUIZZES)

print(f"Total units gathered: {len(all_quizzes)}")

# Validation assertions
forbidden_patterns = [
    "[Savol #",
    "Variant #",
    "Correct academic usage adhering to",
    "breaking the A1",
    "breaking the A2",
    "breaking the B1",
    "breaking the B2",
    "breaking the C1"
]

total_questions = 0
for unit_id, questions in all_quizzes.items():
    assert len(questions) >= 10, f"Unit {unit_id} has fewer than 10 questions: {len(questions)}"
    
    seen_questions = set()
    for idx, q in enumerate(questions):
        total_questions += 1
        q_text = q["question"].strip()
        
        # Check forbidden synthetic patterns
        for pattern in forbidden_patterns:
            assert pattern not in q_text, f"Forbidden pattern '{pattern}' found in {unit_id} q#{idx+1}: {q_text}"
            for opt in q["options"]:
                assert pattern not in opt, f"Forbidden pattern '{pattern}' found in option: {opt}"
        
        # Check duplicate question in same unit
        assert q_text not in seen_questions, f"Duplicate question in {unit_id}: {q_text}"
        seen_questions.add(q_text)
        
        # Check options
        assert len(q["options"]) == 4, f"Question does not have 4 options in {unit_id} q#{idx+1}: {q['options']}"
        assert len(set(q["options"])) == 4, f"Options contain duplicates in {unit_id} q#{idx+1}: {q['options']}"
        assert q["correctAnswer"] in q["options"], f"correctAnswer '{q['correctAnswer']}' not in options {q['options']} in {unit_id} q#{idx+1}"
        assert len(q["explanation"].strip()) > 5, f"Explanation too short or missing in {unit_id} q#{idx+1}"

print(f"ALL VALIDATION CHECKS PASSED for {total_questions} questions across {len(all_quizzes)} units!")

# Generate TypeScript file
ts_content = """export interface GrammarQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

/**
 * 100% Authentic, Pedagogically Rigorous IELTS Grammar Quiz Bank
 * Covers all 76 Units (Raymond Murphy English Grammar in Use + Advanced IELTS Academic Units)
 * Each unit contains at least 10 authentic questions with 4 distinct options and detailed Uzbek explanations.
 */
export const COMPREHENSIVE_GRAMMAR_QUIZZES: Record<string, GrammarQuizQuestion[]> = """

ts_content += json.dumps(all_quizzes, ensure_ascii=False, indent=2) + ";\n"

with open("../src/data/ielts/ielts_grammar_quizzes.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Successfully written to src/data/ielts/ielts_grammar_quizzes.ts")
