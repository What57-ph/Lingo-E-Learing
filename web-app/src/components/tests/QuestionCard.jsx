import { Card, Radio } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAnswers } from "../../slice/questions";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
const QuestionCard = ({ questions, groupKey, questionRefs, resourceContent, editMode }) => {
    const [answers, setAnswers] = useState({});
    const { userAnswers } = useSelector((state) => state.questions);
    const [questionContent, setQuestionContent] = useState(resourceContent);
    const dispatch = useDispatch();
    const handleAnswerChange = (qId, userAnswerId, isCorrect, questionTitle, userAnswer, questionNumber) => {
        // console.log("Answer ID:", qId)
        setAnswers((prev) => ({ ...prev, [qId]: { userAnswerId, isCorrect } }));
        dispatch(getUserAnswers({ questionId: qId, questionTitle: questionTitle, userAnswerId: userAnswerId, userAnswer: userAnswer, isCorrect: isCorrect, questionNumber: questionNumber }));
    };

    // console.log("User answers:", userAnswers)
    // console.log(`Question for ${groupKey}`, questions);

    const checkType = (resourceContent) => {
        if (typeof resourceContent === "string" && resourceContent.includes("null")) {
            console.log("catch null")
            return "null";
        }
        try {
            new URL(resourceContent);
            return "url";
        } catch {
            return "paragraph";
        }
    }

    return (
        <div className="flex gap-8">
            {/* Passage */}
            {editMode ? (
                <ReactQuill
                    theme="snow"
                    value={questionContent}
                    onChange={(val) => {
                        console.log("Updated:", val);
                        setQuestionContent(val);
                    }}
                    className="prose max-w-none text-lg bg-white rounded-md flex-1"
                />
            ) : (
                <div className={checkType(resourceContent) === "null" ? "hidden" : "bg-blue-50 rounded-lg p-6 mb-8 ml-4 flex-1"}>
                    <div className="flex items-center mb-4">
                        <h3 className="text-lg font-semibold"> Climate Change and Global Warming </h3>
                        <span className="ml-auto text-sm text-blue-600 font-medium"> Questions 1-4 </span>
                    </div>
                    <div
                        className="prose max-w-none text-lg"
                        dangerouslySetInnerHTML={{ __html: questionContent }}
                    />

                </div>
            )}
            {/* <div
                className={
                    checkType(resourceContent) === "null"
                        ? "hidden"
                        : "bg-blue-50 rounded-lg p-6 mb-8 ml-4 flex-1"
                }
            >
                <div className="flex items-center mb-4">
                    <h3 className="text-lg font-semibold">
                        Climate Change and Global Warming
                    </h3>
                    <span className="ml-auto text-sm text-blue-600 font-medium">
                        Questions 1-4
                    </span>
                </div>

                <ReactQuill
                    theme="snow"
                    value={groupKey}
                    onChange={(val) => {
                        console.log("Updated:", val);
                    }}
                    className="prose max-w-none text-lg bg-white rounded-md"
                />
            </div> */}

            {/* Questions */}
            <div className="flex-1">
                {questions.map((q) => (

                    <Card
                        key={q.id}
                        ref={(el) => (questionRefs.current[q.questionNumber] = el)}
                        className="!border-2 border-gray-200 rounded-lg !mb-2 h-auto"
                    >
                        {/* {console.log("question: ", q)} */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                                    {q.questionNumber}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-3">
                                    {q.title || `Question ${q.id}`}
                                </h4>

                                <Radio.Group
                                    onChange={(e) =>
                                        handleAnswerChange(
                                            q.id,
                                            e.target.value,
                                            q.answers.find((a) => a.id === e.target.value)?.correct,
                                            q.title,
                                            q.answers.find((a) => a.id === e.target.value)?.content,
                                            q.questionNumber
                                        )
                                    }
                                    value={answers[q.id]?.userAnswerId}
                                    className="!space-y-3 !flex !flex-col"
                                >
                                    {q.answers?.map((ans) =>
                                        ans.content ? (
                                            <Radio key={ans.id} value={ans.id} className="!text-base">
                                                {ans.content}
                                            </Radio>
                                        ) : null
                                    )}

                                </Radio.Group>

                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
