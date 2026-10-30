import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close
export const SheetTitle = Dialog.Title
export const SheetDescription = Dialog.Description
export function SheetContent({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
      <Dialog.Content
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l bg-background p-7 shadow-xl',
          className
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-sm hover:bg-accent">
          <X size={20} />
          <span className="sr-only">Close dialog</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
