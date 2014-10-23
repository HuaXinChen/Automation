#import "../Automation.js"

function testSteps () {
	var email = "vchen@pnimedia.com";
	var passWord = "pni1234";
    
    WalcaApp.login(email,passWord);
	
	WalcaApp.Mainscreen.orderPrintButton().tap();
    
	delayInSeconds(1);
	
	screen("Image sources")
	
	WalcaApp.OrderPrintScreen.imageSourceByName("iPad Photos").tap();
    
	delayInSeconds(1);

	screen("iPad Photos")

    WalcaApp.navigationLeftButton().tap();

	delayInSeconds(1);

	WalcaApp.OrderPrintScreen.imageSourceByName("Walmart Photo Centre").tap();

	delayInSeconds(1);

	screen("Walmart Photo Centre")
    
    WalcaApp.navigationLeftButton().tap();
    
    WalcaApp.navigationLeftButton().tap();

	WalcaApp.logout();

}

test("Login_CorrectCredentials_ImageSource", testSteps);