using MyService as service from '../../srv/service';

annotate service.tab with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Plant',
            Value : Plant,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SBG',
            Value : SBG,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SBU',
            Value : SBU,
        },
    ]
);
annotate service.tab with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Plant',
                Value : Plant,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SBG',
                Value : SBG,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SBU',
                Value : SBU,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
