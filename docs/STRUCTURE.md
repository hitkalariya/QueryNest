# QueryNest Project Structure

This document describes the organized folder structure of the QueryNest project.

## Root Directory Structure

```
QueryNest/
├── src/                    # Source code
│   ├── frontend/          # React frontend application
│   ├── backend/           # Node.js backend services
│   └── shared/            # Shared types and utilities
├── config/                # Configuration files
├── docs/                  # Documentation
├── scripts/               # Build and deployment scripts
└── tests/                 # Test files
```

## Frontend Structure (`src/frontend/`)

```
frontend/
├── components/            # React components
│   ├── AiResponse/        # AI response related components
│   ├── App/              # Main app components
│   ├── Logs/             # Logging components
│   ├── Pages/            # Page components
│   └── Search/           # Search related components
├── pages/                # Page components (alternative organization)
├── hooks/                # Custom React hooks
├── utils/                # Utility functions (moved from modules/)
├── types/                # TypeScript type definitions
├── assets/               # Static assets (images, fonts, etc.)
├── styles/               # CSS and styling files
├── public/               # Public assets
├── index.html            # Main HTML file
└── index.tsx             # Main React entry point
```

## Backend Structure (`src/backend/`)

```
backend/
├── services/             # Business logic services
│   ├── rerankerService.ts
│   └── webSearchService.ts
├── middleware/           # Express middleware and hooks
│   ├── cacheServerHook.ts
│   ├── compressionServerHook.ts
│   ├── crossOriginServerHook.ts
│   ├── internalApiEndpointServerHook.ts
│   ├── rerankerServiceHook.ts
│   ├── searchEndpointServerHook.ts
│   ├── statusEndpointServerHook.ts
│   └── validateAccessKeyServerHook.ts
├── routes/               # API route handlers
├── utils/                # Utility functions
│   ├── searchToken.ts
│   ├── handleTokenVerification.ts
│   ├── verifyTokenAndRateLimit.ts
│   ├── verifiedTokens.ts
│   ├── rankSearchResults.ts
│   └── searchesSinceLastRestart.ts
└── types/                # Backend type definitions
```

## Configuration (`config/`)

```
config/
├── biome.json            # Biome linter configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # Node.js TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── postcss.config.cjs    # PostCSS configuration
├── docker-compose.yml    # Docker Compose configuration
├── docker-compose.production.yml
├── Dockerfile            # Docker configuration
└── ecosystem.config.cjs  # PM2 configuration
```

## Documentation (`docs/`)

```
docs/
├── README.md             # Main project documentation
├── STRUCTURE.md          # This file
└── license.txt           # Project license
```

## Key Changes Made

1. **Organized Source Code**: Moved all source code into `src/` directory with clear separation between frontend and backend.

2. **Frontend Organization**: 
   - Moved `client/` contents to `src/frontend/`
   - Organized `modules/` into `utils/`
   - Moved type definitions to `types/`

3. **Backend Organization**:
   - Moved `server/` contents to `src/backend/`
   - Organized files by function:
     - Services in `services/`
     - Middleware in `middleware/`
     - Utilities in `utils/`

4. **Configuration Centralization**:
   - Moved all config files to `config/` directory
   - Updated import paths in configuration files

5. **Documentation Organization**:
   - Moved documentation files to `docs/`
   - Created this structure documentation

## Updated Import Paths

The following files have been updated to reflect the new structure:

- `package.json`: Updated lint script paths
- `config/vite.config.ts`: Updated import paths and root directory
- `config/tsconfig.json`: Updated include paths

## Benefits of This Structure

1. **Clear Separation**: Frontend and backend code are clearly separated
2. **Scalability**: Easy to add new features and maintain code
3. **Maintainability**: Related files are grouped together
4. **Configuration Management**: All config files are centralized
5. **Documentation**: Clear documentation structure
6. **Testing**: Dedicated test directory for future test files

## Development Workflow

1. Frontend development: Work in `src/frontend/`
2. Backend development: Work in `src/backend/`
3. Configuration changes: Update files in `config/`
4. Documentation: Update files in `docs/`
5. Testing: Add test files in `tests/` 