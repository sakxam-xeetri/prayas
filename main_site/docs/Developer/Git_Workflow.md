# Git Workflow & Commit Guidelines

## Purpose
This document outlines the Git branching strategy and commit message guidelines for developers contributing to the project.

## Branching Strategy
PRAYAS repositories use a simplified feature-branch workflow:
*   `main`: Holds the stable release code. Direct commits to `main` are blocked.
*   `develop`: The integration branch for current features.
*   `feature/feature-name`: Temporary branch used for developing new features.
*   `bugfix/bug-name`: Temporary branch used for fixing bugs.

## Commit Message Format
Commit messages must follow the Conventional Commits specification:
`<type>(<scope>): <description>`

### Standard Types
*   `feat`: Adding a new feature.
*   `fix`: Fixing a bug.
*   `docs`: Documentation changes.
*   `style`: Code formatting changes (whitespace, semicolons).
*   `refactor`: Code changes that do not fix bugs or add features.
*   `test`: Adding or updating test code.

### Examples
*   `feat(motor): implement PID acceleration ramping`
*   `fix(servo): resolve I2C lockup during initialization`
*   `docs(wiring): update GPIO pin mapping table`
