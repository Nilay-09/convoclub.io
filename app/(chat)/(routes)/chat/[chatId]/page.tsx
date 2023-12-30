import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

import { ChatClient } from "./components/ChatClient";

interface ChatIdPageProps {
    params: {
        chatId: string;
    }
}

const ChatIdPage = async ({
    params
}: ChatIdPageProps) => {
    const { userId } = auth();

    if (!userId) {
        return redirectToSignIn();
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.chatId
        },
        include: {
            Message: {
                orderBy: {
                    createdAt: "asc"
                },
                where: {
                    userId,
                },
            },
            _count: {
                select: {
                    Message: true,
                }
            }
        }
    });


    if (!companion) {
        return redirect("/");
    }

    return (
        <ChatClient companion={companion} />

    );
}

export default ChatIdPage;