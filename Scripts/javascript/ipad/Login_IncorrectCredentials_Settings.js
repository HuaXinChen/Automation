#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	var email = "test@test.com";
	var passWord = "password";


    WalcaApp.logout();
    
    WalcaApp.goToSettingScreen();
    
    WalcaApp.SettingScreen.loginOptionButton().tap();
    
    WalcaApp.SettingScreen.userNameTextField().tap();

    typeTextUsingKeyboard(email);

    WalcaApp.SettingScreen.passwordTextField().tap();

    typeTextUsingKeyboard(passWord);

    WalcaApp.SettingScreen.agreementSwitch().setValue(1);

    WalcaApp.SettingScreen.loginButton().tap();

	delayInSeconds(2);

	screen("Could not login pop up")

	var couldNotLoginButton = UIATarget.localTarget().frontMostApp().mainWindow().buttons()["OK"];

	assertTrue(couldNotLoginButton.isValid(), "OK button not Found");

	var warningMessage = UIATarget.localTarget().frontMostApp().mainWindow().staticTexts()["The email address or password you entered is incorrect."].isValid();

	assertTrue(warningMessage, "Warning message not Found");

	couldNotLoginButton.tap();

	delayInSeconds(1);

	screen("Pop up dismissed")
}

test("Login_IncorrectCredentials_settings", testSteps);