const toolsRepository = require("./tool.repository");

class ToolsService {
  async create(tool) {
    const toolStored = await toolsRepository.create(tool);
    return toolStored;
  }

  async update(tool) {
    const toolUpdated = await toolsRepository.update(tool);
    return toolUpdated;
  }

  async findByTag(tag) {
    const toolsList = await toolsRepository.findByTag(tag)
    return toolsList;
  }

  async list() {
    const toolsList = await toolsRepository.list();
    return toolsList;
  }

  async delete(id) {
    const storedTool = await toolsRepository.delete(id);
    return storedTool;
  }
}

module.exports = new ToolsService();
