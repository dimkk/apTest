angular.module('apTest')
  .service('tasker', function (apModelFactory) {
    // Object Constructor (class)
    // All list items are passed to the below constructor which inherits from
    // the ListItem prototype.
    function Task(obj) {
      var self = this;
      _.extend(self, obj);
    }

    // Model Constructor
    var model = apModelFactory.create({
      factory: Task,
      list: {
        // Maps to the offline XML file in dev folder (no spaces)
        name: 'test',
        // List GUID can be found in list properties in SharePoint designer
        guid: '{949139B4-25DC-4D80-90DA-5CED6CF8B057}',
        customFields: [
          // Array of objects mapping each SharePoint field to a
          // property on a list item object
          {
            staticName: 'Title',
            objectType: 'Text',
            mappedName: 'title',
            readOnly:false
          },
          {
            staticName: 'superfield',
            objectType: 'Text',
            mappedName: 'superfield',
            readOnly:false
          },
          {
            staticName: 'topfield',
            objectType: 'Text',
            mappedName: 'topfield',
            readOnly:false
          }
        ]
      }
    });

    // Fetch data (pulls local xml if offline named model.list.title + '.xml')
    // Initially pulls all requested data.  Each subsequent call just pulls
    // records that have been changed, updates the model, and returns a reference
    // to the updated data array
    // @returns {Array} Requested list items
    model.registerQuery({name: 'primary'});

    return model;
  });
