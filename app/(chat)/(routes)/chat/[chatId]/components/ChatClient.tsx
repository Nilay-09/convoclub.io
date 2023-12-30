
'use client'
import { useCompletion } from "ai/react";
import { ChatHeader } from "@/components/ChatHeader";
import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ChatForm } from "@/components/ChatForm";
import { ChatMessages } from "@/components/ChatMessages";
import { ChatMessageProps } from "@/components/ChatMessage";

interface ChatClientProps {
    companion: Companion & {
        Message: Message[];
        _count: {
            Message: number;
        };
    };
}

export const ChatClient = ({
    companion
}: ChatClientProps) => {

    const router = useRouter();
    const [messages, setMessages] = useState<ChatMessageProps[]>(companion.Message);
    const {
        input,
        isLoading,
        handleInputChange,
        handleSubmit,
        setInput,
    } = useCompletion({
        api: `/api/chat/${companion.id}`,

        onFinish(_prompt, completion) {
            const systemMessage: ChatMessageProps = {
                role: "system",
                content: completion
            };

            setMessages((current) => [...current, systemMessage]);
            setInput("");

            router.refresh();
        },
    });
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        const userMessage: ChatMessageProps = {
            role: "user",
            content: input
        };

        setMessages((current) => [...current, userMessage]);

        handleSubmit(e);
    }
    return (
        <div className="flex flex-col h-full p-4 space-y-2">
            <ChatHeader companion={companion} />
            <ChatMessages
                companion={companion}
                isLoading={isLoading}
                Message={messages}
            />
            <ChatForm
                isLoading={isLoading}
                input={input}
                handleInputChange={handleInputChange}
                onSubmit={onSubmit}
            />
        </div>
    );
};
