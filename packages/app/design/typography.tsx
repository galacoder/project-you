import { ComponentProps, forwardRef } from 'react'
import { Text as NativeText, Platform, Linking, TextStyle } from 'react-native'
import { styled, StyledProps } from 'nativewind'
import { TextLink as SolitoTextLink } from 'solito/link'

export const Text = styled(NativeText)

/**
 * You can use this pattern to create components with default styles
 */
export const P = styled(NativeText, 'text-base text-black my-4')

/**
 * Components can have defaultProps and styles
 */
export const H1 = styled(NativeText, 'text-[34px] font-extrabold leading-10')
H1.defaultProps = {
  accessibilityLevel: 1,
  accessibilityRole: 'header',
}

export const H2 = styled(NativeText, 'text-[28px] font-bold leading-10')
export const H3 = styled(
  NativeText,
  'text-[24px] font-bold  capitalize leading-10 '
)
export const BodyIntro = styled(NativeText, 'text-[20px] font-medium')
export const BodyMain = styled(NativeText, 'text-[17px]')
export const MediumText = styled(NativeText, 'text-[17px]')
export const Caption = styled(NativeText, 'text-[15px]')
export const Caption2 = styled(
  NativeText,
  'text-[15px] font-semibold uppercase'
)
export const SmallText = styled(NativeText, 'text-[13px]')
export const SmallText2 = styled(NativeText, 'text-[13px] uppercase')

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof Text> {
  href?: string
  target?: '_blank'
}

export const A = forwardRef<NativeText, StyledProps<AProps>>(function A(
  { className = '', href, target, ...props },
  ref
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
      hrefAttrs: {
        rel: 'noreferrer',
        target,
      },
    },
    default: {
      onPress: (event) => {
        props.onPress && props.onPress(event)
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href)
        }
      },
    },
  })

  return (
    <Text
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    />
  )
})

/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = styled<
  ComponentProps<typeof SolitoTextLink> & { style?: TextStyle }
>(function TextLink({ style, textProps, ...props }) {
  return (
    <SolitoTextLink
      textProps={{ ...textProps, style: [style, textProps?.style] }}
      {...props}
    />
  )
}, 'text-base font-bold hover:underline text-blue-500')
