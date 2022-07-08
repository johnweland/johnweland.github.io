import type { ReactNode } from "react";

import ThemeSelector from '@/components/themeSelector'
export function Layout({ children, title, navigation }: { children?: ReactNode, title?: string, navigation?: any }) {
  return (
    <>
      <ThemeSelector className="relative z-10" />
      {children}
    </>
  )
}