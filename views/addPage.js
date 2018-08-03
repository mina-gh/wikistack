const html = require("html-template-tag");
const layout = require("./layout");
const marked = require('marked');

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>
      <label for="name" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea name="content" id="content" rows="4" cols="142"></textarea>
      </div>
    </div>

    <div>
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="openStatus" name="status" type="radio" value="open" checked>Open</input>
        <input id="closedStatus" name="status" type="radio" value="closed">Closed</input>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
