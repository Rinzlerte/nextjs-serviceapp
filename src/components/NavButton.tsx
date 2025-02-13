import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import NextLink from "./NextLink";

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string,
}

export function NavButton({
    icon: Icon,
    label,
    href,
}: Props) {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            title={label}
            className="rounded-full"
            asChild
        >
            {href ? (
                <NextLink href={href}>
                    <Icon />
                </NextLink>
            ) : (
                <Icon />
            )}
        </Button>
    )
}