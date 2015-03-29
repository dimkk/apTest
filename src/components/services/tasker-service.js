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
        title: 'test',
        // List GUID can be found in list properties in SharePoint designer
        guid: '{949139B4-25DC-4D80-90DA-5CED6CF8B057}',
        customFields: [
      //    {
      //      staticName: 'ideaReleaseEffect',
      //      mappedName: 'm_ideaReleaseEffect',
      //      objectType:'Text',
      //      readOnly:false
      //    },
      //    {
      //      staticName: 'ideaPlanReleaseDate',
      //      mappedName: 'm_ideaPlanReleaseDate',
      //      objectType:'Text',
      //      readOnly:false
      //    },
      //    {
      //      staticName: 'ideaPlanReleaseDate',
      //      mappedName: 'm_ideaPlanReleaseDate',
      //      objectType:'Text',
      //      readOnly:false
      //    },
      //ideaDifficultyFK: '',
      //ideaSignFK         :'',
      //ideaPrototypeFK:'',
      //ideaDifficulty: '',
      //ideaSign         :'',
      //ideaPrototype:'',
      //executorDegree: '',
      //ThemesLookup: '',
      //ideaAuthorInvolvement: '',
      //ideaExpertComment: '',
      //Modified:'',
      //ideaTechLogJSON: '',
      //Created:'',
      //FileDirRef:'',
      //ID:'',
      //Attachments: '',
      //Title: '', //1
      //ideaAuthorsFIO: '', //1
      //ideaFk: '',
      //ideaAuhtorManagerFIO: '',
      //ideaDescription: '', //1
      //ideaResolve: '',
      //financeNeeded: '', //1
      //ideaScopeGK: '', //1
      //ideaScopeOther: '',//1
      //ideaContactsPhone: '', //1
      //ideaContactsEmail: '',//1
      ////<CHOICES>
      ////<CHOICE>Невозможно оценить на данном этапе</CHOICE>
      ////<CHOICE>Для оценки экономического эффекта нужна помощь экономистов</CHOICE>
      ////<CHOICE>Представить свой расчет экономического эффекта</CHOICE>
      ////</CHOICES>
      //ideaEconomicEffect: '',//1
      //ideaEconomicEffectOther: '',//1
      ////<CHOICE>Повышение уровня удовлетворенности клиентов</CHOICE>
      ////<CHOICE>Сокращение сроков процесса</CHOICE>
      ////<CHOICE>Повышение качества процесса</CHOICE>
      ////<CHOICE>Сокращение трудозатрат</CHOICE>
      //ideaPossibleResults: '',//1
      //ideaPossibleResultsOther: '',//1
      ///*
      // <CHOICE>Зарегистрирована</CHOICE>
      // <CHOICE>На доработку</CHOICE>
      // <CHOICE>Отклонить</CHOICE>
      // <CHOICE>Передавть в ФК</CHOICE>
      // <CHOICE>Задание в ФИ</CHOICE>
      // <CHOICE>Принято</CHOICE>
      // <CHOICE>Экспертиза</CHOICE>
      // <CHOICE>Реализовано</CHOICE>
      // */
      //requestState: '',
      //ideaReleaseDate: '',
      //ideaReleaseReport: '',
      //offerState: '',
      ///*
      // <CHOICE>Готов лично реализовывать</CHOICE>
      // <CHOICE>Нужна помощь в реализации</CHOICE>
      // <CHOICE>Необходимо опеределить ответственных за реализацию</CHOICE>
      // */
      //ideaAuthorDegree: '',//1
      //
      //reWorkComment: '',
      //reWorkUserComment: '',
      //rejectedComment: '',
      //userRejectedComment: '',
      //executorPPU: '',
      //experts: '',
      //ideaFkSostav: '',
      //urpExecutorPPUComment: '',
      //FCLookup: ''

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
    model.registerQuery({
      name: 'primary',
      query: '' +
      '<Query>' +
      '   <OrderBy>' +
      '       <FieldRef Name="ID" Ascending="TRUE"/>' +
      '   </OrderBy>' +
      '</Query>'
    });

    return model;
  });
