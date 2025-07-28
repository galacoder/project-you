# Project-You Implementation Plan

## Upgrade Goals
- Update to latest Expo SDK (50+)
- Replace Next.js with Expo for web
- Migrate from NativeWind to Gluestack UI v2
- Implement API endpoints
- Utilize React Server Components
- Set up EAS hosting
- **NEW: Migrate from Yarn to Bun**
- **NEW: Implement React Query and Zustand**

## Phase 1: Dependency Update
- [ ] Upgrade package manager
  - [ ] Migrate from Yarn to Bun
  - [ ] Update lockfiles and scripts
  - [ ] Configure Bun for monorepo structure
- [ ] Upgrade core dependencies
  - [ ] Expo SDK to latest (50+)
  - [ ] React Native to compatible version
  - [ ] React to latest version
  - [ ] expo-router to latest version
- [ ] Update React Native ecosystem packages
  - [ ] Reanimated, Gesture Handler, Safe Area Context
  - [ ] Update navigation-related libraries
  - [ ] Check for deprecated APIs
- [ ] Add Gluestack UI v2
  - [ ] Install Gluestack UI core and components
  - [ ] Set up theme configuration
  - [ ] Remove NativeWind dependencies
- [ ] **NEW: Add state management and data fetching**
  - [ ] Install Zustand for state management
  - [ ] Install React Query (TanStack Query) for data fetching
  - [ ] Set up store configuration

## Phase 2: Project Structure Modifications
- [ ] Consolidate web architecture
  - [ ] Identify Next.js specific functionality to migrate
  - [ ] Update Metro configuration for web support
  - [ ] Move web-specific code to Expo
- [ ] Update routing and navigation
  - [ ] Fully migrate to expo-router
  - [ ] Set up web routing configuration
  - [ ] Ensure deep linking across platforms
- [ ] Set up API endpoints structure
  - [ ] Create `/api` directory structure
  - [ ] Identify business logic for API endpoints
  - [ ] Set up route handlers for React Server Components
- [ ] **NEW: Implement Zustand store structure**
  - [ ] Create store directory
  - [ ] Set up store slices
  - [ ] Implement persistence where needed

## Phase 3: Code Adaptations
- [ ] Fix breaking changes
  - [ ] Update component imports
  - [ ] Fix deprecated method calls
  - [ ] Update to new API patterns
- [ ] Migrate from NativeWind to Gluestack UI
  - [ ] Replace `className` props with Gluestack components
  - [ ] Update typography components
  - [ ] Refactor layout components (use Box, VStack, HStack)
  - [ ] Migrate buttons and interactive elements
  - [ ] Update card components
- [ ] Implement React Server Components
  - [ ] Identify components for server-side rendering
  - [ ] Set up data fetching patterns
  - [ ] Convert appropriate components to RSCs
- [ ] **NEW: Implement React Query**
  - [ ] Create query hooks for data fetching
  - [ ] Set up query invalidation
  - [ ] Implement mutations for data updates
  - [ ] Configure caching strategy

## Phase 4: API and Backend Integration
- [ ] API Endpoint Implementation
  - [ ] Convert Supabase client calls to API endpoints
    - [ ] Authentication flows
    - [ ] User profile data
    - [ ] Calculator logic
    - [ ] Category and feature unlocking
  - [ ] Implement server-side validation
  - [ ] Set up error handling
- [ ] EAS Configuration
  - [ ] Set up EAS Build
  - [ ] Configure EAS Update
  - [ ] Set up EAS Hosting for web
- [ ] **NEW: Integrate Zustand with API layer**
  - [ ] Connect React Query results to Zustand state
  - [ ] Implement optimistic updates
  - [ ] Set up synchronization between local and remote state

## Phase 5: Testing and Optimization
- [ ] Cross-platform testing
  - [ ] iOS functionality
  - [ ] Android functionality
  - [ ] Web functionality
  - [ ] Navigation flows
- [ ] Web optimization
  - [ ] SEO improvements
  - [ ] Loading performance
  - [ ] Responsive design
- [ ] React Server Components testing
  - [ ] Verify performance benefits
  - [ ] Test hydration
  - [ ] Benchmark loading improvements
- [ ] **NEW: Test Bun toolchain**
  - [ ] Test build performance
  - [ ] Verify package compatibility
  - [ ] Optimize Bun configuration

## Implementation Details

### Code to API Conversion Candidates
1. Numeric calculator logic (`numCalculator.ts`)
2. Authentication flows (currently using Supabase directly)
3. User profile data fetching
4. Category and feature unlocking logic

### Gluestack UI v2 Component Mapping
| Current Component | Gluestack Replacement |
|-------------------|------------------------|
| Button components | Gluestack Button |
| Cards | Gluestack Box, VStack with styling |
| Text input | Gluestack Input |
| Layout components | Gluestack containers |
| Typography | Gluestack Text, Heading |
| Accordion | Gluestack Accordion |
| Background | Gluestack Box with background |

### React Query Implementation
| Data Type | Query Key | Endpoints |
|-----------|-----------|-----------|
| User Profile | `['user', userId]` | `/api/user/[id]` |
| Categories | `['categories']` | `/api/categories` |
| Category Details | `['category', categoryId]` | `/api/category/[id]` |
| Calculator Results | `['calculator', params]` | `/api/calculator` |

### Zustand Store Structure
```typescript
interface AppState {
  user: {
    profile: UserProfile | null;
    isAuthenticated: boolean;
    preferences: UserPreferences;
  };
  calculator: {
    history: CalculationResult[];
    currentInput: CalculationInput;
  };
  ui: {
    theme: 'light' | 'dark';
    navigationState: NavigationState;
  };
}
```

### React Server Components Candidates
1. Data-heavy components:
   - User profile screens
   - Category listing screens
   - Motivational card listings
2. Static content components:
   - Help screens
   - Information displays

### Bun Migration Benefits
- Faster installation and build times
- Better TypeScript integration
- Improved performance for server components
- Simplified configuration

### Progress Tracking
- Phase 1 Started: [DATE]
- Phase 1 Completed: [DATE]
- Phase 2 Started: [DATE]
- ...

## Technical Notes
- Monorepo structure will be maintained
- Solito will be phased out in favor of expo-router
- API endpoints will use React Server Components where possible
- Gluestack UI will replace both NativeWind and custom components
- Zustand will manage UI state and cached data
- React Query will handle remote data fetching
- Bun will replace Yarn for package management and builds