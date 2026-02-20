"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b", className)}
      {...props}
    />
  )
}

type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  indicator?: React.ReactNode
  openIndicator?: React.ReactNode
}

function AccordionTrigger({
  className,
  children,
  indicator,
  openIndicator,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium pr-3 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        {openIndicator ? (
          // Two-icon swap: show `indicator` when closed, `openIndicator` when open
          <span className="pointer-events-none translate-y-0.5">
            <span className="text-muted-foreground inline-block size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:hidden">
              {indicator ?? <ChevronDownIcon className="size-4" />}
            </span>
            <span className="text-muted-foreground hidden size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:inline">
              {openIndicator}
            </span>
          </span>
        ) : (
          // Single indicator: keep default rotation behavior (rotates direct child `svg`)
          <>
            {indicator ? (
              // Tip: pass a single SVG element (e.g. a Lucide icon) as the indicator
              indicator
            ) : (
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            )}
          </>
        )}
        
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
