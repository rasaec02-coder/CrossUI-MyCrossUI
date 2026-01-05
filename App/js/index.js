// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("17.523809523809526em")
                .setTop("16.761904761904763em")
                .setWidth("21.02857142857143em")
                .setLabelSize("8em")
                .setLabelCaption("Password")
                .setType("password")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group1")
                .setLeft("13.714285714285714em")
                .setTop("8.380952380952381em")
                .setWidth("28.64761904761905em")
                .setHeight("12.266666666666667em")
                .setZIndex(0)
                .setCaption("Log-in")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4")
                .setLeft("3.7333333333333334em")
                .setTop("2.9714285714285715em")
                .setWidth("20.8em")
                .setHeight("2.1333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
                .setType("none")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});