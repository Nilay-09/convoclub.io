// "use client";
// 
// import { ElementRef, useEffect, useRef, useState } from "react";
// import { Companion } from "@prisma/client";
// 
// import { ChatMessage, ChatMessageProps } from "@/components/ChatMessage";
// 
// interface ChatMessagesProps {
//     Message: ChatMessageProps[];
//     isLoading: boolean;
//     companion: Companion
// }
// 
// export const ChatMessages = ({
//     Message = [],
//     isLoading,
//     companion,
// }: ChatMessagesProps) => {
//     const scrollRef = useRef<ElementRef<"div">>(null);
// 
//     const [fakeLoading, setFakeLoading] = useState(Message.length === 0 ? true : false);
// 
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setFakeLoading(false);
//         }, 1000);
// 
//         return () => {
//             clearTimeout(timeout);
//         }
//     }, []);
// 
//     useEffect(() => {
//         scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [Message.length]);
// 
//     return (
//         <div className="flex-1 overflow-y-auto pr-4">
//             <ChatMessage
//                 isLoading={fakeLoading}
//                 src={companion.src}
//                 role="system"
//                 content={`Hello, I am ${companion.name}, ${companion.description}`}
//             />
//             {Message.map((message) => (
//                 <ChatMessage
//                     key={message.content}
//                     src={companion.src}
//                     content={message.content}
//                     role={message.role}
//                 />
//             ))}
//             {isLoading && (
//                 <ChatMessage
//                     src={companion.src}
//                     role="system"
//                     isLoading
//                 />
//             )}
//             <div ref={scrollRef} />
//         </div>
//     );
// };