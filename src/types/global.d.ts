declare interface NodeModule extends globalThis.NodeModule {
  hot?: {
    accept: (path: string, callback: VoidFunction) => void;
  };
}
