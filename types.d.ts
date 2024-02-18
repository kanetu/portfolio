// export {} is important, without this statement, nextjs will not apply this declare
export {};

declare global {
  interface Window {
    hljs: {
      // TODO: Install highlightjs via NPM instead of using external code
      highlightElement: (el: any) => void;
    };
  }
}
