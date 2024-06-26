"use client";

import { Dispatch, SetStateAction, useEffect, useState, useTransition } from "react";
import { setChallengeId } from "@/lib/features/challenge/challenge-slice";
import { Challenge as ChallengeType } from "@prisma/client";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import ChallengeHeader from "./challenge-header";
import Image from "next/image";
import axios from "axios";

import { Button } from "../ui/button";
import { useAudio } from "react-use";
import { cn } from "@/lib/utils";
import { Card } from "./card";
import { mainUser } from "@/lib/features/user/user-progress-slice";
import { ChallengeWithChildren } from "./challenges-list";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Spinner from "../spinner";

export default function Challenge({
    id,
    type,
    question,
    setNextActiveChallenge,
    challenges,
    options,
    progresses,
}: ChallengeWithChildren & {
    setNextActiveChallenge: Dispatch<SetStateAction<number>>;
    lastChallengeIndex: number;
    challenges: ChallengeType[];
}) {
    const [selected, setSelected] = useState<string>();
    const [selectedCardStatus, setSelectedCardStatus] = useState<boolean>();
    const [isCorrect, setIsCorrect] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabledCard, setIsDisabaledCard] = useState<boolean>(false);
    const [practice, setPractice] = useState<number>(0);
    const [isPending, startTransition] = useTransition();

    const [correct, _, correctControls] = useAudio({
        src: "/sounds/duolingo-correct.mp3",
    });
    const [wrong, s, wrongControls] = useAudio({
        src: "/sounds/duolingo-wrong.mp3",
    });

    const { userId, hearts, points, userName, userImageSrc, activeCourseId } = useAppSelector((state) => state.userProgress.value);
    const dispatch = useAppDispatch();
    const isDisabled = selected === undefined;
    const splittedQuestion = question?.split('"');

    const checkCardStatus = async () => {
        if (hearts === 0) return toast.error("You have less hearts");
        if (selectedCardStatus === true) {
            setIsLoading(true);
            try {
                const _res = await axios.post("/api/challengeProgress/", { userId, challengeId: id, completed: true });
                startTransition(() => {
                    correctControls.play();
                    dispatch(setChallengeId(id));
                    setPractice((prev) => prev + 100 / challenges.length);
                    setIsCorrect(true);
                    setIsLoading(false);
                    setSelected(undefined);
                    setIsDisabaledCard(true);
                });
            } catch (err) {
                console.error(err);
            }
        } else {
            setIsLoading(true);

            const _res = await axios.patch("/api/userProgress/", { userId, hearts: hearts - 1, points });

            dispatch(
                mainUser({
                    userId: userId,
                    hearts: Math.min(hearts - 1, 5),
                    userName: userName,
                    userImageSrc: userImageSrc,
                    points: points,
                    activeCourseId: activeCourseId,
                })
            );

            wrongControls.play();
            setIsLoading(false);
            setIsCorrect(false);
            setIsDisabaledCard(true);
        }
    };

    return (
        <div>
            {correct}
            {wrong}

            <ChallengeHeader practice={practice} />

            {type === "SELECT" && (
                <div className="absolute top-[175px] ">
                    <Image src="https://ljfujfxjgcubnqfhhlxe.supabase.co/storage/v1/object/public/icons/boy.svg" alt="welcome" width={70} height={70} draggable={false} />
                    <div className="absolute top-1/2 -translate-y-1/2 w-[70px] py-2 -right-[76px] border-2 border-[#E2E8F0] text-center rounded-lg">
                        <div className="absolute  border-[10px] border-transparent border-r-[#E2E8F0] left-[-20px] top-1/2 -translate-y-1/2"></div>
                        {splittedQuestion[1]}
                    </div>
                </div>
            )}

            <h1 className="text-[2rem] font-semibold text-[#404040] relative -top-[90px] max-sm:px-5 text-center">{type === "SELECT" ? splittedQuestion[0] : question}</h1>

            <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-3 px-4", type === "SELECT" && "!flex !flex-col")}>
                {options?.map((challengeOption, idx) => (
                    <Card
                        key={challengeOption.id}
                        {...challengeOption}
                        type={type}
                        setSelected={setSelected}
                        isSelected={selected === challengeOption.id}
                        selected={selected}
                        keys={idx + 1}
                        setSelectedCardStatus={setSelectedCardStatus}
                        isDisabledCard={isDisabledCard}
                        isCorrect={isCorrect}
                    />
                ))}
            </div>
            <footer className="border-t-2 absolute bottom-0 max-sm:-bottom-[257px] left-0 w-full p-5 px-40 text-right bg-white max-sm:border-none max-sm:px-2">
                {isDisabled === false ? (
                    <Button disabled={isLoading} onClick={checkCardStatus} variant="primaryGreen" className={cn("text-white rounded-md w-[110px] h-[44px] max-sm:w-full", isCorrect ? "hidden" : "")}>
                        {isLoading ? <Spinner /> : "Check"}
                    </Button>
                ) : (
                    <Button disabled={true} variant="primaryGreen" className={cn("text-white  rounded-md w-[110px] h-[44px] max-sm:w-full", isCorrect ? "hidden" : "")}>
                        Check
                    </Button>
                )}

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
                            className="text-white w-[150px] h-[46px] text-[1.1rem] font-bold"
                            onClick={() => {
                                setIsCorrect(undefined);
                                setNextActiveChallenge((prev) => prev + 1);
                                setIsDisabaledCard(false);
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
                                setIsDisabaledCard(false);
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
