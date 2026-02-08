"use client"

import * as React from "react"
import "react-phone-number-input/style.css"
import RPNInput from "react-phone-number-input"
import { cn } from "@/lib/utils"

type PhoneInputProps = React.ComponentProps<typeof RPNInput> & {
    className?: string
}

export function PhoneInput({ className, ...props }: PhoneInputProps) {
    return (
        <RPNInput
            international
            defaultCountry="IN"
            className={cn(
                "flex h-10 w-full rounded-md border border-input bg-white text-black px-3 py-2 text-sm",
                "ring-offset-white text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                className,
            )}
            {...props}
        />
    )
}
