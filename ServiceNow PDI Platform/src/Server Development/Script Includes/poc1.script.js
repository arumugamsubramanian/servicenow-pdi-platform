var poc1 = Class.create();
poc1.prototype = {
    initialize: function() {
        var gr = new GlideRecord('sys_user');
        gr.get(gs.getUserID());
        gs.info(gr.name);
    },
    type: 'poc1'
};