declare module 'micromodal' {
  interface MicroModalConfig {
    onShow?: (modal: HTMLElement, trigger?: HTMLElement) => void;
    onClose?: (modal: HTMLElement, trigger?: HTMLElement) => void;
    openTrigger?: string;
    closeTrigger?: string;
    openClass?: string;
    disableScroll?: boolean;
    disableFocus?: boolean;
    awaitOpenAnimation?: boolean;
    awaitCloseAnimation?: boolean;
    debugMode?: boolean;
  }

  interface MicroModal {
    init(config?: MicroModalConfig): void;
    show(targetModal: string, config?: MicroModalConfig): void;
    close(targetModal: string): void;
  }

  const MicroModal: MicroModal;
  export default MicroModal;
}
