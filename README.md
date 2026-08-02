# ARIA – Adaptive Reasoning Intelligence for Attack Deception

## Member 2 – SDN Module

This branch contains the Software-Defined Networking (SDN) implementation for the ARIA project.

## Overview

The SDN layer is responsible for monitoring network traffic, managing OpenFlow switches, and redirecting suspicious attackers to a deception environment (Cowrie Honeypot).

## Technologies

- Python 3.11
- OS-Ken
- OpenFlow 1.3
- Open vSwitch (Upcoming)
- Mininet (Upcoming)

## Directory Structure

```
sdn/
├── controller.py
├── run_controller.py
├── monitor.py
├── flow_manager.py
├── redirector.py
├── topology.py
└── config.py
```

## Components

### controller.py
Implements the OS-Ken SDN controller responsible for handling switch events and Packet-In messages.

### monitor.py
Processes network traffic and extracts packet information for further analysis.

### flow_manager.py
Manages OpenFlow rules that control packet forwarding.

### redirector.py
Contains the logic required to redirect suspicious traffic toward the honeypot.

### topology.py
Defines the logical ARIA network topology.

### config.py
Stores controller and network configuration values.

## Current Status

Completed:

- SDN Controller Foundation
- Traffic Monitoring Framework
- Flow Management Module
- Redirector Module
- Network Topology Blueprint
- Configuration Module

Upcoming:

- Ubuntu SDN Environment
- Mininet
- Open vSwitch
- Cowrie Integration
- Dynamic Traffic Redirection
- Backend Integration
- AI-assisted Decision Engine

## Author

Member 2 – SDN Development