import React from "react"

type Props = { children?: string; className?: string }
export function Title({ className, children }: Props) {
  return (
    <div className={`${className} title`}>
      <h2>{children ?? null}</h2>
    </div>
  )
}
