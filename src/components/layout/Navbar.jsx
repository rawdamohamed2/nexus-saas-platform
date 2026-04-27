import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils.js'

const Navbar = () => {
  return (
    <header
      className={`sticky top-0 z-50 min-w-full border-b border-slate-200/50 bg-white/80 py-2 shadow-sm backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80`}
    >
      <NavigationMenu className={`container flex items-center justify-between`}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={`headerIcon text-3xl`}>
              Nexus
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className={`gap-3`}>
          <NavigationMenuItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  'navLink text-md transition-colors',
                  isActive
                    ? 'font-bold text-blue-600'
                    : 'hover:bg-muted text-slate-600 hover:text-blue-600',
                )
              }
            >
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  'navLink text-md transition-colors',
                  isActive
                    ? 'font-bold text-blue-600'
                    : 'hover:bg-muted text-slate-600 hover:text-blue-600',
                )
              }
            >
              Services
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                cn(
                  'navLink text-md transition-colors',
                  isActive
                    ? 'font-bold text-blue-600'
                    : 'hover:bg-muted text-slate-600 hover:text-blue-600',
                )
              }
            >
              Features
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                cn(
                  'navLink text-md transition-colors',
                  isActive
                    ? 'font-bold text-blue-600'
                    : 'hover:bg-muted text-slate-600 hover:text-blue-600',
                )
              }
            >
              Pricing
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className={`gap-4`}>
          <NavigationMenuItem>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold'
                  : 'hover:bg-muted text-slate-600 transition-all hover:text-blue-600 active:scale-95 dark:text-slate-400'
              }
            >
              Login
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'primaryButton px-4 py-2'
              }
            >
              Get Started
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
export default Navbar
