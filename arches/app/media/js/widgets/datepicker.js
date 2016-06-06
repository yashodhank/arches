define(['knockout', 'underscore', 'bindings/datepicker'], function (ko, _) {
    /**
    * registers a datepicker-widget component for use in forms
    */
    return ko.components.register('datepicker-widget', {
        viewModel: function(params) {
            this.value = params.value;
            _.extend(this, _.pick(params.config, 'label', 'placeholder'));
        },
        template: { require: 'text!widget-templates/datepicker' }
    });
});
