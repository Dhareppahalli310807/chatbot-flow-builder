# Chatbot Flow Builder

This project is a simple Chatbot Flow Builder built using React and React Flow. The goal is to create an extensible flow builder that allows for easy addition of new features.

## Overview

A chatbot flow is constructed by connecting multiple messages together to determine the order of execution. This project currently supports only text messages, but it is designed to be extensible for future addition of different types of nodes.

## Features

- **Text Node**: 
  - Supports text messages.
  - Multiple text nodes can be added in one flow.
  - Nodes are added to the flow by dragging and dropping from the Nodes Panel.
  
- **Nodes Panel**: 
  - Houses all types of nodes that the Flow Builder supports.
  - Currently supports only text nodes but designed to add more types in the future.

- **Edge**: 
  - Connects two nodes together.
  
- **Source Handle**: 
  - Source of a connecting edge.
  - Can only have one edge originating from a source handle.
  
- **Target Handle**: 
  - Target of a connecting edge.
  - Can have more than one edge connecting to a target handle.
  
- **Settings Panel**: 
  - Replaces the Nodes Panel when a node is selected.
  - Allows editing of the selected text node's text.
  
- **Save Button**: 
  - Saves the flow.
  - Shows an error if there are multiple nodes and more than one node has empty target handles.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhareppahalli310807/chatbot-flow-builder.git
   cd chatbot-flow-builder
