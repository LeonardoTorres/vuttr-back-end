const toolSchema = require("./tool.schema");

class ToolsRepository {
  async create(tools) {
    return toolSchema.create(tools);
  }

  async findByTag(tag) {
    return toolSchema.find({ tags: tag });
  }

  async update(tool) {
    const { _id } = tool;
    return toolSchema.findOneAndUpdate({ _id }, tool, { new: true });
  }

  async list(){
    return toolSchema.find();  
  }

  async delete(id){
    return toolSchema.findOneAndDelete({ _id: id });
  }
}

module.exports = new ToolsRepository();
