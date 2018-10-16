import { injectGlobal } from 'react-emotion'

import reset from './reset'

// mini CSS reset: https://github.com/jgthms/minireset.css
injectGlobal`${reset}`
