import { auth } from "@clerk/nextjs"

const adminIds = [
    "user_2qQkGrOzI6qUhb0G3uolN9Lj3NC",
];

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};