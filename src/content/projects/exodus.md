---
title: Exodus
description: An open-source agentic framework designed to orchestrate autonomous swarms for security operations. Built from the ground up for modularity.
status: Public
type: Community
image: ../../assets/projects/exodus-hero.jpg
githubUrl: https://github.com/exodialabsxyz/exodus
docsUrl: https://github.com/exodialabsxyz/exodus
order: 1
draft: false
---

## Overview

Exodus is an advanced, lightweight, open-source agentic framework built to facilitate the orchestration of autonomous AI swarms. Designed specifically with security operations in mind, it provides researchers and engineers with the modularity required to connect multiple AI agents, tools, and workflows to resolve complex security puzzles and analyze emerging threats.

The framework emphasizes interoperability and deep customizability, allowing teams to construct highly specialized task-oriented swarms rather than relying on monolithic agent structures. You can create and share your agents, add capabilities by creating plugins, and automate your agent teams for pentesting, reconnaissance, vulnerability discovery, and much more.

## Key Features

- **Model Agnostic**: Support for over 100 LLM providers via LiteLLM, including DeepSeek, Ollama, Google Gemini, OpenAI, Anthropic, and local models.
- **Modular Architecture**: Easily create or use plugins to add functionalities to your agents using simple decorators and auto-generated Pydantic schemas.
- **Multi-Agent Swarm Dynamics**: Supports dynamic agent handoffs and delegations. Move from individual agents to specialized teams with different patterns (central orchestrator, expert delegation, etc.).
- **Execution Engines**: Choose between Interactive Mode (Human-in-the-Loop) for manual operations or Automated Mode for fully autonomous execution with dynamic planning, reflection, and self-correction.
- **Secure Sandboxing**: Built-in support for Docker execution drivers, allowing tools and untrusted code to run in isolated microVMs or containers (e.g., ParrotSec).
- **Advanced Context Management**: Automatically handles long-running missions by self-summarizing older conversation history to prevent "Context Window Exceeded" errors while preserving critical findings.

## Execution Modes

EXODUS provides two distinct execution engines designed for different operational scenarios:

### Interactive Mode (Human-in-the-Loop)
The default engine for manual operation where a human operator (pentester, security analyst) maintains control and directs agent actions in real-time. Best for manual pentesting, exploratory reconnaissance, and scenarios requiring compliance or constant human oversight.

### Automated Mode (Autonomous Execution)
Enables fully autonomous operation with advanced planning, reflection, and self-correction capabilities. Designed for tasks that require minimal human intervention such as automated scanning, CI/CD security testing, bug bounties, and large-scale agent swarm deployments.

## Architecture

At its core, Exodus is built on an abstract, modular architecture:

- **Pluggable LLM Providers**: Abstract `LLMProvider` interface.
- **Extensible Memory Systems**: Implement your own `MemoryManager` (JSON, Redis, PostgreSQL, vector DBs).
- **Custom Execution Drivers**: Create new `ToolExecutionDriver` backends (Docker, Local, Kubernetes, Lambda, SSH, etc.).
- **Plugin Registry**: Automatic tool discovery via Python entry points.

## Use Cases

- **Autonomous Pentesting**: Complete resolution of capture-the-flag environments (e.g., Hack The Box machines) through dynamic reconnaissance, vulnerability discovery, and exploitation.
- **Automated Scanning & CI/CD**: Schedule unattended reconnaissance of infrastructure or integrate into pipelines for continuous assessment.
- **Threat Intelligence Aggregation**: Correlate indicators of compromise (IoCs) and generate actionable intelligence reports, significantly reducing the cognitive load on human analysts.

## Getting Started

To deploy your first Exodus swarm, run the one-line installation script:

```bash
bash <(curl -sSL https://raw.githubusercontent.com/exodialabsxyz/exodus/main/exodus/install/bootstrap.sh)
```

For full setup instructions, interactive chat sessions, and custom plugin development, refer to our [GitHub repository](https://github.com/exodialabsxyz/exodus) and documentation.