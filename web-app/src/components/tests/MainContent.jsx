import { Button } from "antd";
import React, { useRef, useState } from "react";
import SideProgress from "./SideProgress";
import QuestionCard from "./QuestionCard";
import { questionOfTest } from "../../data/MockData";
import _ from "lodash";

const MainContent = ({ editMode }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const [listQuestionNumber, setListQuestionNumber] = useState(0);
    const questionRefs = useRef({});
    const parts = _.uniq(questionOfTest.map((item) => item.part));
    const questionsPerPart = _.countBy(questionOfTest, "part");
    const groupQuestion = _.groupBy(
        questionOfTest.map((q, i) => ({
            ...q,
            resourceContent: q.resourceContent ?? `null-${i}`
        })),
        "resourceContent"
    );
    // console.log("Group questions:", groupQuestion)


    const questionCardComponents = Object.entries(groupQuestion).map(
        ([key, item], groupIdx) => (

            <div key={key} className="mb-8">

                <QuestionCard
                    questions={item}
                    groupKey={key}
                    questionRefs={questionRefs}
                    resourceContent={item[0].resourceContent}
                    editMode={editMode}
                />
            </div>
        )
    );

    const movePage = (action) => {
        setListQuestionNumber((prev) => {
            if (action === "next") return Math.min(prev + 1, questionCardComponents.length - 1);
            if (action === "previous") return Math.max(prev - 1, 0);
            return prev;
        });
    };

    const questionToGroupIndex = {};
    Object.entries(groupQuestion).forEach(([_, item], groupIdx) => {
        item.forEach((q) => {
            questionToGroupIndex[q.questionNumber] = groupIdx;
        });
    });

    return (
        <main className="flex min-h-screen">
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                    {questionCardComponents[listQuestionNumber]}

                    <div className={`${editMode ? "mt-16" : "mt-6"} flex justify-between`}>
                        <Button
                            type="primary"
                            className="rounded-lg !bg-black !w-32 !h-12 hover:!bg-gray-700 mx-4 !text-white"
                            onClick={() => movePage("previous")}
                            disabled={listQuestionNumber === 0}
                        >
                            Previous Part
                        </Button>
                        <Button
                            type="primary"
                            className="rounded-lg !w-32 !h-12"
                            onClick={() => movePage("next")}
                            disabled={listQuestionNumber === questionCardComponents.length - 1}
                        >
                            Next Part
                        </Button>
                    </div>
                </div>
            </div>
            <SideProgress
                parts={parts}
                questionsPerPart={questionsPerPart}
                currentIndex={listQuestionNumber}
                setCurrentIndex={setListQuestionNumber}
                questionToGroupIndex={questionToGroupIndex}
                questionRefs={questionRefs}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
            />

        </main>
    );
};

export default MainContent;
