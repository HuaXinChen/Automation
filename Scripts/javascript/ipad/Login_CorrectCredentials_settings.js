#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	var email = "vchen@pnimedia.com";
	var passWord = "pni1234";

    WalcaApp.logout();
    
    WalcaApp.login(email,passWord);

    WalcaApp.goToSettingScreen();
    
	delayInSeconds(2);

	screen("Signed in");

	var signedInAs = WalcaApp.SettingScreen.signedInAsStaticText().isValid();

	assertTrue(signedInAs, "Signed In As not Found");

	var emailID = WalcaApp.SettingScreen.emailDisplay(email).isValid();

	assertTrue(emailID, "Email Id not Found");
}

test("Login_CorrectCredentials_settings", testSteps);