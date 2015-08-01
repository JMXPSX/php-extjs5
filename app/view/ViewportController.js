Ext.define('App.view.ViewportController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.CustomerFormCtrl',

  onChangeCustomer: function(combobox) {
    combobox.up('form').loadRecord(combobox.getSelection());
  },

  onDeleteCustomer: function(button){
    console.log('Delete test');

    var form    = button.up('form'),  
        record  = form.getRecord();

        if(record){
          Ext.Msg.alert('Delete', 'Customer ID ' + record.get('id'));
          // Refer to getStore of CustomerStore but with delete action trigger
        }else{
          Ext.Msg.alert('Success', 'No Customer selected');
        }

        

  },

  onSaveCustomer: function(button) {
    var form    = button.up('form'),  
        record  = form.getRecord();

    form.submit({
      success: function() {
        console.log(record);
        if(record) {
          Ext.Msg.alert('Success', 'Customer <b>' + record.get('name') + '</b> has been updated.');
          
        } else {
          Ext.Msg.alert('Success', 'A new customer has been added.');
          form.reset();
        }
        Ext.getStore("CustomerStore").reload();
      },
      failure: function(form, action) {
        Ext.Msg.alert('Failure', 'Something wrong');
      }
    });
  }
});