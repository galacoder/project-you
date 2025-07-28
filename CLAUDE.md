# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

### Package Manager: Bun
- **Install dependencies**: `bun install`
- **Run scripts**: Use `bun run` instead of `yarn` or `npm run`

### Development Commands
- **Expo app (mobile/web)**: `bun run native` or `cd apps/expo && bun run expo start`
- **Expo web only**: `bun run web` or `cd apps/expo && bun run expo start --web`
- **Next.js app**: `cd apps/next && bun run dev`
- **Commit with Commitizen**: `bun run commit` (uses conventional commits)

### Build Commands
- **Expo iOS**: `cd apps/expo && bun run ios`
- **Expo Android**: `cd apps/expo && bun run android`
- **Next.js build**: `cd apps/next && bun run build`
- **Next.js lint**: `cd apps/next && bun run lint`

### Testing
- No test commands currently configured - add testing framework when needed

## Architecture Overview

### Monorepo Structure
- **apps/**: Application entry points
  - **expo/**: Cross-platform app using Expo SDK with expo-router for navigation
  - **next/**: Web-specific app (being phased out in favor of Expo web)
- **packages/**: Shared code
  - **app/**: Core application code shared between platforms
    - **features/**: Feature-based organization (auth, calculator, motivation, payment, you, walkthrough)
    - **components/**: Reusable UI components (buttons, cards, inputs, etc.)
    - **design/**: Design system components (layout, typography, spacing)
    - **lib/**: Utilities (numCalculator, supabase, asyncStorage)
    - **provider/**: App-wide providers (navigation, safe area)

### Tech Stack
- **Framework**: React Native + Expo SDK 51
- **Navigation**: Expo Router v3 (migrating from React Navigation + Solito)
- **Styling**: NativeWind (Tailwind CSS) - migrating to Gluestack UI v2
- **State Management**: Zustand (installed)
- **Data Fetching**: React Query/TanStack Query (installed)
- **Backend**: Supabase
- **Language**: TypeScript throughout

### Navigation Architecture
- Using Expo Router with file-based routing
- Main entry: `apps/expo/app/_layout.tsx`
- Tab navigation: `apps/expo/app/tabs/`
- Feature screens organized by domain (auth, calculator, payment, you)

### Key Features
1. **Authentication**: Email/password with Supabase
2. **Calculator**: Numerology calculator (`numCalculator.ts`)
3. **User Profiles**: Personal numerology data
4. **Motivational Content**: Cards and content
5. **Payment**: In-app purchases for features

### Component Patterns
- Functional components with TypeScript
- Use `styled()` from NativeWind for styling (being migrated to Gluestack)
- Cross-platform components using React Native primitives
- Feature-based organization over screen-based

### Important Files
- **numCalculator.ts**: Core numerology calculation logic
- **supabase.ts**: Database client configuration
- **Design System**: Typography components in `packages/app/design/typography.tsx`

## Development Guidelines

### Code Style
- TypeScript with explicit types for props, state, and function parameters
- Functional React components with hooks
- Use absolute imports where configured
- Follow conventional commits (feat, fix, chore, etc.)

### Cross-Platform Considerations
- Platform-specific code uses `Platform.select()` or `.native.tsx`/`.web.tsx` extensions
- Shared components must work on iOS, Android, and Web
- Test on all platforms before committing changes

### Current Migration Status
The project is undergoing several migrations:
1. **Yarn → Bun**: Package manager migration
2. **NativeWind → Gluestack UI v2**: UI framework migration
3. **Next.js → Expo Web**: Consolidating to single Expo app
4. **Solito → Expo Router**: Navigation framework migration
5. **Client-side → API endpoints + React Server Components**: Architecture upgrade

Refer to `IMPLEMENTATION_PLAN.md` and `IMPLEMENTATION_TRACKING.md` for detailed migration progress.

### State Management
- **Zustand**: For client-side state management
- **React Query**: For server state and data fetching
- **AsyncStorage**: For persistent local storage

### API Integration
- Currently using Supabase client directly
- Migrating to API endpoints pattern
- Planning React Server Components implementation

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md
