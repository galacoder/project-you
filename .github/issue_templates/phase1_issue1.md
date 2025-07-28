## Migrate from Yarn to Bun Package Manager

### Overview
Migrate the entire monorepo from Yarn to Bun for improved performance and better TypeScript support. Bun offers faster installation times, built-in TypeScript execution, and better monorepo handling.

### Tasks
- [ ] Update root package.json scripts from yarn to bun commands
- [ ] Update apps/expo/package.json scripts  
- [ ] Update apps/next/package.json scripts
- [ ] Update packages/app/package.json scripts
- [ ] Convert yarn.lock to bun lockfile
- [ ] Update CI/CD configurations if any exist
- [ ] Update all documentation references from yarn to bun
- [ ] Verify bunfig.toml configuration is optimal
- [ ] Test all scripts work correctly with bun

### Technical Details
- Current package manager: Yarn (classic)
- Target: Bun (latest stable version)
- Monorepo structure uses workspaces
- Existing bunfig.toml needs review for optimal settings

### Files to Modify
- `/package.json`
- `/apps/expo/package.json`
- `/apps/next/package.json`
- `/packages/app/package.json`
- `/bunfig.toml`
- `/CLAUDE.md`
- `/README.md`
- Any CI/CD workflow files

### Success Criteria
- All `bun install` commands work in root and all workspaces
- All `bun run` scripts execute properly
- No breaking changes in dependency resolution
- CI/CD pipelines pass (if applicable)
- Development workflow documented in CLAUDE.md
- Faster installation times achieved

### Claude Instructions
@claude Please implement this migration following these steps:

1. First, read all package.json files to understand current scripts and dependencies
2. Update all package.json files to replace yarn commands with bun equivalents:
   - `yarn` → `bun install`
   - `yarn add` → `bun add`
   - `yarn remove` → `bun remove`
   - `yarn run` → `bun run`
3. Remove yarn.lock file (bun will create bun.lockb automatically)
4. Review and optimize bunfig.toml for the monorepo structure
5. Run `bun install` in the root to generate lockfile
6. Test key scripts work correctly:
   - `bun run native`
   - `bun run web`
   - `bun run commit`
7. Update CLAUDE.md documentation with the changes
8. Update README.md if it contains yarn references
9. Verify the migration is complete and working

Please ensure all changes maintain cross-platform compatibility and don't break existing functionality.