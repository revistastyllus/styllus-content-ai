import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start/client'
import { router } from './router'

hydrateRoot(document, <StartClient router={router} />)


