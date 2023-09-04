export default interface AppContextType {
  activeTaskGroupId: number;

  setActiveTaskGroupId: (id: number) => void;
}
