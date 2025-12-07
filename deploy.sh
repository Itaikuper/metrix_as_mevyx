#!/bin/bash

# Deploy script for MEVYX
# This script installs dependencies, builds the React app, and deploys to public_html

set -e  # Exit on any error

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PUBLIC_HTML="/home/u123456789/domains/mevyx.com/public_html"

echo "=== Starting MEVYX deployment ==="
echo "Repository directory: $SCRIPT_DIR"
echo "Public HTML directory: $PUBLIC_HTML"

# Navigate to the repository directory
cd "$SCRIPT_DIR"

# Install dependencies
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Build the React application
echo "Building the application..."
npm run build

# Remove old deployment (if it exists)
if [ -d "$SCRIPT_DIR/dist" ]; then
    echo "Cleaning up old build files..."
        # Copy new built files to public_html
            echo "Copying dist files to public_html..."
                rm -rf $PUBLIC_HTML/*
                    cp -r $SCRIPT_DIR/dist/* $PUBLIC_HTML/

                            echo "=== Deployment completed successfully ==="
                            else
                                echo "Error: dist directory not found after build"
                                    exit 1
                                    fi
