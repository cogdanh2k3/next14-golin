"use client";

import { Layout, AppBar } from "react-admin";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const CustomAppBar = () => {
    const router = useRouter();
    const { signOut } = useClerk();
    const handleSignOut = () => {
        signOut(() => router.push("/"));
    };

    return (
        <AppBar>
            <div style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, paddingRight: '16px' }}>
                <Button size="sm" onClick={handleSignOut}>
                    Sign Out
                </Button>
            </div>
        </AppBar>
    )
}

const MyLayout = (props: any) => {
    return (
        <Layout {...props} appBar={CustomAppBar} />
    );
};

export default MyLayout;