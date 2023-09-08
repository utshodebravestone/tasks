export default interface AppContextType {
  activeTaskGroupIndex: number;

  setActiveTaskGroupIndex: (index: number) => void;
}
