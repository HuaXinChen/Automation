
#import "../Automation.js"

function testSteps () {
	var target = UIATarget.localTarget();
	var window = target.frontMostApp().mainWindow();

	var email = "vchen@pnimedia.com";
	var passWord = "pni1234";

    //WalcaApp.logout();
    //WalcaApp.login(email, passWord);
    WalcaApp.loginWithDefault();

    //WalcaApp.logout();

}

test("RefactorTest", testSteps);