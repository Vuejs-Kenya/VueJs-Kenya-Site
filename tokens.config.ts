import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

// See Typography config on https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
export default defineTheme({
  color: {
    primary: colors.emerald,
    secondary: colors.gray,
  },
  typography: {
    color: {
      secondary: colors.gray,
    },
  },
  prose: {
    img: {
      borderRadius: '5px',
    },
    h1: {
      fontSize: '{typography.fontSize.5xl}',
    },
    a: {
      textDecoration: 'none',
      color: {
        static: {
          initial: colors.zinc[800],
          dark: colors.gray[50],
        },
        hover: {
          initial: colors.green[500],
          dark: colors.green[500],
        },
      },
      border: {
        width: '1px',
        style: {
          static: 'dashed',
          hover: 'solid',
        },
        color: {
          static: {
            initial: 'currentColor',
            dark: 'currentColor',
          },
          hover: {
            initial: 'currentColor',
            dark: 'currentColor',
          },
        },
        distance: '2px',
      },
      fontWeight: '{typography.fontWeight.medium}',
      hasCode: {
        borderBottom: 'none',
      },
      code: {
        border: {
          width: '{prose.a.border.width}',
          style: '{prose.a.border.style.static}',
          color: {
            static: {
              initial: '{typography.color.secondary.400}',
              dark: colors.gray[50],
            },
            hover: {
              initial: colors.purple[500],
              dark: colors.purple[500],
            },
          },
        },
        color: {
          static: {
            initial: colors.gray[700],
            dark: colors.gray[50],
          },
          hover: {
            initial: colors.green[500],
            dark: colors.green[500],
          },
        },
        background: {
          static: {},
          hover: {
            initial: colors.purple[50],
            dark: '{typography.color.primary.900}',
          },
        },
      },
    },
    code: {
      block: {
        backgroundColor: {
          initial: colors.gray['50'],
          dark: colors.gray['900'],
        },
      },
      inline: {
        backgroundColor: {
          initial: colors.gray['100'],
          dark: colors.gray['900'],
        },
      },
    },
  },
})
