"use client";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import React from 'react'

function Header() {
    const { user } = useUser();

    return (
        <div>
            {user && (
                <h1 className='text-2xl'>
                    Espacio de: { user?.firstName }
                </h1>
            )}

            {/* Breadcrumbs */}

            <div className="">
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
};

export default Header;
