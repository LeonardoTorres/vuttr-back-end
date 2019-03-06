const Tools = require("./tool.schema");

class ToolsService {
  async create(tool) {
    const toolStored = await Tools.create(tool);
    return toolStored;
  }

  async update(tool){
    const { id } = tool;
    const toolUpdated = await Tools.findOneAndUpdate(id, tool, {new:true});
    return toolUpdated;
  }

  async list(){
    const toolsList = await Tools.find();
    return toolsList;
  }

  async delete(id){
    Tools.findByIdAndRemove(id);
  }
}

module.exports = new ToolsService();
