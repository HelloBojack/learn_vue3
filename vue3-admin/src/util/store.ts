class MyStorage {
  constructor() {}
  public set(key: string, value: any) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  public get(key: string) {
    let value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return null;
    }
  }
  public remove(key: string) {
    localStorage.removeItem(key);
  }
  public clear() {
    localStorage.clear();
  }
}
const myStorage = new MyStorage();
export default myStorage;
