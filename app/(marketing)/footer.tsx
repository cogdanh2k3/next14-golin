import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/vn.svg"
                        alt="Vietnam"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Vietnam
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/kr.svg"
                        alt="Korea"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Korea
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/jp.svg"
                        alt="Japan"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Japan
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/ru.svg"
                        alt="Italian"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Russia
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/th.svg"
                        alt="Thailand"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Thailand
                </Button>
            </div>
        </footer>
    );
};