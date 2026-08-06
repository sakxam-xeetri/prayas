# Contributor's Guide

## Purpose
This document details how developers and open-source contributors can report issues, propose features, and submit code to the project.

## Contribution Workflow
1.  **Fork the Repository**: Fork the target project repository on GitHub.
2.  **Create a Feature Branch**: Branch off `develop` using a descriptive name:
    ```bash
    git checkout -b feature/your-feature-name develop
    ```
3.  **Implement Changes**: Write code adhering to the project's [Coding Standards](Coding_Standards.md).
4.  **Run Tests**: Run unit tests and verify the code builds locally.
5.  **Submit a Pull Request (PR)**: Target your PR to merge into the `develop` branch. Detail the changes made, the issue fixed, and the testing performed.
