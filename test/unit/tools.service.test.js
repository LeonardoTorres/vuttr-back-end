require('../../src/env.config');
require('../../src/db.connection');

const toolsService = require("../../src/domain/tools/tool.service");

beforeEach(async () => {

});

it("should return a new stored tool", async () => {
  const tool = {
    title: "hotel",
    link: "https://github.com/typicode/hotel",
    description:
      "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
    tags: [
      "node",
      "organizing",
      "webapps",
    ]
  };
  const storedTool = await toolsService.create(tool);
  expect(storedTool).toHaveProperty('id');
});

it("should return a tools list", async (done) =>{
  const toolsList = await toolsService.list();
  expect(toolsList.length).toBeGreaterThan(0);
  done();
})

