"use client"

import React, { PropsWithChildren, useRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import type { MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string
  iconSize?: number
  iconMagnification?: number
  disableMagnification?: boolean
  iconDistance?: number
  direction?: "top" | "middle" | "bottom" | "left" | "center" | "right"
  orientation?: "horizontal" | "vertical"
  children: React.ReactNode
}

const DEFAULT_SIZE = 48
const DEFAULT_MAGNIFICATION = 68
const DEFAULT_DISTANCE = 100
const DEFAULT_DISABLEMAGNIFICATION = false

const dockVariants = cva(
  "flex items-center justify-center gap-4 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl",
  {
    variants: {
      orientation: {
        horizontal: "mx-auto mt-8 h-[72px] w-max p-2 pb-3",
        vertical: "h-max w-[72px] flex-col p-3 px-2",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      disableMagnification = DEFAULT_DISABLEMAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      orientation = "horizontal",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity)

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (
          React.isValidElement<DockIconProps>(child) &&
          child.type === DockIcon
        ) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            disableMagnification: disableMagnification,
            distance: iconDistance,
            orientation: orientation,
          })
        }
        return child
      })
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(orientation === "vertical" ? e.pageY : e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ orientation, className }), {
          "items-start": direction === "top" || direction === "left",
          "items-center": direction === "middle" || direction === "center",
          "items-end": direction === "bottom" || direction === "right",
        })}
      >
        {renderChildren()}
      </motion.div>
    )
  }
)

Dock.displayName = "Dock"

export interface DockIconProps
  extends Omit<MotionProps & React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: number
  magnification?: number
  disableMagnification?: boolean
  distance?: number
  mouseX?: MotionValue<number>
  className?: string
  orientation?: "horizontal" | "vertical"
  children?: React.ReactNode
  props?: PropsWithChildren
}

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  disableMagnification,
  distance = DEFAULT_DISTANCE,
  mouseX,
  orientation = "horizontal",
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const defaultMouseX = useMotionValue(Infinity)

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 }
    if (orientation === "vertical") {
      return val - bounds.y - bounds.height / 2
    }
    return val - bounds.x - bounds.width / 2
  })

  const scaleTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [1, magnification / size, 1]
  )

  const scale = useSpring(scaleTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 15,
  })

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        scale,
        transformOrigin: orientation === "vertical" ? "center right" : "center bottom",
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full p-1.5",
        disableMagnification && "hover:bg-muted-foreground transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

DockIcon.displayName = "DockIcon"

export { Dock, DockIcon, dockVariants }
