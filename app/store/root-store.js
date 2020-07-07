import { types } from 'mobx-state-tree';

const RootStore = types
  .model({
    total: types.optional(types.string, ''),
  })
  .actions((self) => ({
    setTotal(total) {
      self.total = total;
    },
  }));

export default RootStore;
