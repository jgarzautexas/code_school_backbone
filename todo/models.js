//Create a Model Class
var TodoItem = Backbone.Model.extend({});


//Create a Model instance
var todoItem = new TodoItem(
    {description: 'Pick up milk', status: 'incomplete', id: 1}
);

todoItem.get('description'); // Pick up milk
todoItem.set({status: 'complete'});
todoItem.save()