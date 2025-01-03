import { isAdmin } from "@/lib/admin";
import { auth } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = () => {
    if (!isAdmin) {
        redirect("/");
    }

    return (
        <App />
    );
};

export default AdminPage;