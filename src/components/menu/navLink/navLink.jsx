'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({items}) => {
    const currentPath = usePathname()
    return (
        <div>
            <li> <Link href={items.path} className={items.path === currentPath?"text-red-700 capitalize":""}>{items.title}</Link></li>
              
                    
        </div>
    );
};

export default NavLink;