'use client'
import React from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenuItem, NavbarMenu
} from "@nextui-org/react";

interface HeaderProps {
    activeIndex: number;
}

export default function Header(props: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {title: "开始使用", link: "/"},
        {title: "关于", link: "/about/mine"},
    ];

    // 当前激活
    const activeIndex = props.activeIndex;

    return (
        <Navbar onMenuOpenChange={ setIsMenuOpen }>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={ isMenuOpen ? "Close menu" : "Open menu" }
                    className="sm:hidden"
                />
                {/*<AcmeLogo />*/ }
                <p className="text-2xl font-semibold">{ process.env.NEXT_PUBLIC_PROJECT_NAME }</p>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    menuItems.map((item, index) => {
                        return (
                            <NavbarItem isActive={ index === activeIndex }>
                                <Link color={ index === activeIndex ? 'primary' : 'foreground' }
                                      href={ item.link }>
                                    { item.title }
                                </Link>
                            </NavbarItem>
                        )
                    })
                }
            </NavbarContent>
            <NavbarMenu>
                { menuItems.map((item, index) => (
                    <NavbarMenuItem key={ `${ item }-${ index }` }>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            { item.title }
                        </Link>
                    </NavbarMenuItem>
                )) }
            </NavbarMenu>
        </Navbar>
    );
}