var WalcaApp = {
    
    Mainscreen : {
        menuButton : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["Menu"].images()["Menu"];
        },

        settingInMenu : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Settings"];
        },
        
        orderPrintButton: function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[0].webViews()[0].links()["ORDER PRINTS"].links()["ORDER PRINTS"];
        }

        
    },
    
    SettingScreen: {
        //Interactive elements
        loginOptionButton : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[0].buttons()["Login"];
        },
        
        userNameTextField : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Username"].textFields()["Username"];
        },
        passwordTextField : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Password"].secureTextFields()["Password"];
        },

        agreementSwitch : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].switches()[0];
        },

        loginButton : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].buttons()["Log In"];
        },
        
        signOutButton : function () {
            return UIATarget.localTarget().frontMostApp().navigationBar().buttons()["Sign Out"];
        },
        
        backButton : function () {
            return UIATarget.localTarget().frontMostApp().navigationBar().leftButton();
        },
        
        
        
        //Display elements
        signedInAsStaticText : function () {
            return UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[0].staticTexts()["Signed in as:"];
        },
        
        emailDisplay : function (email) {
            return UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[0].staticTexts()[email];    
        }
        
        
    },
    
    OrderPrintScreen : {
        
        PickupLocationScreen : {
            locationSearchBar : function () {
                return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].searchBars()[0];
            },
            
            locationCellByName : function(name) {
                return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].cells()[name];
            }
        },
        
        imageSourceByName: function (sourceName) {
            return UIATarget.localTarget().frontMostApp().mainWindow().tableViews()["Empty list"].cells()[sourceName];
        },
        
        orderPrintsButton : function () {
            return UIATarget.localTarget().frontMostApp().toolbar().buttons()["Order Prints"];
        },
        
        checkoutButton : function () {
            return UIATarget.localTarget().frontMostApp().navigationBar().buttons()["Checkout"];
        }
    },
    
    
    navigationLeftButton : function () {
        return UIATarget.localTarget().frontMostApp().navigationBar().leftButton();
    },
    
	login: function(email, passWord) {
		
        if(!this.isLoggedin())
        {
            this.SettingScreen.loginOptionButton().tap();

            this.SettingScreen.userNameTextField().tap();

            typeTextUsingKeyboard(email);

            this.SettingScreen.passwordTextField().tap();

            typeTextUsingKeyboard(passWord);

            this.SettingScreen.agreementSwitch().setValue(1);

            this.SettingScreen.loginButton().tap();

            delayInSeconds(2);
        }
        
        this.navigationLeftButton().tap();
	},
    
    loginWithDefault: function() {
		var email = "vchen@pnimedia.com";
	    var passWord = "pni1234";
    
        this.login(email, passWord);
        
	},

	logout: function () {
		
        if(this.isLoggedin())
        {
            this.SettingScreen.signOutButton().tap();
        }
        
        this.navigationLeftButton().tap();
	},
    
    goToSettingScreen : function(){
        this.Mainscreen.menuButton().tap();
    
        delayInSeconds(1);

        this.Mainscreen.settingInMenu().tap();  
    },
    
    goToOrderPrintScreen : function(){
        this.Mainscreen.orderPrintButton().tap();
    
        delayInSeconds(1);
    },
    
    isLoggedin: function () {
        
        this.Mainscreen.menuButton().tap();
    
        delayInSeconds(1);

        this.Mainscreen.settingInMenu().tap();
        
        //return this.SettingScreen.signOutButton().isValid();
        
        return isElementValid(this.SettingScreen.signOutButton());
    }
    
    
}