export function makeCrudController(Model, options = {}) {
  const publicFilter = options.publicFilter || { published: true };

  return {
    list: async (req, res, next) => {
      try {
        const filter = req.userIsAdmin ? {} : publicFilter;
        const items = await Model.find(filter).sort({ createdAt: -1 });
        res.json(items);
      } catch (err) { next(err); }
    },
    get: async (req, res, next) => {
      try {
        const item = await Model.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.json(item);
      } catch (err) { next(err); }
    },
    create: async (req, res, next) => {
      try {
        const item = await Model.create(req.body);
        res.status(201).json(item);
      } catch (err) { next(err); }
    },
    update: async (req, res, next) => {
      try {
        const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.json(item);
      } catch (err) { next(err); }
    },
    remove: async (req, res, next) => {
      try {
        const item = await Model.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.json({ message: "Deleted successfully" });
      } catch (err) { next(err); }
    }
  };
}