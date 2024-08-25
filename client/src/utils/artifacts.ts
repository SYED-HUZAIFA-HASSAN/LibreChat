import dedent from 'dedent';
import type {
  SandpackProviderProps,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
// import * as shadcnComponents from '~/utils/shadcn';

const artifactFilename = {
  'application/vnd.react': 'App.tsx',
  'text/html': 'index.html',
  // 'css': 'css',
  // 'javascript': 'js',
  // 'typescript': 'ts',
  // 'jsx': 'jsx',
  // 'tsx': 'tsx',
};

const artifactTemplate: Record<string, SandpackPredefinedTemplate | undefined> = {
  'text/html': 'static',
  'application/vnd.react': 'react-ts',
  'application/vnd.code-html': 'static',
  // 'css': 'css',
  // 'javascript': 'js',
  // 'typescript': 'ts',
  // 'jsx': 'jsx',
  // 'tsx': 'tsx',
};

export function getArtifactFilename(type: string): string {
  return artifactFilename[type] ?? 'App.tsx';
}

export function getFileExtension(language?: string): string {
  switch (language) {
    case 'application/vnd.react':
      return 'tsx';
    case 'text/html':
      return 'html';
    // case 'jsx':
    //   return 'jsx';
    // case 'tsx':
    //   return 'tsx';
    // case 'html':
    //   return 'html';
    // case 'css':
    //   return 'css';
    default:
      return 'txt';
  }
}

export function getTemplate(type: string, language?: string): SandpackPredefinedTemplate {
  return (
    artifactTemplate[`${type}${(language?.length ?? 0) > 0 ? `-${language}` : ''}`] ?? 'react-ts'
  );
}

export const sharedProps: Partial<SandpackProviderProps> = {
  customSetup: {
    dependencies: {
      'lucide-react': '^0.394.0',
      'react-router-dom': '^6.11.2',
      'class-variance-authority': '^0.6.0',
      clsx: '^1.2.1',
      'date-fns': '^3.3.1',
      'tailwind-merge': '^1.9.1',
      'tailwindcss-animate': '^1.0.5',
      recharts: '2.12.7',
      '@radix-ui/react-accordion': '^1.1.2',
      '@radix-ui/react-alert-dialog': '^1.0.2',
      '@radix-ui/react-aspect-ratio': '^1.1.0',
      '@radix-ui/react-avatar': '^1.1.0',
      '@radix-ui/react-checkbox': '^1.0.3',
      '@radix-ui/react-collapsible': '^1.0.3',
      '@radix-ui/react-dialog': '^1.0.2',
      '@radix-ui/react-dropdown-menu': '^2.1.1',
      '@radix-ui/react-hover-card': '^1.0.5',
      '@radix-ui/react-label': '^2.0.0',
      '@radix-ui/react-menubar': '^1.1.1',
      '@radix-ui/react-navigation-menu': '^1.2.0',
      '@radix-ui/react-popover': '^1.0.7',
      '@radix-ui/react-progress': '^1.1.0',
      '@radix-ui/react-radio-group': '^1.1.3',
      '@radix-ui/react-select': '^2.0.0',
      '@radix-ui/react-separator': '^1.0.3',
      '@radix-ui/react-slider': '^1.1.1',
      '@radix-ui/react-switch': '^1.0.3',
      '@radix-ui/react-tabs': '^1.0.3',
      '@radix-ui/react-toast': '^1.1.5',
      '@radix-ui/react-tooltip': '^1.0.6',
      '@radix-ui/react-slot': '^1.1.0',
      '@radix-ui/react-toggle': '^1.1.0',
      '@radix-ui/react-toggle-group': '^1.1.0',
      'embla-carousel-react': '^8.2.0',
      'react-day-picker': '^9.0.8',
      vaul: '^0.9.1',
    },
  },
} as const;

export const sharedOptions: SandpackProviderProps['options'] = {
  externalResources: ['https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css'],
};

export const sharedFiles = {
  // '/lib/utils.ts': shadcnComponents.utils,
  // '/components/ui/accordion.tsx': shadcnComponents.accordian,
  // '/components/ui/alert-dialog.tsx': shadcnComponents.alertDialog,
  // '/components/ui/alert.tsx': shadcnComponents.alert,
  // '/components/ui/avatar.tsx': shadcnComponents.avatar,
  // '/components/ui/badge.tsx': shadcnComponents.badge,
  // '/components/ui/breadcrumb.tsx': shadcnComponents.breadcrumb,
  // '/components/ui/button.tsx': shadcnComponents.button,
  // '/components/ui/calendar.tsx': shadcnComponents.calendar,
  // '/components/ui/card.tsx': shadcnComponents.card,
  // '/components/ui/carousel.tsx': shadcnComponents.carousel,
  // '/components/ui/checkbox.tsx': shadcnComponents.checkbox,
  // '/components/ui/collapsible.tsx': shadcnComponents.collapsible,
  // '/components/ui/dialog.tsx': shadcnComponents.dialog,
  // '/components/ui/drawer.tsx': shadcnComponents.drawer,
  // '/components/ui/dropdown-menu.tsx': shadcnComponents.dropdownMenu,
  // '/components/ui/input.tsx': shadcnComponents.input,
  // '/components/ui/label.tsx': shadcnComponents.label,
  // '/components/ui/menubar.tsx': shadcnComponents.menuBar,
  // '/components/ui/navigation-menu.tsx': shadcnComponents.navigationMenu,
  // '/components/ui/pagination.tsx': shadcnComponents.pagination,
  // '/components/ui/popover.tsx': shadcnComponents.popover,
  // '/components/ui/progress.tsx': shadcnComponents.progress,
  // '/components/ui/radio-group.tsx': shadcnComponents.radioGroup,
  // '/components/ui/select.tsx': shadcnComponents.select,
  // '/components/ui/separator.tsx': shadcnComponents.separator,
  // '/components/ui/skeleton.tsx': shadcnComponents.skeleton,
  // '/components/ui/slider.tsx': shadcnComponents.slider,
  // '/components/ui/switch.tsx': shadcnComponents.switchComponent,
  // '/components/ui/table.tsx': shadcnComponents.table,
  // '/components/ui/tabs.tsx': shadcnComponents.tabs,
  // '/components/ui/textarea.tsx': shadcnComponents.textarea,
  // '/components/ui/toast.tsx': shadcnComponents.toast,
  // '/components/ui/toaster.tsx': shadcnComponents.toaster,
  // '/components/ui/toggle-group.tsx': shadcnComponents.toggleGroup,
  // '/components/ui/toggle.tsx': shadcnComponents.toggle,
  // '/components/ui/tooltip.tsx': shadcnComponents.tooltip,
  // '/components/ui/use-toast.tsx': shadcnComponents.useToast,
  '/public/index.html': dedent`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `,
};

export function preprocessCodeArtifacts(text?: string): string {
  if (typeof text !== 'string') {
    return '';
  }

  // Remove <thinking> tags and their content
  text = text.replace(/<thinking>[\s\S]*?<\/thinking>|<thinking>[\s\S]*/g, '');

  // Process artifact headers
  const regex = /(^|\n)(:::artifact[\s\S]*?(?:```[\s\S]*?```|$))/g;
  return text.replace(regex, (match, newline, artifactBlock) => {
    if (artifactBlock.includes('```') === true) {
      // Keep artifact headers with code blocks (empty or not)
      return newline + artifactBlock;
    }
    // Remove artifact headers without code blocks, but keep the newline
    return newline;
  });
}