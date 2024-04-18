"use client";

import { ChallengeOption, Challenge as ChallengeType } from "@prisma/client";
import { Card } from "./card";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useAudio } from "react-use";

export default function Challenge({
    id,
    type,
    question,
    order,
    challengeOptions,
    setNextActiveChallenge,
    lastChallengeIndex,
    nextActiveChallenge,
}: ChallengeType & {
    challengeOptions: ChallengeOption[];
    setNextActiveChallenge: Dispatch<SetStateAction<number>>;
    nextActiveChallenge: number;
    lastChallengeIndex: number;
}) {
    const [selected, setSelected] = useState<string>();
    const [selectedCardStatus, setSelectedCardStatus] = useState<boolean>();
    const [isCorrect, setIsCorrect] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [correct, _, correctControls] = useAudio({
        src: "/sounds/duolingo-correct.mp3",
    });
    const [wrong, s, wrongControls] = useAudio({
        src: "/sounds/duolingo-wrong.mp3",
    });
    const userProgress = useSelector((state: RootState) => state.userProgress.value);
    const isDisabled = selected === undefined;
    console.log(isCorrect);
    const getCurrentChallengeOptions = useMemo(() => {
        return challengeOptions.filter((challengeOption) => challengeOption.challengeId === id);
    }, [challengeOptions, id]);

    const checkCardStatus = async () => {
        if (selectedCardStatus === true) {
            setIsLoading(true);
            try {
                // if (nextActiveChallenge === lastChallengeIndex) return;
                const res = await axios.post("/api/challengeProgress/", { userId: userProgress.userId, challengeId: id, completed: true });
                correctControls.play();
                setIsCorrect(true);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        } else {
            setIsLoading(true);
            setTimeout(() => {
                wrongControls.play();
                setIsLoading(false);
                setIsCorrect(false);
            }, 1500);
        }
    };

    return (
        <div>
            {correct}
            {wrong}
            <h1 className="mb-[27px] text-[2rem] font-semibold text-[#404040]">{question}</h1>

            <div className="flex items-center gap-2">
                {getCurrentChallengeOptions?.map((challengeOption, idx) => (
                    <Card
                        key={challengeOption.id}
                        {...challengeOption}
                        type={type}
                        setSelected={setSelected}
                        isSelected={selected === challengeOption.id}
                        selected={selected}
                        keys={idx + 1}
                        setSelectedCardStatus={setSelectedCardStatus}
                        isCorrect={isCorrect}
                    />
                ))}
            </div>
            <footer className="border-t-2 absolute bottom-0 left-0 w-full p-5 px-40 text-right">
                <Button disabled={isDisabled || isLoading} onClick={checkCardStatus} variant="primaryGreen" className={cn("text-white rounded-md w-[110px] h-[44px]", isCorrect ? "hidden" : "")}>
                    Check
                </Button>

                {isCorrect === true && (
                    <div className="w-full h-[150px] fixed bottom-0 left-0 z-50 border-green-300 bg-[#D7FFB8] text-green-300 flex items-center justify-around px-40">
                        <div className="flex items-center gap-x-3 text-[#58A700]">
                            <div className="w-fit bg-white rounded-full p-3 ">
                                <IoMdCheckmark size={60} />
                            </div>
                            <span className="font-bold text-[1.4rem]"> Excellent!</span>
                        </div>
                        <Button
                            variant="primaryGreen"
                            className="text-white rounded-md w-[150px] h-[46px] text-[1.1rem] font-bold"
                            onClick={() => {
                                setIsCorrect(undefined);
                                setNextActiveChallenge((prev) => prev + 1);
                            }}
                        >
                            next
                        </Button>
                    </div>
                )}
                {isCorrect === false && (
                    <div className="w-full h-[150px] fixed bottom-0 left-0 z-50 border-rose-300 bg-rose-100 flex items-center justify-around px-40">
                        <div className="flex items-center gap-x-3 text-[#EF4444]">
                            <div className="w-fit bg-white rounded-full p-3 ">
                                <IoMdClose size={60} />
                            </div>
                            <span className="font-bold text-[1.4rem]"> Try again.</span>
                        </div>
                        <Button
                            variant="primaryRed"
                            className="text-white w-[150px] h-[46px] text-[1.1rem] font-bold"
                            onClick={() => {
                                setIsCorrect(undefined);
                            }}
                        >
                            Retry
                        </Button>
                    </div>
                )}
            </footer>
        </div>
    );
}
