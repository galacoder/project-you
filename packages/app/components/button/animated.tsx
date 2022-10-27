
import { MotiLink } from 'solito/moti'

const ButtonLink = ({ children, href, as }) => (
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

export { ButtonLink }
