import { MotiLink } from 'solito/moti'
import React from 'react'

interface ButtonLinkProps {
  href: string;
  as?: any;
  children: React.ReactNode;
}

function ButtonLink({ children, href, as }: ButtonLinkProps) {
  return (
    <MotiLink
      href={href}
      as={as}
      animate={({ hovered, pressed }) => {
        'worklet'
        return {
          scale: pressed ? 0.9 : hovered ? 1.1 : 1,
        }
      }}
    >
      {children}
    </MotiLink>
  )
}

export { ButtonLink }
