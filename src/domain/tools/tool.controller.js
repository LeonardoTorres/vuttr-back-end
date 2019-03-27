const toolsService = require("./tool.service");

class ToolsController {
  async create(req, res) {
    const { body: tool } = req;
    const toolStored = await toolsService.create(tool);
    return res.json(toolStored);
  }

  async update(req, res) {
    const { body: tool } = req;
    const toolUpdated = await toolsService.update(tool);
    return res.json(toolUpdated);
  }

  async list(req, res) {
    const { tag } = req.query;
    let toolList;
    if (tag) {
      toolList = await toolsService.findByTag(tag);
    } else {
      toolList = await toolsService.list();
    }
    return res.json(toolList);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deletedTool = await toolsService.delete(id);
    if (deletedTool){
      return res.json({});
    }else{
      return res.status(404).json();
    }
   
  }
}
module.exports = new ToolsController();
