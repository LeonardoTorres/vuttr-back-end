const toolsService = require("./tool.service");

class ToolsController {
  async create(req, res) {
    const { body: tool } = req;
    const toolStored = await toolsService.create(tool);
    return res.json(toolStored);
  }
 
  async update (req, res){
    const { body: tool } = req;
    const toolUpdated = await toolsService.update(tool);
    return res.json(toolUpdated);
  }
  
  async list(req, res) {
    const toolsList = await toolsService.list();
    return res.json(toolsList);
  }

  async delete(req, res){
    const { id } = req.params;
    toolsService.delete(id);
  }
}
module.exports = new ToolsController();
